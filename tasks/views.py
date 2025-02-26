from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .models import chicaMagica
from .serializer import ChicaMagicaSerializer
from rest_framework import permissions


class chicaMagicaViewSet (viewsets.ModelViewSet):
    queryset = chicaMagica.objects.all()
    serializer_class = ChicaMagicaSerializer
    permission_classes = [permissions.AllowAny]

class DetalleChicaView(APIView):
    def get(self, request, slug):
        print(f"Buscando chica con slug: {slug}")  # Mensaje de depuración
        chica = get_object_or_404(chicaMagica, slug=slug)
        print(f"Chica encontrada: {chica}")  # Mensaje de depuración
        serializer = ChicaMagicaSerializer(chica)
        return Response(serializer.data)
    
    def put(self, request, slug):
        print(f"Actualizando chica con slug: {slug}")  # Mensaje de depuración
        chica = get_object_or_404(chicaMagica, slug=slug)
        serializer = ChicaMagicaSerializer(chica, data=request.data, partial=True)  # partial=True permite actualizaciones parciales
        if serializer.is_valid():
            serializer.save()
            print(f"Chica actualizada: {serializer.data}")  # Mensaje de depuración
            return Response(serializer.data)
        print(f"Errores de validación: {serializer.errors}")  # Mensaje de depuración
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, slug):
        print(f"Eliminando chica con slug: {slug}")  # Mensaje de depuración
        chica = get_object_or_404(chicaMagica, slug=slug)
        chica.delete()
        print(f"Chica eliminada: {slug}")  # Mensaje de depuración
        return Response(status=status.HTTP_204_NO_CONTENT)