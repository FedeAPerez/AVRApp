// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import CreatePatientFormContainer from './CreatePatientFormContainer';
import TopBar from '../../MaterialLikeComponents/TopBar';
import InformationBox from '../../MaterialLikeComponents/InformationBox';
/* *
 * Hojas de Estilo y Constantes
 * */ 



class CreatePatientView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goBack: false,
            isCreationOk: false
        };

        this.backToAction = this.backToAction.bind(this);
        this.changeCretionStatus = this.changeCretionStatus.bind(this);
    }

    backToAction() {
        this.setState((prevState, props) => {
            return {
                goBack : true
            };
        });
    }

    changeCretionStatus(status) {
        this.setState((prevstate, props) => {
            return {
                isCreationOk: status
            };
        });
    }

    render() {
        return (
            <section>
                    <TopBar 
                        text="Registrar Paciente" 
                        goBack={this.state.goBack} 
                        backToAction={this.backToAction} 
                    />
                    
                    <CreatePatientFormContainer 
                        changeCretionStatus={this.changeCretionStatus}
                    />

                    {
                        this.state.isCreationOk &&
                        <InformationBox imageSrc="done">El paciente se registró correctamente</InformationBox>
                    }
            </section>
    );
    }
}

export default (CreatePatientView);