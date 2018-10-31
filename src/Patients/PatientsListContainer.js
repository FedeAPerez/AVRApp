// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */ 
import PatientsList from './PatientsList';
import { getPatients } from '../Firebase/Patients';
import { startFetching, finishedFetching } from '../redux/actions/actions';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class PatientsListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(startFetching())
        getPatients()
        .then((res) => {
            this.setState((prevState, props) => {
                return {
                    patients : res
                };
            });
            dispatch(finishedFetching());
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <PatientsList patients = { this.state.patients }/>
        );
    }
}

export default connect()(PatientsListContainer);