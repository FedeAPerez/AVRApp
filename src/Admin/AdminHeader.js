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
const __BUSINESS_HEADER_HOME_IMAGE = "/content/images/HomeButton.svg";
const __BUSINESS_HEADER_SETTINGS_IMAGE = "/content/images/SettingsButton.svg";
const __BUSINESS_HEADER_SETTINGS_SELECTED_IMAGE = "/content/images/SettingsButtonSelected.svg";
const SEARCH_IMAGE = "/content/images/actions/search.svg";
const SEARCH_IMAGE_ACTIVE = "/content/images/actions/search_active.svg";
const EVENT_IMAGE = "/content/images/actions/event.svg";
const EVENT_IMAGE_ACTIVE = "/content/images/actions/event_orange.svg";
const __BUSINESS_HEADER_MESSAGES_IMAGE = "/content/images/MessagesButton.svg";
const __BUSINESS_HEADER_MESSAGES_SELECTED_IMAGE = "/content/images/MessagesButtonSelected.svg";

class AdminBusinessHeader extends Component {
	constructor(props) {
        super(props);
        this.state = {
            'userOb' : this.props.user,
            'option_selected':'search',
            'show_option':'Buscar'
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
                        <img src={ __BUSINESS_HEADER_HOME_IMAGE } alt="header de imagen" />
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
                        value= { "search" }
                        isSelected= { this.state.option_selected === "search" }
                        defaultImage= { SEARCH_IMAGE }
                        selectedImage= { SEARCH_IMAGE_ACTIVE }
                        navigateOption= { this.navigateOption.bind(this) }
                        showMessage= { "Buscar" }
                    />
                    <NavigationItem 
                        value= { "chat" }
                        isSelected= { this.state.option_selected === "chat" }
                        defaultImage= { __BUSINESS_HEADER_MESSAGES_IMAGE }
                        selectedImage= { __BUSINESS_HEADER_MESSAGES_SELECTED_IMAGE }
                        navigateOption= { this.navigateOption.bind(this) }
                        showMessage= { "Mensajes" }
                    />
                    <NavigationItem 
                        value= { "events" }
                        isSelected= { this.state.option_selected === "events" }
                        defaultImage= { EVENT_IMAGE }
                        selectedImage= { EVENT_IMAGE_ACTIVE }
                        navigateOption= { this.navigateOption.bind(this) }
                        showMessage= { "Eventos" }
                    />
                    <NavigationItem 
                        value= { "settings" }
                        isSelected= { this.state.option_selected === "settings" }
                        defaultImage= { __BUSINESS_HEADER_SETTINGS_IMAGE }
                        selectedImage= { __BUSINESS_HEADER_SETTINGS_SELECTED_IMAGE }
                        navigateOption= { this.navigateOption.bind(this) }
                        showMessage= { "Configuración" }
                    />
                </section>
            </section>
        );
    }
}

export default AdminBusinessHeader;