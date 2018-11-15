/* *
 * Código de librerías externas
 * */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
/* *
 * Código de librerías internas
 * */ 

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

const CreatePatientForm = ({...props, children}) => {
    
    const { classes } = props;

    return (
        <section>
            <TextField
                id="standard-id"
                label="Nro de Documento"
                value={props.newPatient.idPatient}
                onChange={props.handleIdChange}
                margin="normal"
                type="number"
                variant="filled"
                className={classes.textField}
                />
            <TextField
                id="standard-name"
                label="Nombre y Apellido"
                value={props.newPatient.name}
                onChange={props.handleNameChange}
                margin="normal"
                variant="filled"
                className={classes.textField}
                />
            <TextField
                id="standard-age"
                label="Edad"
                value={props.newPatient.age}
                onChange={props.handleAgeChange}
                margin="normal"
                type="number"
                variant="filled"
                className={classes.textField}
                />
            <Button 
                variant="contained" 
                color="primary" 
                onClick={props.handleClick}
                disabled={!props.isValid}
            >
                    Registrar
            </Button>
        </section>
    );
}

export default withStyles(styles)(CreatePatientForm);
