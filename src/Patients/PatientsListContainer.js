// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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

        this.state = {
            redirect : false
        };

        this.handlePatientChange = this.handlePatientChange.bind(this)
    }

    handlePatientChange(e, index) {
        e.preventDefault();
        this.setState({ redirect: true, redirectLoc: this.state.patients[index].id }) 
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(startFetching());
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
        const { redirect, redirectLoc } = this.state;
        if(redirect) {
            return <Redirect to={'/patient/edit/'+redirectLoc} />
        } else {
            return (
                <PatientsList 
                    patients={ this.state.patients } 
                    editPatientHandler={ this.handlePatientChange } />
            );
        }
    }
}

export default connect()(PatientsListContainer);