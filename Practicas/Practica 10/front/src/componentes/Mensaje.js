
import React, { useState } from 'react';

//Componente que muestra el mensaje
const MensajeBienvenida = ({ texto }) => {
  return (
    <div className="Mensaje">
      {texto}
    </div>
  );
};

function Mensaje() {
  //Estados para nombre, edad y el mensaje final
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [mensajeFinal, setMensajeFinal] = useState('');

  //Función para procesar el formulario
  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!nombre || !edad) {
      alert("Por favor, completa ambos campos.");
      return;
    }

    const edadNum = parseInt(edad);
    let nuevoMensaje = "";

    //Lógica de la edad para generar el mensaje
    if (edadNum < 18) {
      nuevoMensaje = `Hola ${nombre},\n eres muy joven para usar esta aplicación.`;
    } else {
      nuevoMensaje = `Bienvenido ${nombre},\n gracias por usar nuestra aplicación.`;
    }

    setMensajeFinal(nuevoMensaje);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Registro de Usuario</h1>
      
      {/* Formulario de entrada */}
      <form onSubmit={manejarEnvio} className="mb-4 p-3 border rounded bg-light w-200 shadow">
        <div className="form-group" style={{ marginBottom: '10px' }}>
          <label>Nombre: </label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            placeholder="Ej. Juan"
            className="form-control mb-2 mr-sm-2 w-160"
          />
        </div>

        <div className="form-group" style={{ marginBottom: '10px' }}>
          <label>Edad: </label>
          <input 
            type="number" 
            value={edad} 
            onChange={(e) => setEdad(e.target.value)} 
            placeholder="Ej. 25"
            className="form-control mb-2 mr-sm-2 w-160"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Generar Mensaje
        </button>
      </form>

      {/* Llamada al componente del mensaje */}
      {mensajeFinal && <MensajeBienvenida texto={mensajeFinal} />}
    </div>
  );
}

export default Mensaje;