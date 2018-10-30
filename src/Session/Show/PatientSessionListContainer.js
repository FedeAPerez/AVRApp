// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import PatientSessionList from './PatientSessionList';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class PatientSessionListContainer extends Component {
    componentDidMount() {
            
    }

    render () {
        return (
            [
                { name : "Pipa Higua", sessions: [{ sessionDate: "12/03/1995", failedExercises : 1, okExercises: 2, adjustments: 23} ]},
                { name : "Rober Donofrio", sessions: [{ sessionDate: "12/03/1995", failedExercises : 1, okExercises: 2, adjustments: 0}, { sessionDate: "17/03/1995", failedExercises : 0, okExercises: 3, adjustments: 1} ]}, 
                { name : "El defe ", sessions: [] }].map((element, index) => {
                return (
                    <PatientSessionList 
                        name= {element.name} 
                        sessions= { element.sessions }
                        key={element.name + index} />
                );
            })
        );
    }
}

export default PatientSessionListContainer;