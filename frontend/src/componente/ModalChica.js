import React, { useState } from 'react';
import axios from 'axios';
import './ModeloChica.css'

function ModalChica({ onClose, onSave, chica }) {
  const [nombre, setNombre] = useState(chica ? chica.nombre : '');
  const [apellido, setApellido] = useState(chica ? chica.apellido : '');
  const [edad, setEdad] = useState(chica ? chica.edad : '');
  const [fecha_contratacion, setFechaContrato] = useState(chica ? chica.fecha_contratacion : '');
  const [color, setColor] = useState(chica ? chica.color : '');
  const [descripcion, setDescripcion] = useState(chica ? chica.descripcion : '');
  const [id_ciudad, setCiudad] = useState(chica ? chica.id_ciudad : '');
  const [id_estado_actual, setEstado] = useState(chica ? chica.id_estado_actual : '');
  const [imagen, setImagen] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('edad', edad);
    formData.append('fecha_contratacion', fecha_contratacion);
    formData.append('color', color);
    formData.append('descripcion', descripcion);
    formData.append('id_ciudad', id_ciudad);
    formData.append('id_estado_actual', id_estado_actual);
    formData.append('imagen', imagen);

    const url = chica ? `http://127.0.0.1:8000/api/chicas/${chica.slug}` : 'http://127.0.0.1:8000/api/chicas/';
    const method = chica ? 'put' : 'post';

    axios[method](url, formData)
      .then(response => {
        onSave(response.data);
        onClose();
      })
      .catch(error => console.error(error));
  };

  return (
    <div class='form' style={{position: 'fixed', top: '4%', left: '25%', right:'25%', padding: '20px', zIndex: 1000 }}>
      <h2>{chica ? 'Editar Chica' : 'Añadir Chica'}</h2>
      <form onSubmit={handleSubmit}>
  {/* Nombre */}
  <div class='cont-form'>
  <div>
    <input
      type="text"
      placeholder="Nombre"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      required
    />
  </div>

  {/* Apellido */}
  <div>
    <input
      type="text"
      placeholder="Apellido"
      value={apellido}
      onChange={(e) => setApellido(e.target.value)}
      required
    />
  </div>

  {/* Edad */}
  <div>
    <input
      type="number"
      placeholder="Edad"
      value={edad}
      onChange={(e) => setEdad(e.target.value)}
      required
    />
  </div>

  {/* Fecha de Contratación */}
  <div>
    <input
      type="date"
      value={fecha_contratacion}
      onChange={(e) => setFechaContrato(e.target.value)}
      required
    />
  </div>

  {/* Color */}
  <div>
    <input
      type="text"
      placeholder="Color"
      value={color}
      onChange={(e) => setColor(e.target.value)}
      required
    />
  </div>

  {/* Ciudad */}
  <div>
    <input
      type="text"
      placeholder="Ciudad"
      value={id_ciudad}
      onChange={(e) => setCiudad(e.target.value)}
      required
    />
  </div>

  {/* Estado */}
  <div>
    <input
      type="text"
      placeholder="Estado"
      value={id_estado_actual}
      onChange={(e) => setEstado(e.target.value)}
      required
    />
  </div>
  <div>
    <input
      type="text"
      maxlength="250"
      placeholder="Descripcion Max200"
      value={descripcion}
      onChange={(e) => setDescripcion(e.target.value)}
      required
    />
  </div>

  {/* Imagen */}
  <div>
    <input
      type="file"
      onChange={(e) => setImagen(e.target.files[0])}
    />
  </div>

  {/* Botones */}
  <div class='botones-form'>
    <button class='Guardar' type="submit">Guardar</button>
    <button class='Cancelar' type="button" onClick={onClose}>Cancelar</button>
  </div>
  </div>
</form>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Sigmar&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Playwrite+IT+Moderna:wght@100..400&family=Sigmar&display=swap');
      </style>
    </div>
  );
}

export default ModalChica;