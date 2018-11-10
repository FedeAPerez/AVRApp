// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';

/* *
 * Código de librerías internas
 * */ 
import { getStats } from '../Firebase/Stats';
/* *
 * Hojas de Estilo y Constantes
 * */ 
import './StatsByPatientView.css';

class StatsByPatientView extends Component {
    constructor(props){
        super(props);
        this.state = {
            stats : []
        };
    }
    componentDidMount() {
        getStats()
        .then((res) => {
            this.setState((prevState, props) => {
                return {
                    stats : res.listOfStats
                };
            });
        })
    }
    render() {
        return (
            <section>
            {
                this.state.stats
                .map((element, index) => {
                    return (
                        <section className="statsSection" key={"patient_stats_"+index}>
                            <div className="statsName">{element.name}</div>
                            <div className="statsAclaration">
                                <span className="data">{element.adjustmentsDetected}</span> 
                                <span className="disclaimer"><span className="bolder">Desvíos detectados</span> entre el primer y el último ejercicio</span>
                            </div>
                            <section>
                                <LineChart width={350} height={150} data={element.graphData}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                </LineChart>
                            </section>
                            <section className="statsInformation">
                                <div className="statsInformationItem">{element.exercisesMade}<span>Ejercicios</span></div>
                                <div className="statsInformationItem">{element.sessionsMade}<span>Sesiones</span></div>
                                <div className="statsInformationItem">{element.daysInProgram}<span>Días</span></div>
                            </section>
                        </section>
                    );
                })
            }
            </section>
        
        );
    }
}

export default StatsByPatientView;