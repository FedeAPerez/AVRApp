// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
/* *
 * Código de librerías internas
 * */ 
import SelectPatientContainer from './SelectPatientContainer';
import SelectExerciseContainer from './SelectExerciseContainer';
import { getToken } from '../Firebase/Session';
import InformationBox from '../MaterialLikeComponents/InformationBox';
import BeginSessionError from './BeginSessionError';
import TopBar from '../MaterialLikeComponents/TopBar';
/* *
 * Hojas de Estilo y Constantes
 * */ 
import './BeginSession.css';

class BeginSessionView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goBack: false,
            isValid: false,
            patient: 0,
            exercise: 0,
            creatingSession : true,
            token: '',
            errorCreating : false
        };

        this.backToAction = this.backToAction.bind(this);
        this.handleChangePatient = this.handleChangePatient.bind(this);
        this.handleChangeExercise = this.handleChangeExercise.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    backToAction() {
        this.setState((prevState, props) => {
            return {
                goBack : true
            };
        });
    }

    handleClick() {
        getToken(this.state.patient, this.state.ex)
        .then((res) => {
            this.setState((prevState, props) => {
                return {
                    isValid: false,
                    token: res.data.token
                };
            }, () => {
                this.setState((prevState, props) => {
                    return {
                        creatingSession: false
                    };
                });
            });
        })
        .catch((err) => {
            console.log(err);
            this.setState((prevState, props) => {
                return {
                    errorCreating : true
                };
            });
        });

    }
    
    validateSession() {
        this.setState((prevState, props) => {
            return {
                isValid : prevState.patient !== 0 && prevState.exercise !== 0
            };
        });
    }

    handleChangePatient(patient, name) {
        this.setState((prevState, props) => {
            return {
                patient : patient
            }
        }, () => {
            this.validateSession();
        });
    }

    handleChangeExercise(exercise, name) {
        this.setState((prevState, props) => {
            return {
                exercise : exercise
            }
        }, () => {
            this.validateSession();
        });
    }

    render() {

        return (
        <section>
                <TopBar goBack={this.state.goBack} text={"Iniciar Rehabilitación"} backToAction={this.backToAction} />
                {
                    this.state.creatingSession && 
                    <section>
                    <SelectPatientContainer handleChangePatient={this.handleChangePatient} />
                    <SelectExerciseContainer handleChangeExercise={this.handleChangeExercise} />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        disabled={!this.state.isValid}
                        onClick={this.handleClick}>
                        Comenzar
                    </Button>
                    </section>
                }
                { this.state.token != '' &&
                    <section>
                        <InformationBox imageSrc="info">El siguiente número deberás ingresarlo en la <b>aplicación de escritorio</b> de Ataxia Visión.</InformationBox>
                        <div className="token">
                        <span>
                            { this.state.token }
                        </span>
                        </div>
                    </section>
                }
                {
                    this.state.errorCreating &&
                    <BeginSessionError />
                }
        </section>
        );
    }   
}

export default BeginSessionView;