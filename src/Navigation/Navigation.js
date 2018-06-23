// Navigation.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 
class Navigation extends Component {
    render() {
        return (
            <section>
            <h1>
                Ataxia
            </h1>
            <ul>
                <li>
                    Pacientes
                </li>
                <li>
                    Estadísticas
                </li>
                <li>
                    Configuración
                </li>
            </ul>
            </section>
        );
    }
}

export default Navigation;