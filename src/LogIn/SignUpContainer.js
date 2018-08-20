// UserContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import TextField  from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/actions';
import {
    Redirect
  } from "react-router-dom";
/* *
 * Código de librerías internas
 * */ 
import { doCreateUserWithEmailAndPassword, fbCreateUser } from '../firebase';
import Button from '../ComponentsLibrary/Button';
import { Text } from '../ComponentsLibrary/Text';

import { SimpleSection } from '../ComponentsLibrary/Section';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class CreateUserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            user_name : '',
            buttonEnabled:false,
            errorLogin: false,
            isBusiness : false
        };
        
        this.handleChangeByName = this.handleChangeByName.bind(this);
    }
    authUser() {
        const { dispatch } = this.props;
        dispatch(Actions.startFetching());
        doCreateUserWithEmailAndPassword(this.state.email.toLowerCase(), this.state.password)
        .then((res) => {
                var user = {};
                user.email = this.state.email;
                user.user_name = this.state.user_name.toLowerCase();

                fbCreateUser(user);
                
                dispatch(Actions.finishedFetching());
                this.setState({authedUser:true});

          })
          .catch(error => {
              
            dispatch(Actions.finishedFetching());
            this.setState({ errorLogin : true });
          });
    } 
    checkEnabledButton() {
        if(this.state.email !== '' && this.state.password !== '') {
            this.setState({buttonEnabled:true});
        }
        if(this.state.email === '' || this.state.password === '') {
            this.setState({buttonEnabled:false});
        }
    }

    handleChangeByName = name => event => {
        this.setState({
            [name]: event.target.value,
        });
        this.checkEnabledButton();
    }

    render() {
        if(this.state.authedUser) {
            return <Redirect to={ '/admin/' + this.state.user_name.toLowerCase() } />;
        }
        return (
            <SimpleSection>
                 <img src={"/a-v-logo.jpeg"} className="logo" /> 
                <TextField 
                    placeholder="Mail"
                    label="Ingresá tu Mail" 
                    onChange={this.handleChangeByName("email")}
                    value={this.state.email}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    placeholder="Contraseña"
                    label="Ingresá tu Contraseña" 
                    type="password"
                    onChange={this.handleChangeByName("password")}
                    value={this.state.password}
                    fullWidth
                    margin="normal"
                />

                <Button primary
                    onClick={this.authUser.bind(this)}
                    disabled={!this.state.buttonEnabled}
                >
                    Crear Usuario
                </Button>

            </SimpleSection>
        );
    }
}

export default connect()(CreateUserContainer);