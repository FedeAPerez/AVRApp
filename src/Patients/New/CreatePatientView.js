// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
/* *
 * Código de librerías internas
 * */ 
import { createModifyPatient } from '../../Firebase/Patients';
import TopBar from '../../MaterialLikeComponents/TopBar';
/* *
 * Hojas de Estilo y Constantes
 * */ 

const styles = {
    textField: {
        margin: '2rem auto',
        display: 'flex',
        minWidth: '200px',
        width: '80%'
    }
  };

class CreatePatientView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goBack: false,
            newPatient : {
                idPatient : '',
                name : '',
                age : ''
            },
            isValid: false
        };

        this.backToAction = this.backToAction.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    backToAction() {
        this.setState((prevState, props) => {
            return {
                goBack : true
            };
        });
    }

    handleClick() {
        createModifyPatient(this.state.newPatient);
    }
    
    validateSession() {
        this.setState((prevState, props) => {
            return {
                isValid : prevState.newPatient.name != '' && prevState.newPatient.age != 0 && prevState.newPatient.idPatient != ''
            };
        });
    }
    handleIdChange(event) {
        event.preventDefault();
        const eventv = { value : event.target.value};
        this.setState((prevState, props) => {
            return {
                newPatient : Object.assign({}, prevState.newPatient, {idPatient : eventv.value})
                
            };
        }, () => {
            this.validateSession();
        });
    }
    handleNameChange(event) {
        event.preventDefault();
        const eventv = { value : event.target.value};
        this.setState((prevState, props) => {
            return {
                newPatient : Object.assign({}, prevState.newPatient, {name : eventv.value})
                
            };
        }, () => {
            this.validateSession();
        });
    }
    handleAgeChange(event) {
        event.preventDefault();
        const eventv = { value : event.target.value};
        this.setState((prevState, props) => {
            return {
                newPatient : Object.assign({}, prevState.newPatient, {age : eventv.value})
                
            };
        }, () => {
            this.validateSession();
        });
    }
    render() {
        const { classes } = this.props;

        return (
            <section>
                    <TopBar text="Registrar Paciente" goBack={this.state.goBack} backToAction={this.backToAction} />
                    <TextField
                        id="standard-id"
                        label="Nro de Documento"
                        value={this.state.newPatient.idPatient}
                        onChange={this.handleIdChange}
                        margin="normal"
                        variant="filled"
                        className={classes.textField}
                        />
                    <TextField
                        id="standard-name"
                        label="Nombre y Apellido"
                        value={this.state.newPatient.name}
                        onChange={this.handleNameChange}
                        margin="normal"
                        variant="filled"
                        className={classes.textField}
                        />
                    <TextField
                        id="standard-age"
                        label="Edad"
                        value={this.state.newPatient.age}
                        onChange={this.handleAgeChange}
                        margin="normal"
                        type="number"
                        variant="filled"
                        className={classes.textField}
                        />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={this.handleClick}
                        disabled={!this.state.isValid}
                    >
                            Registrar
                    </Button>
            </section>
    );
    }
}

export default withStyles(styles)(CreatePatientView);