/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* *
 * Código de librerías internas
 * */ 
import TopBar from '../../MaterialLikeComponents/TopBar';
import LoaderContainer from '../../Admin/LoaderContainer';
import InformationBox from '../../MaterialLikeComponents/InformationBox';
import EditPatientFormContainer from './EditPatientFormContainer';
import { getPatient } from '../../Firebase/Patients';
import { startFetching, finishedFetching } from '../../redux/actions/actions';
/* *
 * Hojas de Estilo y Constantes
 * */ 
import './EditPatientView.css';

class EditPatientView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goBack: false,
            isValid: false,
            patient: null,
            deletedOk: false,
            missingPatient: false
        };

        this.backToAction = this.backToAction.bind(this);
        this.handleDeletePatient = this.handleDeletePatient.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(startFetching());
        getPatient(this.props.match.params.patient)
        .then((res) => {
            if(res.head.status_code != 200) {
                this.setState((prevState, props) => {
                    return {
                        missingPatient: true
                    }
                });
            }
            else {
                this.setState((prevState, props) => {
                    return {
                        patient: res.data.patient
                    }
                });
            }
            dispatch(finishedFetching());
        })
        .catch((err) => {
            console.log(err);
        });
    }

    backToAction() {
        this.setState((prevState, props) => {
            return {
                goBack : true
            };
        });
    }

    handleDeletePatient() {
        this.setState((prevState, props) => {
            return {
                deletedOk : true
            };
        });
    }

    render() {
        return (
            <section>
                <TopBar 
                    text="Modificar Paciente" 
                    goBack={this.state.goBack} 
                    backToAction={this.backToAction} 
                />
                {
                    this.state.deletedOk &&
                    <InformationBox imageSrc="done">El paciente se eliminó de los registros.</InformationBox>
                    
                }
                {
                    this.state.missingPatient &&
                    <InformationBox imageSrc="error">Parece que no encontramos ese paciente. Puede que lo hayas borrado o necesites crearlo, anda al menú principal para hacerlo.</InformationBox>
                    
                }
                {
                    (!this.state.deletedOk && !this.state.missingPatient && this.state.patient) &&
                    <EditPatientFormContainer 
                        handleDeletePatient={ this.handleDeletePatient }
                        editPatient={this.state.patient} />
                }
                
                <LoaderContainer />
            </section>
    );
    }
}

export default connect()(EditPatientView);