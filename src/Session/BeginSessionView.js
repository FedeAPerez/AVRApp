// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
/* *
 * Código de librerías internas
 * */ 
import SelectPatientContainer from './SelectPatientContainer';
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
            creatingSession : true,
            token: ''
        };

        this.backToAction = this.backToAction.bind(this);
        this.handleChangePatient = this.handleChangePatient.bind(this);
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
        this.setState((prevState, props) => {
            return {
                isValid: false,
                token: '38662776_15_03'
            };
        }, () => {
            this.setState((prevState, props) => {
                return {
                    creatingSession: false
                };
            });
        });
    }
    validateSession() {
        this.setState((prevState, props) => {
            return {
                isValid : prevState.patient != 0
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

    render() {
            if(this.state.goBack) {
                return (
                    <Redirect to='/login' />
                );
            }
            else {
                return (
                <section>
                        <section className="topBar">
                            <span className="top-bar-action" onClick={this.backToAction}>
                            <img src={"/content/images/actions/back.svg"} alt={"Volver"}/>
                            <span className="top-bar-action-text">Iniciar Rehabilitación</span>
                            </span> 
                        </section>
                        {
                            this.state.creatingSession && 
                            <section>
                            <SelectPatientContainer handleChangePatient={this.handleChangePatient}/>
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
                        <div className="token">
                        <span>
                            { this.state.token }
                        </span>
                        </div>
                        }
                </section>
                );
            }
    }   
}

export default BeginSessionView;