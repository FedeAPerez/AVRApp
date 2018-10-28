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
            createActions : false
        };
        
        this.createActionsHandler = this.createActionsHandler.bind(this)
    }
    
    createActionsHandler() {
        this.setState((prevState, props) => {
            return {
                createActions : true
            };
        });
    }

    render() {
        if(this.state.createActions) {
            return (
                <Redirect to='/action/new' />
            );
        }
        else {
            return <BigButton symbol={"+"} onClick={this.createActionsHandler} />
        }
    }
}

export default CreateActionContainer;