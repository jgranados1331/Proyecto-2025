from django.db import models
from django.contrib.auth.models import User
from autoslug import AutoSlugField

class ciudad (models.Model):
    nombre_ciudad=models.CharField(max_length=50, null=False, unique=True)

    def __str__(self):
        return self.nombre_ciudad
    
class estadoActual(models.Model):
    tipo_estado= models.CharField(max_length=9, null=False, unique=True)
    
    def __str__(self):
        return self.tipo_estado
    
class chicaMagica(models.Model):
    nombre=models.CharField(max_length=30,null=False)
    apellido=models.CharField(max_length=30, null=False)
    edad=models.IntegerField(null=False)
    descripcion=models.CharField(max_length=250, null=True, default='')
    fecha_contratacion=models.DateField(null=False)
    color=models.CharField(max_length=15)
    id_ciudad=models.ForeignKey(ciudad, on_delete=models.CASCADE, related_name='chicas')
    id_estado_actual=models.ForeignKey(estadoActual, on_delete=models.CASCADE, related_name='chicas')
    imagen=models.ImageField(upload_to='chicas', null=False, )
    slug=AutoSlugField(populate_from='nombre', unique=True)

    def __str__(self):
        return self.nombre
# Create your models here.
