// NavigationItem.js
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

class NavigationItem extends Component {

	render() {
		return (
			<span 
                className= { this.props.isSelected ? 'resalt' : 'admin-navigation-item' }
                onClick={ (e) => this.props.navigateOption(e, this.props.value , this.props.showMessage) }
            >
                <img src={ this.props.isSelected ? this.props.selectedImage : this.props.defaultImage } alt="Navegación" />
            </span>
		);
	}
}

export default NavigationItem;