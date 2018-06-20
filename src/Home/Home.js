// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 
class Home extends Component {
    render() {
        return (
            <main>
                Ataxia vision
                <Link 
                    to="/login"
                    className="link"
                >
                Ingresar
                </Link>
            </main>
        );
    }
}

export default Home;