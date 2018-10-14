// StatsView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import { SimpleSection } from '../ComponentsLibrary/Section';
import BeginSessionContainer from './BeginSessionContainer';
import PatientsListContainer from './PatientsListContainer';
/* *
 * Hojas de Estilo y Constantes
 * */ 
import './PatientCard.css';

class PatientsView extends Component {
    render() {
        return (
            <SimpleSection>
                <PatientsListContainer />
                <BeginSessionContainer />
            </SimpleSection>
        );
    }
}

export default PatientsView;