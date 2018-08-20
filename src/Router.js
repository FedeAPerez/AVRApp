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
import SignUpView from './LogIn/SignUpView';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/signup" component={SignUpView} />
                <Route exact path="/main" component={Navigation} />
            </Switch>
        );
    }
}

export default Router;