// StatsView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import { SimpleSection } from '../ComponentsLibrary/Section';
import { PatientCard } from '../ComponentsLibrary/PatientCard';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class StatsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patients : [
                {
                    name : "Agustín Fernandez",
                    age : 35,
                    gender: 'Masculino',
                    startDate : '12/08/2018',
                    observations : "Mejoró el 32% de su movilidad en solo 4 sesiones."
                },
                {
                    name : "Camila Casuscelli",
                    age : 23,
                    gender : "Femenino",
                    startDate : '01/07/2016'
                }
            ]
        }
    }

    render() {
        return (
            <SimpleSection>
                {
                    this.state.patients.map((element, index) => {
                        return ( 
                            <PatientCard 
                                    name = {element.name}
                                    age = { element.age}
                                    gender= {element.gender}
                                    startDate= {element.startDate}
                                    observations={ element.observations } 
                                    key={"stat_patient_"+index} />
                        );
                    })
                }
            </SimpleSection>
        );
    }
}

export default StatsView;