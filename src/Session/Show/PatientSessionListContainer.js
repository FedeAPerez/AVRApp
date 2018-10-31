// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import PatientSessionList from './PatientSessionList';
import { getPatients, loadSessions } from '../../Firebase/Session';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class PatientSessionListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Estamos cargando tu información",
            sessionsData : null
        };
    }
    componentDidMount() {
        loadSessions()
        .then((res) => {
            this.setState((prevState, props) => {
                let sessionsData = [];
                res.forEach((x) => {
                    sessionsData.push(Object.assign({}, x));
                })
                return { sessionsData : sessionsData}
            });
        })
        .catch((err) => {
            this.setState((prevState, props) => {
                message : "Parece que tenemos problemas para cargar la información"
            });
        });
    }

    render () {
        return (
            /* Información de ejemplo
            [
                { name : "Pipa Higua", sessions: [
                    { sessionDate: "12/03/1995", failedExercises : 1, okExercises: 2, adjustments: 23} 
                ]},
                { name : "Rober Donofrio", sessions: [
                    { sessionDate: "12/03/1995", failedExercises : 1, okExercises: 2, adjustments: 0},
                    { sessionDate: "17/03/1995", failedExercises : 0, okExercises: 3, adjustments: 1} 
                ]}, 
                { name : "El defe ", sessions: [] }
            ]*/
            this.state.sessionsData ?
            this.state.sessionsData.map((element, index) => {

                return (
                    <PatientSessionList 
                        name= {element.name} 
                        sessions= { element.sessions }
                        key={element.name + index} />
                );
            })
            : <span>{this.state.message}</span>
        );
    }
}

export default PatientSessionListContainer;