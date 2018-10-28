// StatsView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import { SimpleSection } from '../ComponentsLibrary/Section';
import CreateActionContainer from './CreateActionContainer';
import PatientsListContainer from './PatientsListContainer';
/* *
 * Hojas de Estilo y Constantes
 * */ 

class PatientsView extends Component {
    render() {
        return (
            <SimpleSection>
                <PatientsListContainer />
                <CreateActionContainer />
            </SimpleSection>
        );
    }
}

export default PatientsView;