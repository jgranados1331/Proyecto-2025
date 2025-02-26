import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ModalChica from './ModalChica';
import './DetalleChica.css';

function DetalleChica() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [chica, setChica] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchChica = () => {
    axios.get(`http://127.0.0.1:8000/api/chicas/${slug}`)
      .then(response => setChica(response.data))
      .catch(error => console.error(error));
  };

  const handleDelete = () => {
    axios.delete(`http://127.0.0.1:8000/api/chicas/${slug}`)
      .then(() => navigate('/'))
      .catch(error => console.error(error));
  };

  const handleUpdate = (updatedChica) => {
    setChica(updatedChica);
    setShowModal(false);
  };

  useEffect(() => {
    fetchChica();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (!chica) return <div>Cargando...</div>;

  

  return (
    <div class='container-pri'>
      <div class='container-titulo'>
        <a href='/'>
        <button class='atras' src="/">Atras</button>
        </a>
        <h1>{chica.nombre} {chica.apellido}</h1>
      </div>
      <div class='container-muneca'>
      <div class='container-img'>
        <img src={`http://127.0.0.1:8000${chica.imagen}`} alt={chica.nombre} />
      </div>
      <div>
        <div class='container-infor'>
        <p><b>Edad:</b> {chica.edad}</p>
        <p><b>Ciudad:</b> {chica.id_ciudad.nombre_ciudad}</p>
        <p><b>Estado:</b> {chica.id_estado_actual.tipo_estado}</p>
        <p><b>Fecha de Contrato:</b> {chica.fecha_contratacion}</p>
        <p><b>Descripcion:</b> {chica.descripcion}</p>
        </div>
        <div class='container-bottons'>
        <button class='Editar' onClick={() => setShowModal(true)}>Editar</button>
        <button class='Eliminar' onClick={handleDelete}>Eliminar</button>
        </div>
      </div>
      {showModal && (
        <ModalChica
          chica={chica}
          onClose={() => setShowModal(false)}
          onSave={handleUpdate}
        />
      )}
      </div>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Sigmar&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Playwrite+IT+Moderna:wght@100..400&family=Sigmar&display=swap');
      </style>
    </div>
  );
}

export default DetalleChica;