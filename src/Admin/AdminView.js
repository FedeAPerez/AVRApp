// AdminBusinessView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* *
 * Código de librerías internas
 * */ 
import AdminHeader from './AdminHeader';
import { fbGetUser  } from '../firebase';
import * as Actions from '../redux/actions/actions';
import WelcomeContainer from './WelcomeContainer';
import StatsView from '../Stats/StatsView';
import  PatientsView from '../Patients/PatientsView';
import SettingsView from '../Settings/SettingsView';
/* *
 * Hojas de Estilo y Constantes
 * */
import './AdminView.css';
const keyMap = {
    'welcome' : WelcomeContainer,
    'settings' : SettingsView,
    'patients': PatientsView,
    'stats': StatsView
};

class AdminView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'userOb' : null
        };

        const userPojo = fbGetUser(this.props.match.params.user);
        userPojo.then(
        (snapshot) => { 
            this.props.dispatch(Actions.selectUser(snapshot.val()));
            this.setState({ userOb : snapshot.val() });
        })
        .catch((err) => {
        });
        
    }

    handleNavigation(value) {
        this.setState({ selected_container : value });
    }

    render() {
        const key = this.state.selected_container || 'welcome';
        const KeySelected = keyMap[key] || keyMap.default;
        if(this.state.userOb) {

            return (
                <main>
                    <AdminHeader 
                        handleNavigation= { this.handleNavigation.bind(this) }
                        user = { this.state.userOb } />
                    <KeySelected 
                        user= { this.state.userOb } />
                </main>
            );
        }
        else {
            return null;
        }
    }
}

export default connect()(AdminView);