// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import BeginSessionButton from './BeginSessionButton';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class BeginSessionContainer extends Component {
    constructor(props) {
        super(props);
        this.beginSessionHandler = this.beginSessionHandler.bind(this)
    }
    
    beginSessionHandler() {
        console.log("la peli");
    }

    render() {
        return <BeginSessionButton onClick={this.beginSessionHandler} />
    }
}

export default BeginSessionContainer;