/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
/* *
 * Código de librerías internas
 * */ 
import EditPatientForm from './EditPatientForm';
import { deletePatient, createModifyPatient } from '../../Firebase/Patients';

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
        
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDeletePatient = this.handleDeletePatient.bind(this);
        this.handleModification = this.handleModification.bind(this);
    }


    
    handleDeletePatient() {
        deletePatient(this.state.editPatient.idPatient)
        .then((res) => {
            this.props.handleDeletePatient();
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

    handleModification() {
        createModifyPatient(this.state.editPatient, true);
        this.setState((prevState, props) => {
            return {
                isValid: false
            };
        });
    }
    render() {
        return (
            <section>
            <EditPatientForm 
                handleAgeChange={this.handleAgeChange}
                handleNameChange={this.handleNameChange}

                editPatient={this.state.editPatient}
                isValid = {this.state.isValid}
            />
            <section className="buttonsSelector">
            <Button 
                variant="contained" 
                onClick={this.handleDeletePatient}
            >
                Eliminar
            </Button>
            <Button 
                variant="contained"
                color="primary" 
                onClick={this.handleModification}
                disabled={!this.state.isValid}
            >
                Guardar
            </Button>
            </section>
            </section>
        );
    }
}

export default EditPatientFormContainer;