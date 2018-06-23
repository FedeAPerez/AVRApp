// LinkButton.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 
class LinkButton extends Component {
    render() {
        const buttonUnique = { 
            display: 'block',
            margin: '0em auto',
            width: 'fit-content',
            color: this.props.color ? this.props.color : '#fff'
        };
        
        const RenderedLink = props => <Link to={ this.props.href ? this.props.href : '/' } {...props} />

        return (
            <Button 
                component= { RenderedLink }
                style={ buttonUnique }
                onClick={ this.props.onClick ? this.props.onClick : null }
            >
                { this.props.text ? this.props.text : 'Continuar' }
            </Button>
        );
    }
}

export default LinkButton;