/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

/* *
 * Código de librerías internas
 * */ 
import TopBar from '../../MaterialLikeComponents/TopBar';
import { deletePatient } from '../../Firebase/Patients';
/* *
 * Hojas de Estilo y Constantes
 * */ 
import './EditPatientView.css';

class EditPatientView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goBack: false,
            isValid: false,
            patient: {}
        };

        const patientPojo = this.props.match.params.patient;
        console.log(patientPojo);
        this.state.patient = {
            patientId : patientPojo
        }

        this.backToAction = this.backToAction.bind(this);
        this.handleDeletePatient = this.handleDeletePatient.bind(this);
    }

    backToAction() {
        this.setState((prevState, props) => {
            return {
                goBack : true
            };
        });
    }

    handleDeletePatient() {
        deletePatient(this.state.patient.patientId)
        .then((res) => {
            this.setState((prevState, props) => {
                return {
                    deletedOk : true
                };
            });
        });
    }

    handleModification() {
        console.log("saving");
    }

    render() {
        return (
            <section>
                <TopBar 
                    text="Modificar Paciente" 
                    goBack={this.state.goBack} 
                    backToAction={this.backToAction} 
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

export default EditPatientView;