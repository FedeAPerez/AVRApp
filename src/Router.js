// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
/* *
 * Código de librerías internas
 * */ 
import LogIn from './LogIn/LogIn';
import Home from './Home/Home';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exac path="/login" component={LogIn} />
            </Switch>
        );
    }
}

export default Router;