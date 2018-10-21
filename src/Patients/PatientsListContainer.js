// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import PatientsList from './PatientsList';
import { getPatients } from '../Firebase/Patients';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class PatientsListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        getPatients()
        .then((res) => {
            this.setState((prevState, props) => {
                return {
                    patients : [
                        {
                        name: "Federico Pérez",
                        age: 23,
                        beginDate: "12/03/1995",
                        observations: "Mejoró mucho en las últimas 4 semanas."
                        }
                    ]
                };
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <PatientsList patients = { this.state.patients }/>
        );
    }
}

export default PatientsListContainer;