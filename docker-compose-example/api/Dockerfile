FROM python:3.8
RUN apt-get update && rm -rf /var/lib/apt/lists/*
WORKDIR /app/api
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000