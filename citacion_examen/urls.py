from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from citacion_examen import views

#Versionado de la API

router = routers.DefaultRouter()
router.register(r'student', views.StudentViews, 'student')

#Generar metodos HTTTP
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="Examen API"))
]