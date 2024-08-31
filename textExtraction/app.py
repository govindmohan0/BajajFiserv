import os
import json
import requests
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from bson.objectid import ObjectId
import io

load_dotenv()

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# MongoDB connection
client = MongoClient(os.getenv('MONGODB_URI'))
db = client['test']  # Replace with your database name
users_collection = db['users']

PSPDFKIT_API_KEY = os.getenv('PSPDFKIT_API_KEY')
LLMWHISPERER_API_KEY = os.getenv('LLMWHISPERER_API_KEY')
LLMWHISPERER_API_URL = os.getenv('LLMWHISPERER_API_URL')

@app.get("/")
def index():
    return {"message": "Welcome to the FastAPI server!"}

@app.post("/convert/{user_id}")
async def convert_document(user_id: str):
    try:
        # Fetch user data from MongoDB
        user = users_collection.find_one({"_id": ObjectId(user_id)})
        
        if not user:
            raise HTTPException(status_code=404, detail="User not found.")
        
        image_url = user.get('image')
        if not image_url:
            raise HTTPException(status_code=404, detail="Image URL not found in user data.")

        # Download image from Cloudinary
        image_response = requests.get(image_url)
        if image_response.status_code != 200:
            raise HTTPException(status_code=image_response.status_code, detail="Failed to download image from Cloudinary.")
        
        image_file = io.BytesIO(image_response.content)
        image_file.name = 'image.png'  # Necessary to mimic an actual file object

        # Convert image to PDF using PSPDFKit
        pspdfkit_response = requests.post(
            'https://api.pspdfkit.com/build',
            headers={
                'Authorization': f'Bearer {PSPDFKIT_API_KEY}'
            },
            files={
                'file': image_file
            },
            data={
                'instructions': json.dumps({
                    'parts': [{'file': 'file'}]
                })
            },
            stream=True
        )

        if not pspdfkit_response.ok:
            raise HTTPException(status_code=pspdfkit_response.status_code, detail="Failed to convert image to PDF.")

        pdf_path = './assets/result.pdf'
        with open(pdf_path, 'wb') as pdf_file:
            for chunk in pspdfkit_response.iter_content(chunk_size=8096):
                pdf_file.write(chunk)

        # Extract text from PDF using Whisper
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
            return {"text": whisper_response.text}
        elif whisper_response.status_code == 202:
            return {
                "message": "Processing time exceeded. Use the status API.",
                "whisper-hash": whisper_response.json().get('whisper-hash')
            }
        else:
            raise HTTPException(status_code=whisper_response.status_code, detail="Failed to extract text from PDF.")

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
