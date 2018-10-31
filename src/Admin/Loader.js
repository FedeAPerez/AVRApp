// Loading.js
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
import './Loading.css';

class Loader extends Component {
    render() {
        if(this.props.isFetching) {
            return (
                <div>
                    <div className="loading-spinner">
                        <img src = {'/content/images/spinner.svg'} alt="Cargando" />
                    </div>
                </div>
            );            
        }
        else {
            return null;
        }
    }
}

export default Loader;