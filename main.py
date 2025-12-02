from fastapi import FastAPI, UploadFile
from fastapi.responses import FileResponse
from PIL import Image, ImageEnhance
import uuid
import os

app = FastAPI()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.get("/")
def home():
    return {"status": "Backend Running"}

@app.post("/enhance")
async def enhance_image(file: UploadFile):
    img = Image.open(file.file)

    # Basic enhancement
    img = ImageEnhance.Sharpness(img).enhance(2.0)
    img = ImageEnhance.Color(img).enhance(1.3)
    img = ImageEnhance.Contrast(img).enhance(1.3)
    img = ImageEnhance.Brightness(img).enhance(1.2)

    filename = f"{UPLOAD_FOLDER}/enhanced_{uuid.uuid4()}.png"
    img.save(filename)

    return FileResponse(filename)
