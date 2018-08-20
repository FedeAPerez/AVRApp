// AdminBusinessHeader.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* *
 * Código de librerías internas
 * */ 
import NavigationItem from './NavigationItem';
/* *
 * Hojas de Estilo y Constantes
 * */ 
// CSS Classes
const __BUSINESS_HEADER_CLASS = "admin-business-header-container";
const __BUSINESS_HEADER_NAV_CLASS = "admin-business-header-nav-container";
const __BUSINESS_HEADER_CLASS_LINK = "admin-business-header-link";
const __BUSINESS_HEADER_TEXT_IMAGE = "admin-business-header-text";
// Images
const HOME = "/content/images/actions/home.svg";
const SETTINGS_IMAGE = "/content/images/actions/settings.svg";
const SETTINGS_IMAGE_ACTIVE = "/content/images/actions/settings_active.svg";
const SEARCH_IMAGE = "/content/images/actions/search.svg";
const SEARCH_IMAGE_ACTIVE = "/content/images/actions/search_active.svg";
const STATS = "/content/images/actions/stats.svg";
const STATS_ACTIVE = "/content/images/actions/stats_active.svg";
const PATIENT = "/content/images/actions/patient.svg";
const PATIENT_ACTIVE = "/content/images/actions/patient_active.svg";

class AdminBusinessHeader extends Component {
	constructor(props) {
        super(props);
        this.state = {
            'userOb' : this.props.user,
            'option_selected':'welcome',
            'show_option':'Comenzar'
        };
    }

    navigateOption(e, value, show_message) {
        e.preventDefault();
        this.setState({ option_selected : value, show_option : show_message});
        this.props.handleNavigation(value);
    }

    renderBusinessHeaderLabel() {
        return {__html : this.state.userOb.user_name.toUpperCase() + " | <span class=biggerH2>" + this.state.show_option + "</span>"};
    }

    render() {
        return (
            <section>
            <section 
                className= { __BUSINESS_HEADER_CLASS }
            >
                <Link 
                    className= { __BUSINESS_HEADER_CLASS_LINK }
                    to="/"
                >
                    <span 
                    >
                        <img src={ HOME } alt="header de imagen" />
                    </span>
                </Link>
                <h2
                    className= { __BUSINESS_HEADER_TEXT_IMAGE }
                    dangerouslySetInnerHTML={ this.renderBusinessHeaderLabel() }
                >
                </h2>
            </section>
                <section 
                    className= { __BUSINESS_HEADER_NAV_CLASS }
                >
                    <NavigationItem 
                        value= { "welcome" }
                        isSelected= { this.state.option_selected === "welcome" }
                        defaultImage= { SEARCH_IMAGE }
                        selectedImage= { SEARCH_IMAGE_ACTIVE }
                        navigateOption= { this.navigateOption.bind(this) }
                        showMessage= { "Comenzar" }
                    />
                    <NavigationItem 
                        value= { "patients" }
                        isSelected= { this.state.option_selected === "patients" }
                        defaultImage= { PATIENT }
                        selectedImage= { PATIENT_ACTIVE }
                        navigateOption= { this.navigateOption.bind(this) }
                        showMessage= { "Pacientes" }
                    />
                    <NavigationItem 
                        value= { "stats" }
                        isSelected= { this.state.option_selected === "stats" }
                        defaultImage= { STATS }
                        selectedImage= { STATS_ACTIVE }
                        navigateOption= { this.navigateOption.bind(this) }
                        showMessage= { "Estadísticas" }
                    />
                    <NavigationItem 
                        value= { "settings" }
                        isSelected= { this.state.option_selected === "settings" }
                        defaultImage= { SETTINGS_IMAGE }
                        selectedImage= { SETTINGS_IMAGE_ACTIVE }
                        navigateOption= { this.navigateOption.bind(this) }
                        showMessage= { "Configuración" }
                    />
                </section>
            </section>
        );
    }
}

export default AdminBusinessHeader;