// StatsView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */ 
import { SimpleSection } from '../ComponentsLibrary/Section';
import { PatientCard } from './PatientCard';
import BeginSessionContainer from './BeginSessionContainer';
import { getPatients } from '../Firebase/Patients';
/* *
 * Hojas de Estilo y Constantes
 * */ 
import './PatientCard.css';

class PatientsView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        getPatients()
        .then((res) => {
            console.log(res.val());
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <SimpleSection>
                {
                    this.state.patients &&
                    this.state.patients.map((element, index) => {
                        return ( 
                            <PatientCard 
                                    name = {element.name}
                                    age = { element.age}
                                    startDate= {element.beginDate}
                                    observations={ element.observations } 
                                    key={"stat_patient_"+index} />
                        );
                    })
                }
                {
                    (this.state.patients || []).length === 0 &&
                    <span>Todavía no tenés pacientes. Creá uno para empezar.</span>
                }
            <BeginSessionContainer />
            </SimpleSection>
        );
    }
}

export default connect()(PatientsView);