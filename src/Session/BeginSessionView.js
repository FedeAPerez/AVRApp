// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 
class BeginSessionView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goBack : false
        };

        this.backToAction = this.backToAction.bind(this);
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
                            <span className="top-bar-action-text">Iniciar Rehabilitación</span>
                            </span> 
                        </section>
                </section>
                );
            }
    }   
}

export default BeginSessionView;