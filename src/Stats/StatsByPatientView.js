// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

/* *
 * Código de librerías internas
 * */ 
import { getStats } from '../Firebase/Stats';
import {startFetching, finishedFetching} from '../redux/actions/actions';
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
        const { dispatch } = this.props;
        dispatch(startFetching());
        getStats()
        .then((res) => {
            if(res) {
                this.setState((prevState, props) => {
                    return {
                        stats : res.listOfStats
                    };
                }, () => {
                    dispatch(finishedFetching());
                });
            }
            else {
                throw new Error("Sin datos de análisis");
            }
        })
        .catch((err) => {
            this.setState((prevState, props) => {
                return {
                    stats : []
                };
            }, () => {
                dispatch(finishedFetching());
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
                            {
                                element.adjustmentsDetected != 0 &&
                                <section className="chartContainer">
                                <ResponsiveContainer>
                                    <AreaChart data={element.graphData}
                                            margin={{top: 10, right: 30, left: -10, bottom: 0}}>
                                        <CartesianGrid strokeDasharray="3 3"/>
                                        <XAxis dataKey="name"/>
                                        <YAxis/>
                                        <Tooltip/>
                                        <Area type='monotone' dataKey='desvios' stroke='#c0392b' fill='#e74c3c' />
                                    </AreaChart>
                                </ResponsiveContainer>
                                </section>
                            }
                            <section className="statsInformation">
                                <div className="statsInformationItem">{element.exercisesMade}<span>Ejercicios</span></div>
                                <div className="statsInformationItem">{element.sessionsMade}<span>Sesiones</span></div>
                                <div className="statsInformationItem">{element.daysInProgram}<span>Días</span></div>
                            </section>
                        </section>
                    );
                })
            }
            {
                this.state.stats.length == 0 &&
                <span className="global-message">No tenemos datos de sesiones para crear reportes, registrá pacientes nuevos y empezá a ver tus datos actualizados.</span>
            }
            </section>
        
        );
    }
}

export default connect()(StatsByPatientView);