// NavigationItem.js
/* *
 * Código de librerías externas
 * */
import React from 'react';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 
import './NavigationItem.css';

const NavigationItem = ({...props, children}) => {
    return (
        <span 
            className= { props.isSelected ? 'resalt' : 'admin-navigation-item' }
            onClick={ (e) => props.navigateOption(e, props.value , props.showMessage) }
        >
            <img src={ props.isSelected ? props.selectedImage : props.defaultImage } alt="Navegación" />
            <span className="navigation-subtitle">{props.showMessage}</span>
        </span>
    );
}

export default NavigationItem;