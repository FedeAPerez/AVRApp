// UserContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/actions';
import Button from '../ComponentsLibrary/Button';
import { Text, BoldText} from '../ComponentsLibrary/Text';
import { SimpleSection } from '../ComponentsLibrary/Section';
import { fbGetUserByEmail } from '../firebase';
import {
    Redirect, Link
  } from "react-router-dom";
/* *
 * Código de librerías internas
 * */ 
import { doSignInWithEmailAndPassword } from '../firebase';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            buttonEnabled : false,
            doneAuthed : false,
            user_name : ''
        };
        
        this.handleChangeByName = this.handleChangeByName.bind(this);

        this.checkEnabledButton();
    }
    authUser() {
        const { dispatch } = this.props;
        dispatch(Actions.startFetching());
        doSignInWithEmailAndPassword(this.state.email.toLowerCase(), this.state.password)
        .then((res) => {

            const userPojo = fbGetUserByEmail(this.state.email);
            userPojo.then(
                (snapshot) => { 
                    
                    this.props.dispatch(Actions.finishedFetching());
                    this.props.dispatch(Actions.selectUser(snapshot.val()));
                    const userFromFBPojo = snapshot.val()[Object.keys(snapshot.val())[0]];

                    localStorage.setItem("av_userSession", JSON.stringify({
                        user_name : userFromFBPojo.user_name,
                        email: userFromFBPojo.email
                    }));
                    
                    this.setState({doneAuthed : true, user_name : Object.keys(snapshot.val())[0]});
            })
            .catch((err) => {
                console.log(err);
                this.props.dispatch(Actions.finishedFetching());
                this.setState({ errorLogin : true });

            });
          })
          .catch(error => {
            console.log(error);
            this.props.dispatch(Actions.finishedFetching());
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

    componentDidMount() {
        const cachedUser = JSON.parse(localStorage.getItem("av_userSession"));
        if(cachedUser) {
            this.setState({ doneAuthed : true, user_name : cachedUser.user_name });
        }
    }
    render() {
        if(this.state.doneAuthed) {
            return <Redirect to={ '/admin/' + this.state.user_name } />;
        }
        else {
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
                <Button
                    onClick={this.authUser.bind(this)}
                    primary
                    disabled={!this.state.buttonEnabled}
                >
                    Ingresar
                </Button>
                <Text centered noMargin>¿No estás registrado?
                <Link to="/signup"> <BoldText>Create una cuenta.</BoldText></Link></Text>
                {
                    this.state.errorLogin && 
                    <footer>
                        <Text secondary warning>Parece que hubo un error al ingresar, revisá tus datos!</Text>
                    </footer>
                }    
                </SimpleSection>
            );

        }
    }
}

export default connect()(UserContainer);