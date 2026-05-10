from fastapi import APIRouter, UploadFile, File, HTTPException
from pypdf import PdfReader
from docx import Document
import io

router = APIRouter()

@router.post("/upload")
async def upload_cv(file: UploadFile = File(...)):
    contents = await file.read() # read raw bytes
    text = ""
    if file.filename.endswith('.pdf'):
        pdf = PdfReader(io.BytesIO(contents)) # parse PDF from memory
        for page in pdf.pages: # loop through pages
            text += page.extract_text() or ""
    elif file.filename.endswith('.docx'):
        doc = Document(io.BytesIO(contents)) # parse docx from memory
        for paragraphs in doc.paragraphs:
            text += paragraphs.text + "\n"
    else:
        raise HTTPException(
            status_code=400,
            detail="Unsupported file type. Please upload a PDF or DOCX file."
        )
    
    if not text.strip():
        raise HTTPException(
            status_code=400,
            detail="Could not extract text from the file. Make sure it's not a scanned image."
        )
    return {"cv_text": text.strip()}