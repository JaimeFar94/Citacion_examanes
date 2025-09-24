#!/usr/bin/env bash
# Exit on error
set -o errexit

pip install -r requirements.txt

#Inicializar las migraciones si no existen
python manage.py collectstatic --no --input
python manage.py migrate