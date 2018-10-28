/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import CreatePatientForm from './CreatePatientForm';
import { createModifyPatient } from '../../Firebase/Patients';
/* *
 * Hojas de Estilo y Constantes
 * */ 


const newPatientConstructor = {
    idPatient : '',
    name : '',
    age : ''
};

class CreatePatientFormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newPatient : newPatientConstructor,
            isValid: false,
            isCreationOk: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleClick() {
        createModifyPatient(this.state.newPatient);
        this.setState((prevState, props) => {
            return {
                newPatient : Object.assign({}, newPatientConstructor),
                isValid: false
            };
        }, () => { 
            this.props.changeCretionStatus(true)
        });
    }
    
    validateSession() {
        this.setState((prevState, props) => {
            return {
                isValid : prevState.newPatient.name != '' && prevState.newPatient.age != 0 && prevState.newPatient.idPatient != ''
            };
        });
    }

    handleIdChange(event) {
        event.preventDefault();
        const eventv = { value : event.target.value};
        this.setState((prevState, props) => {
            return {
                newPatient : Object.assign({}, prevState.newPatient, {idPatient : eventv.value})
            };
        }, () => {
            this.validateSession();
        });
    }

    handleNameChange(event) {
        event.preventDefault();
        const eventv = { value : event.target.value};
        this.setState((prevState, props) => {
            return {
                newPatient : Object.assign({}, prevState.newPatient, {name : eventv.value})
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
                newPatient : Object.assign({}, prevState.newPatient, {age : eventv.value})
            };
        }, () => {
            this.validateSession();
        });
    }

    render() {
        return (
            <CreatePatientForm 
                handleAgeChange={this.handleAgeChange}
                handleIdChange={this.handleIdChange}
                handleNameChange={this.handleNameChange}
                handleClick={this.handleClick}
                newPatient={this.state.newPatient}
                isValid = {this.state.isValid}
            />
        );
    }
}

export default CreatePatientFormContainer;