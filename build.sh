#!/usr/bin/env bash
# Exit on error
set -o errexit

# Install backend dependencies
pip install -r backend/requirements.txt

# Run backend migrations
python backend/manage.py migrate --noinput

# Collect static files
python backend/manage.py collectstatic --noinput

# Install frontend dependencies
npm install --prefix frontend

# Build frontend
npm run build --prefix frontend

# Move frontend build to backend
mkdir -p backend/staticfiles
cp -a frontend/build/. backend/staticfiles/