import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ModalChica from './ModalChica';
import './ListaChica.css';

function ListaChicas() {
  const [chicas, setChicas] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/chicas/')
      .then(response => setChicas(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddChica = (nuevaChica) => {
    setChicas([...chicas, nuevaChica]);
  };

  return (
    <div class='container-pri'>
      <div class='container-info'>
        <div class='container-titulo'>
          <h1 class='titulo'>Chicas Mágicas</h1>
        </div>
        <div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {chicas.map(chica => (
          <Link to={`/chicas/${chica.slug}`} key={chica.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div class='muneca' style={{ margin: '10px', textAlign: 'center' }}>
              <img
                class = 'imagen-muneca'
                src={`${chica.imagen}`}
                alt={chica.nombre}
                style={{ width: '250px', height: '250px', borderRadius: '50%' }}
              />
            </div>
          </Link>
        ))}
      </div>
      </div>
      </div>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Sigmar&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Playwrite+IT+Moderna:wght@100..400&family=Sigmar&display=swap');
      </style>

      
      <button class='anadir' onClick={() => setShowModal(true)}>Añadir Chica</button>
      {showModal && (
        <ModalChica
          onClose={() => setShowModal(false)}
          onSave={handleAddChica}
        />
      )}
    </div>
  );
}

export default ListaChicas;