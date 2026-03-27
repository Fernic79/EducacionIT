
//importamos la imagen del componente
import React from 'react';
import fondo from '../assets/2756.jpg';

//agregamos la funcion del alert adios
function adios(){
    alert('Adios a todos!!');
};


//creamos el componente saludo
function Saludo() {
    //el metodo return devuelve el contenido del componente renderizado en el DOM
    return (
        //solo devuelve un elemento en el return, por eso se envuelve todo el contenido
        //si quiero meter mas componentes dentro del return, debo envolverlos en un div o en un fragment
        <React.Fragment>
            <div className='container mt-5 mb-5'>
                <p>Hola, soy un componente saludo</p>
                <p>Estoy saludando a todos los alumnos de Educacion IT</p>
                <button className="btn btn-primary w-50 mb-5" onClick={()=> alert('Hola a todos!!')}>Hola click</button>
                <button className="btn btn-danger w-50 mb-5" onClick={adios}>Adios</button>
            </div>
            <img src={fondo} alt="saludos" />
        </React.Fragment>
    );
}

export default Saludo;