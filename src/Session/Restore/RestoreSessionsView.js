// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import TopBar from '../../MaterialLikeComponents/TopBar';
import SessionsToRestoreContainer from './SessionsToRestoreContainer';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class RestoreSessionsView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goBack: false
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
        return (
            <section>
                <TopBar 
                        text="Restaurar Sesiones" 
                        goBack={this.state.goBack} 
                        backToAction={this.backToAction} 
                    />
                <SessionsToRestoreContainer />
            </section>
        );
    }
}

export default RestoreSessionsView;