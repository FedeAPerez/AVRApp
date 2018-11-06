/* *
 * Código de librerías externas
 * */
import React from 'react';
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

const EditPatientForm = ({...props, children}) => {
    
    const { classes } = props;

    return (
        <section>
            <TextField
                id="standard-name"
                label="Nombre y Apellido"
                value={props.editPatient.name}
                onChange={props.handleNameChange}
                margin="normal"
                variant="filled"
                className={classes.textField}
                />
            <TextField
                id="standard-age"
                label="Edad"
                value={props.editPatient.age}
                onChange={props.handleAgeChange}
                margin="normal"
                type="number"
                variant="filled"
                className={classes.textField}
                />
        </section>
    );
}

export default withStyles(styles)(EditPatientForm);
