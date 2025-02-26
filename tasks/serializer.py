from rest_framework import serializers
from .models import chicaMagica, ciudad, estadoActual


class CiudadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ciudad
        fields = ['id', 'nombre_ciudad']

class EstadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = estadoActual
        fields = ['id', 'tipo_estado']


class ChicaMagicaSerializer(serializers.ModelSerializer):
    id_ciudad = serializers.PrimaryKeyRelatedField(queryset=ciudad.objects.all())
    id_estado_actual = serializers.PrimaryKeyRelatedField(queryset=estadoActual.objects.all())

    class Meta:
        model = chicaMagica
        fields = '__all__'

class ChicaMagicaReadSerializer(serializers.ModelSerializer):
    id_ciudad = CiudadSerializer(read_only=True)
    id_estado_actual = EstadoSerializer(read_only=True)

    class Meta:
        model = chicaMagica
        fields = '__all__'