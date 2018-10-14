// SettingsContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */
import { Text } from '../ComponentsLibrary/Text';
import  Setting  from '../ComponentsLibrary/Setting';
/* *
 * Hojas de Estilo y Constantes
 * */

class SettingsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_settings : {
            }
        };
    }

    closeSession() {
        localStorage.removeItem("av_userSession");
        this.setState({ closeSession : true });
    }

    render() {

        if(this.state.closeSession) {
            return (
                <Redirect to='/login' />
            );
        }
        else {
            return (
                <main className="admin-settings-container">
                    <section className="admin-settings">
                    
                    <Text primary noMargin withPadding withBackground>{'@'+ this.props.user.user_name }</Text>
                    
                    <Setting
                        disabled 
                        settingName= "Acerca de Ataxia Visión" 
                        settingDescrption= "Versión Demo - Ingresá para ver actualizaciones" />
                    <Setting 
                        settingName="Cerrar Sesión" 
                        onClick={ this.closeSession.bind(this)} />

                    </section>
                </main>
            );
        }
    }
}

function mapStateToProps(state) {

    return { user: state.user };
}
export default connect(mapStateToProps)(SettingsView);