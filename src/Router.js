// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
/* *
 * Código de librerías internas
 * */ 
import LogIn from './LogIn/LogIn';
import SignUpView from './LogIn/SignUpView';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';
import AdminView from './Admin/AdminView';
/* *
 * Hojas de Estilo y Constantes
 * */ 

const fakeAuth = () => {
    const cachedUser = JSON.parse(localStorage.getItem("av_userSession"));
    if(cachedUser) {
        return true;
    }
    return false;
}
  
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth() === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
) 

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/signup" component={SignUpView} />
                <PrivateRoute path="/admin/:user" component={AdminView} />
                <Route exact path="/main" component={Navigation} />
            </Switch>
        );
    }
}

export default withRouter(Router);