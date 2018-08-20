// MessageSubmitButton.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Hojas de Estilo y Constantes
 * */ 
import './MessageSubmitButton.css';
const __SUBMIT_SVG_ROUTE = "/content/images/MessageSubmitButton.svg";
const __SUBMIT_BUTTON_CLASS = "message-submit-button";

class MessageSubmitButton extends Component {  
   render() {
       
       return(
           <span className= { __SUBMIT_BUTTON_CLASS }>
               <img 
                    src= { __SUBMIT_SVG_ROUTE }
                    onClick= {this.props.onClick}
                    alt={"Enviar"}
                />
            </span>
       );
   }
}

export default MessageSubmitButton;