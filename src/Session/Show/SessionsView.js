/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import PatientSessionListContainer from './PatientSessionListContainer';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class SessionsView extends Component {
    render() {
        return (
            <section>
                <PatientSessionListContainer />
            </section>
        );

    }
}

export default SessionsView;