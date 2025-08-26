from rest_framework import viewsets
from .serializer import Studentserializer
from .models import Student

# Create your views here.

class StudentViews(viewsets.ModelViewSet):
    serializer_class = Studentserializer
    queryset = Student.objects.all()
