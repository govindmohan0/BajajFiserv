import os
import json
import requests
from dotenv import load_dotenv
from flask import Flask, request, jsonify, render_template

# Loading environment variables from .env file
load_dotenv()

app = Flask(__name__)

PSPDFKIT_API_KEY = os.getenv('PSPDFKIT_API_KEY')
LLMWHISPERER_API_KEY = os.getenv('LLMWHISPERER_API_KEY')
LLMWHISPERER_API_URL = os.getenv('LLMWHISPERER_API_URL')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/convert', methods=['POST'])
def convert_document():
    file = request.files['image']

    pspdfkit_response = requests.post(
        'https://api.pspdfkit.com/build',
        headers={
            'Authorization': f'Bearer {PSPDFKIT_API_KEY}'
        },
        files={
            'file': file
        },
        data={
            'instructions': json.dumps({
                'parts': [{'file': 'file'}]
            })
        },
        stream=True
    )

    if not pspdfkit_response.ok:
        return jsonify({'error': 'Failed to convert image to PDF.'}), pspdfkit_response.status_code

    pdf_path = './assets/result.pdf'
    with open(pdf_path, 'wb') as pdf_file:
        for chunk in pspdfkit_response.iter_content(chunk_size=8096):
            pdf_file.write(chunk)

    with open(pdf_path, 'rb') as pdf_file:
        whisper_response = requests.post(
            LLMWHISPERER_API_URL,
            headers={
                'Content-Type': 'application/octet-stream',
                'unstract-key': LLMWHISPERER_API_KEY
            },
            params={
                'force_text_processing': 'true',
                'processing_mode': 'text',
                'output_mode': 'line-printer'
            },
            data=pdf_file.read()
        )

    if whisper_response.status_code == 200:
        return jsonify({'text': whisper_response.text})
    elif whisper_response.status_code == 202:
        return jsonify({
            'message': 'Processing time exceeded. Use the status API.',
            'whisper-hash': whisper_response.json().get('whisper-hash')
        })
    else:
        return jsonify({'error': 'Failed to extract text from PDF.'}), whisper_response.status_code


if __name__ == '__main__':
    app.run(debug=True)
