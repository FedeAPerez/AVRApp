// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
/* *
 * Código de librerías internas
 * */ 
import BigButton from '../MaterialLikeComponents/BigButton';
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
            return <BigButton symbol={"+"} onClick={this.beginSessionHandler} />
        }
    }
}

export default CreateActionContainer;