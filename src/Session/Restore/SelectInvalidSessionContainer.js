// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import SelectList from '../SelectList';
import MiddleFormControl from '../MiddleFormControl';
import RedInputLabel from '../RedInputLabel';
/* *
 * Hojas de Estilo y Constantes
 * */ 

class SelectInvalidSessionContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idSession: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState((prevState, props) => {
            return {
                idSession : event.target.value
            };
        }, () => {
            this.props.handleChangeSession(event.target.value, event.target.name)
        })
    }

    render() {
        return (
            <MiddleFormControl 
                variant="filled" 
            >
                <RedInputLabel>Sesión sin vincular</RedInputLabel>
                <SelectList
                    id={this.state.idSession} 
                    list={this.props.invalidSessions} 
                    handleChange={this.handleChange} />
            </MiddleFormControl>
        );
    }
}

export default SelectInvalidSessionContainer;