// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import SelectPatient from './SelectPatient';
import MiddleFormControl from './MiddleFormControl';
import RedInputLabel from './RedInputLabel';
import { getPatients } from '../Firebase/Patients';
/* *
 * Hojas de Estilo y Constantes
 * */ 

class SelectPatientContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idPatient: 0,
            patients: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        getPatients()
        .then((res) => {
            this.setState((prevState, props) => {
                return {
                    patients : res
                };
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }

    handleChange(event) {
        this.setState((prevState, props) => {
            return {
                idPatient : event.target.value
            };
        }, () => {
            this.props.handleChangePatient(event.target.value, event.target.name)
        })
    }

    render() {
        return (
        <MiddleFormControl 
            variant="filled" 
        >
            <RedInputLabel>Paciente</RedInputLabel>
            <SelectPatient
                idPatient={this.state.idPatient} 
                patients={this.state.patients} 
                handleChange={this.handleChange} />
        </MiddleFormControl>
        );
    }
}

export default SelectPatientContainer;