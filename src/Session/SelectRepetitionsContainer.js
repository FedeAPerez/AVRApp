// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import SelectList from './SelectList';
import MiddleFormControl from './MiddleFormControl';
import RedInputLabel from './RedInputLabel';
/* *
 * Hojas de Estilo y Constantes
 * */ 

class SelectRepetitionsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ammountRepetitions: 1,
            repetitions: [
                { id: 1, name: 1},
                { id: 2, name: 2},
                { id: 3, name: 3},
                { id: 4, name: 4},
                { id: 5, name: 5}
            ]
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
    }

    handleChange(event) {
        this.setState((prevState, props) => {
            return {
                ammountRepetitions : event.target.value
            };
        }, () => {
            this.props.handleChangeRepetitions(event.target.value, event.target.name)
        })
    }

    render() {
        return (
            <MiddleFormControl 
                variant="filled" 
            >
                <RedInputLabel>Repeticiones</RedInputLabel>
                <SelectList
                    id={this.state.ammountRepetitions} 
                    list={this.state.repetitions} 
                    handleChange={this.handleChange} />
            </MiddleFormControl>
        );
    }
}

export default SelectRepetitionsContainer;