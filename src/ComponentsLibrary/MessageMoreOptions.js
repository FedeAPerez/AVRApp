// MessageSubmitButton.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Hojas de Estilo y Constantes
 * */ 
import './MessageSubmitButton.css';
const __SUBMIT_BUTTON_CLASS = "message-submit-button";

class MessageMoreOptions extends Component {  
   render() {
       
       return(
           <span className= { __SUBMIT_BUTTON_CLASS }>
               <img 
                    src= { "/content/images/more.svg" }
                    onClick= {this.props.onClick}
                    alt={"Ver más"}
                />
            </span>
       );
   }
}

export default MessageMoreOptions;