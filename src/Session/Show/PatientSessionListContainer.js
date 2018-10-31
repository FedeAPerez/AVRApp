// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */ 
import PatientSessionList from './PatientSessionList';
import Text from '../../ComponentsLibrary/Text';
import { loadSessions } from '../../Firebase/Session';
import {startFetching, finishedFetching} from '../../redux/actions/actions';
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
        const { dispatch } = this.props;
        dispatch(startFetching())
        loadSessions()
        .then((res) => {
            this.setState((prevState, props) => {
                let sessionsData = [];
                res.forEach((x) => {
                    sessionsData.push(Object.assign({}, x));
                })
                return { sessionsData : sessionsData}
            });
            dispatch(finishedFetching());
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
            : <Text lateralMargin>{this.state.message}</Text>
        );
    }
}

export default connect()(PatientSessionListContainer);