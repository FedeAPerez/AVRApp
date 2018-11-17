/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Setting } from '../ComponentsLibrary/Setting';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 
class NewActionView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goBack : false,
            goPatient : false,
            goSession : false,
            goToInvalidSession: false
        };

        this.backToAction = this.backToAction.bind(this);
        this.goToPatient = this.goToPatient.bind(this);
        this.goToSession = this.goToSession.bind(this);
        this.goToInvalidSession = this.goToInvalidSession.bind(this);
    }


    backToAction() {
        this.setState((prevState, props) => {
            return {
                goBack : true
            };
        });
    }

    goToPatient() {
        this.setState((prevState, props) => {
            return {
                goPatient : true
            };
        });
    }

    goToSession() {
        this.setState((prevState, props) => {
            return {
                goSession : true
            };
        });
    }
    goToInvalidSession() {
        this.setState((prevState, props) => {
            return {
                goToInvalidSession : true
            };
        });
    }


    render() {
        if(this.state.goBack) {
            return (
                <Redirect to='/login' />
            );
        }
        else if (this.state.goPatient){
            return (
                <Redirect to="/patient/new" />
            );
        }
        else if(this.state.goToInvalidSession) {
            return (
                <Redirect to="/session/restore" />
            );
        }
        else if (this.state.goSession){
            return (
                <Redirect to="/session/new" />
            );
        }
        else if (!this.state.goBack && !this.state.goPatient && !this.state.goSession) {
            return (
                <section>
                    <section className="topBar">
                        <span className="top-bar-action" onClick={this.backToAction}>
                        <img src={"/content/images/actions/back.svg"} alt={"Volver"}/>
                        </span> 
                    </section>
                    <Setting onClick={this.goToPatient} settingName={"Registrar Paciente"}>Con pocos datos podés empezar a trabajar.</Setting>
                    <Setting onClick={this.goToSession} settingName={"Iniciar Rehabilitación"}>Elegí uno de tus pacientes para rehabilitar.</Setting>
                    <Setting onClick={this.goToInvalidSession} settingName={"Sesiones sin vincular"}>Elegí uno de tus pacientes para asignar una sesión que haya quedado errónea.</Setting>
                </section>    
            );
        }
    }
}

export default NewActionView;