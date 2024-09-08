import os
import json
import requests
import csv
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import openpyxl
import google.generativeai as genai
from tempfile import NamedTemporaryFile
from pymongo import MongoClient
from bson.objectid import ObjectId
import io
import logging

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)

# Configure the Gemini API
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
model = genai.GenerativeModel('gemini-1.5-flash')

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (change in production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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

@app.post("/process_convert/{user_id}")
async def process_convert(user_id: str):
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

        # Save the PDF to a temporary file
        with NamedTemporaryFile(delete=False, suffix=".pdf") as pdf_file:
            pdf_path = pdf_file.name
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
            extracted_text = whisper_response.text
        elif whisper_response.status_code == 202:
            return {
                "message": "Processing time exceeded. Use the status API.",
                "whisper-hash": whisper_response.json().get('whisper-hash')
            }
        else:
            raise HTTPException(status_code=whisper_response.status_code, detail="Failed to extract text from PDF.")
        
        print(extracted_text)

        # Generate the JSON structure using Gemini API
        json_response = model.generate_content(
            "From the following text: {}, generate a structured JSON that follows this format: {{"
            "\"Name_of_treating_Doctor\": null, "
            "\"Contact_number\": null, "
            "\"Nature_of_Illness\": null, "
            "\"Relevant_Critical_Findings\": null, "
            "\"Duration_of_present_ailment\": null, "
            "\"Date_of_First_consultation\": null, "
            "\"Past_history_of_present_ailment\": null, "
            "\"Provisional_diagnosis\": null, "
            "\"ICD_10_code\": null, "
            "\"Medical_Management\": null, "
            "\"Surgical_Management\": null, "
            "\"Intensive_Care\": null, "
            "\"Investigation\": null, "
            "\"Non_allopathic_treatment\": null, "
            "\"Route_of_Drug_Administration\": null, "
            "\"Name_of_surgery\": null, "
            "\"ICD_10_PCS_code\": null, "
            "\"Other_treatment_details\": null, "
            "\"How_did_injury_occur\": null, "
            "\"Injury_Cause_is_RTA\": null, "
            "\"Date_of_Injury\": null, "
            "\"Report_to_Police\": null, "
            "\"FIR_number\": null, "
            "\"Substance_abuse\": null, "
            "\"Test_conducted\": null, "
            "\"Maternity_is_G\": null, "
            "\"Maternity_is_P\": null, "
            "\"Maternity_is_A\": null, "
            "\"Expected_date_of_delivery\": null "
            "}}".format(extracted_text)
        )


        generated_content = json_response.candidates[0].content.parts[0].text

        # Print the extracted text
        print(generated_content)

        if generated_content is None:
            raise HTTPException(status_code=500, detail="Failed to retrieve content from the Gemini API response.")

        # Clean the data
        cleaned_content = generated_content.replace('```json\n', '').replace('\n```', '')

        # Convert to a dictionary and remove null fields
        json_data = json.loads(cleaned_content)
        cleaned_json_data = {k: v for k, v in json_data.items() if v is not None}

        # Print the cleaned JSON
        print(json.dumps(cleaned_json_data, indent=4))

        # Now parse the cleaned content as JSON
        try:
            generated_json = json.loads(cleaned_content)
            print(generated_json)
        except json.JSONDecodeError as e:
            raise HTTPException(status_code=500, detail=f"Failed to decode JSON: {e}")

        # Save JSON to a file in 'constants' folder
        constants_folder = os.path.join(os.getcwd(), 'constants')
        os.makedirs(constants_folder, exist_ok=True)
        json_file_path = os.path.join(constants_folder, 'data.json')
        
        print("JSON generated successfully")
        
        with open(json_file_path, 'w') as json_file:
            json.dump(generated_json, json_file, indent=4)

        # Convert JSON to CSV
        csv_file_path = os.path.join(constants_folder, 'data.csv')

        def flatten_json(nested_json, parent_key='', sep='_'):
            """Flatten nested JSON into a single dictionary."""
            flattened_dict = {}
            for key, value in nested_json.items():
                new_key = parent_key + sep + key if parent_key else key
                if isinstance(value, dict):
                    flattened_dict.update(flatten_json(value, new_key, sep=sep))
                elif isinstance(value, list):
                    for i, item in enumerate(value):
                        flattened_dict.update(flatten_json({f'{i}': item}, new_key, sep=sep))
                else:
                    flattened_dict[new_key] = value
            return flattened_dict

        with open(csv_file_path, 'w', newline='') as csv_file:
            csv_writer = csv.writer(csv_file)
            
            # Flatten the JSON and extract the keys (for headers) and values
            flattened_json = flatten_json(generated_json)
            
            # Write headers
            csv_writer.writerow(flattened_json.keys())
            
            # Write the corresponding values
            csv_writer.writerow(flattened_json.values())

        # Return the CSV file for download
        return FileResponse(csv_file_path, media_type='text/csv', filename="data.csv")

    except Exception as e:
        logging.error("An error occurred in process_convert: %s", str(e))
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
