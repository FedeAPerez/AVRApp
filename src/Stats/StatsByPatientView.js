// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 
import './StatsByPatientView.css';

class StatsByPatientView extends Component {
    render() {
        return (
        
            [
                { name: "Federico Pérez", adjustmentsLess: 65, exercisesMade: 24, sessionsMade: 12, daysInProgram: 120 },
                { name: "Gabriel Bonaventura", adjustmentsLess: 13, exercisesMade: 10, sessionsMade: 4, daysInProgram: 30 }
            ]
            .map((element, index) => {
                return (
                    <section className="statsSection" key={"patient_stats_"+index}>
                        <div className="statsName">{element.name}</div>
                        <div className="statsAclaration">
                            <span className="data">{element.adjustmentsLess}</span> 
                            <span className="disclaimer"><span className="bolder">Desvíos detectados</span> entre el primer y el último ejercicio</span>
                        </div>
                        <section className="statsInformation">
                            <div className="statsInformationItem">{element.exercisesMade}<span>Ejercicios</span></div>
                            <div className="statsInformationItem">{element.sessionsMade}<span>Sesiones</span></div>
                            <div className="statsInformationItem">{element.daysInProgram}<span>Días</span></div>
                        </section>
                    </section>
                );
            })
        
        );
    }
}

export default StatsByPatientView;