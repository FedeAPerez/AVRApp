// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
/* *
 * Código de librerías internas
 * */ 
import BeginSessionButton from './BeginSessionButton';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class CreateActionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createPatient : false
        };
        this.beginSessionHandler = this.beginSessionHandler.bind(this)
    }
    
    beginSessionHandler() {
        this.setState((prevState, props) => {
            return {
                createPatient : true
            };
        });
    }

    render() {
        if(this.state.createPatient) {
            return (
                <Redirect to='/action/new' />
            );
        }
        else {
            return <BeginSessionButton onClick={this.beginSessionHandler} />
        }
    }
}

export default CreateActionContainer;