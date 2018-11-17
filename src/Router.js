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
import AdminView from './Admin/AdminView';
import NewActionView from './Actions/NewActionView';
import BeginSessionView from './Session/BeginSessionView';
import CreatePatientView from './Patients/New/CreatePatientView';
import EditPatientView from './Patients/Edit/EditPatientView';
import RestoreSessionsView from './Session/Restore/RestoreSessionsView';
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
                <PrivateRoute exact path="/action/new" component={NewActionView} />
                <PrivateRoute exact path="/session/new" component={BeginSessionView} />
                <PrivateRoute exact path="/session/restore" component={RestoreSessionsView} />
                <PrivateRoute exact path="/patient/edit/:patient" component={EditPatientView} />
                <PrivateRoute exact path="/patient/new" component={CreatePatientView} />
                <PrivateRoute path="/admin/:user" component={AdminView} />
            </Switch>
        );
    }
}

export default withRouter(Router);