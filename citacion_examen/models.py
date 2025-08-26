from django.db import models

# Create your models here.

class Student(models.Model):
    nombre = models.CharField(max_length=200)
    grado_actual = models.CharField(max_length=200)
    grado_presenta = models.CharField(max_length=200)
    fecha = models.DateField(blank=True, null=True)
    hora = models.TimeField(blank=True, null=True)
    costo = models.DecimalField(max_digits=12, decimal_places=2)

    def __str__(self):
        return self.nombre