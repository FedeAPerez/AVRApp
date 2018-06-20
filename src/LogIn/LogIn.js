// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
/* *
 * Código de librerías internas
 * */ 

/* *
 * Hojas de Estilo y Constantes
 * */ 
import './LogIn.css';

class LogIn extends Component {
    render() {
        return (
            <section>
                <header>
                    Ataxia Vision
                </header>
                <main>
                    <TextField
                        required
                        id="username"
                        label="Nombre de Usuario"
                        margin="normal"
                        className="textField"
                    />
                    <TextField
                        required
                        id="password"
                        label="Contraseña"
                        margin="normal"
                        className="textField"
                    />
                    Ingresá tus credenciales para comenzar.
                </main>
                <footer>
                    Seguinos en nuestras redes
                </footer>
            </section>
        );

    }

}

export default LogIn;