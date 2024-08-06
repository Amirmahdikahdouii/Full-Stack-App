# Use the official Python image from the Docker Hub.
FROM python:alpine

# Set environment variables to avoid Python buffering issues.
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container.
WORKDIR /app

# Copy the requirements file into the container at /app.
COPY requirements.txt /app/

RUN apk add --no-cache python3-dev gcc musl-dev mysql mysql-client mariadb-connector-c-dev build-base
RUN apk add --no-cache --virtual .build-deps \
    libc-dev \
     gcc \
    linux-headers \
    mariadb-dev \
    python3-dev

# Install any dependencies in the requirements file.
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code to /app.
COPY . /app/

# Expose port 8000 to the outside world.
EXPOSE 8000

# Set the default command to run the Django development server.
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
