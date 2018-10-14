// BlankFile.js
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
class NewPatientView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goBack : false
        };
        this.backToAction = this.backToAction.bind(this)
    }


    backToAction() {
        this.setState((prevState, props) => {
            return {
                goBack : true
            };
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
                    </span> 
                    <span></span> 
                </section>
                <Setting settingName={"Registrar Paciente"}>Con pocos datos podés empezar a trabajar.</Setting>
                <Setting settingName={"Iniciar Rehabilitación"}>Elegí uno de tus pacientes para rehabilitar.</Setting>
                </section>    
            );
        }
    }
}

export default NewPatientView;