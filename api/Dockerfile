<<<<<<< HEAD
FROM python:3.12-slim

WORKDIR /api
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
=======
FROM python:3.10-slim
WORKDIR /app
>>>>>>> origin/dev
COPY . .
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]