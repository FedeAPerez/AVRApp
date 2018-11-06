/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import EditPatientForm from './EditPatientForm';
import { createModifyPatient } from '../../Firebase/Patients';

/* *
 * Hojas de Estilo y Constantes
 * */ 

class EditPatientFormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editPatient : this.props.editPatient,
            isValid: false
        };
        
        this.handleClick = this.handleClick.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleClick() {
        createModifyPatient(this.state.editPatient);
        this.setState((prevState, props) => {
            return {
                isValid: false
            };
        });
    }
    
    validateSession() {
        this.setState((prevState, props) => {
            return {
                isValid : prevState.editPatient.name != '' && prevState.editPatient.age != 0
            };
        });
    }


    handleNameChange(event) {
        event.preventDefault();
        const eventv = { value : event.target.value};
        this.setState((prevState, props) => {
            return {
                editPatient : Object.assign({}, prevState.editPatient, {name : eventv.value})
            };
        }, () => {
            this.validateSession();
        });
    }

    handleAgeChange(event) {
        event.preventDefault();
        const eventv = { value : event.target.value};
        this.setState((prevState, props) => {
            return {
                editPatient : Object.assign({}, prevState.editPatient, {age : eventv.value})
            };
        }, () => {
            this.validateSession();
        });
    }

    render() {
        return (
            <EditPatientForm 
                handleAgeChange={this.handleAgeChange}
                handleNameChange={this.handleNameChange}

                editPatient={this.state.editPatient}
                isValid = {this.state.isValid}
            />
        );
    }
}

export default EditPatientFormContainer;