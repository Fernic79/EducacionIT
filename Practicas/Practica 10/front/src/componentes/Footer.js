
//creamos un componente de clase para el footer
//1. importamos react y componente
import React, { Component } from 'react';
//2. creamos la clase que extiende de componente
class Footer extends Component {
    //3. creamos el metodo render
    render() {
        return (
            <footer className="bg-dark text-light text-center p-3">
                <p>&copy; 2026 Mi Aplicación. Todos los derechos reservados.</p>
            </footer>
        );
    }
}
//4. exportamos el componente
export default Footer;