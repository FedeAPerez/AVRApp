// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
/* *
 * Código de librerías internas
 * */
import { getInvalidSessions, assignNewSession } from '../../Firebase/Session';
import {startFetching, finishedFetching} from '../../redux/actions/actions';
import SelectPatientContainer from '../SelectPatientContainer';
import SelectInvalidSessionContainer from './SelectInvalidSessionContainer';
import Text from '../../ComponentsLibrary/Text';

/* *
 * Hojas de Estilo y Constantes
 * */ 
class SessionsToRestoreContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Estas son sesiones que quedaron de forma errónea desde la app desktop, ayudanos a corregirlas.",
            sessionsData : [],
            isValid: false,
            patient: 0,
            invalidSession: 0
        };

        
        this.handleChangePatient = this.handleChangePatient.bind(this);
        this.handleChangeSession = this.handleChangeSession.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        const { dispatch } = this.props;
        dispatch(startFetching())
        assignNewSession(this.state.invalidSession, this.state.patient)
        .then((res) => {
            if(res) {
                this.setState((prevState, props) => {
                    console.table(res);
                    return { okAssignmet : true }
                });
                dispatch(finishedFetching());
            }
            else {
                throw new Error("Error al asignar el paciente");
            }
        })
        .catch((err) => {
            this.setState((prevState, props) => {
                return {
                };
            }, () => {
                
                dispatch(finishedFetching());
            });
        });
    }

    validateSession() {
        this.setState((prevState, props) => {
            return {
                isValid : prevState.patient != 0 && prevState.invalidSession != 0
            };
        });
    }

    handleChangeSession(session, name) {
        this.setState((prevState, props) => {
            return {
                invalidSession : session
            }
        }, () => {
            this.validateSession();
        });
    }

    handleChangePatient(patient, name) {
        this.setState((prevState, props) => {
            return {
                patient : patient
            }
        }, () => {
            this.validateSession();
        });
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(startFetching())
        getInvalidSessions()
        .then((res) => {
            if(res && res.length > 0) {
                this.setState((prevState, props) => {
                    console.table(res);
                    return { sessionsData : res }
                });
                dispatch(finishedFetching());
            }
            else {
                throw new Error("Sin información de sesiones erróneas");
            }
        })
        .catch((err) => {
            this.setState((prevState, props) => {
                return {
                    message : "No tenemos datos de sesiones inválidas, estás haciendo muy bien tu trabajo."
                };
            }, () => {
                
                dispatch(finishedFetching());
            });
        });
    }

    render() {
        return (
            <section>
                <span className="global-message">{this.state.message}</span>
                {
                    ( this.state.sessionsData && this.state.sessionsData.length > 0) && 
                    <section>
                        <SelectInvalidSessionContainer 
                            handleChangeSession={this.handleChangeSession} 
                            invalidSessions={this.state.sessionsData}
                        />
                        {
                            this.state.invalidSession != 0 &&
                            <section className="ex-description">
                                <span className="dif-shower"></span>
                                <Text lateralMargin>Ahora tenemos que asignar esa sesión a un paciente, en el selector de abajo elegí a que paciente corresponde esa sesión.</Text>
                            </section>
                        }
                        <SelectPatientContainer handleChangePatient={this.handleChangePatient} />
                        <Button 
                            variant="contained" 
                            color="primary" 
                            disabled={!this.state.isValid}
                            onClick={this.handleClick}>
                            Asignar Sesión
                        </Button>
                    </section>
                }
            </section>
        );
    }
}

export default connect()(SessionsToRestoreContainer);
