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
import StatsByPatientView from '../Stats/StatsByPatientView';
import PatientsView from '../Patients/PatientsView';
import SettingsView from '../Settings/SettingsView';
import SessionsView from '../Session/Show/SessionsView';
import LoaderContainer from './LoaderContainer';
/* *
 * Hojas de Estilo y Constantes
 * */

import './AdminView.css';
const keyMap = {
    'settings' : SettingsView,
    'patients': PatientsView,
    'stats': StatsByPatientView,
    'sessions' : SessionsView
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
        const key = this.state.selected_container || 'patients';
        const KeySelected = keyMap[key] || keyMap.default;
        if(this.state.userOb) {

            return (
                <main>
                    <AdminHeader 
                        handleNavigation= { this.handleNavigation.bind(this) }
                        user = { this.state.userOb } />
                    <KeySelected 
                        user= { this.state.userOb } />
                        <LoaderContainer />
                </main>
            );
        }
        else {
            return null;
        }
    }
}

export default connect()(AdminView);