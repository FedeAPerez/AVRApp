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
import Text, { BoldText } from '../ComponentsLibrary/Text';
import { getExercises } from '../Firebase/Exercise';
/* *
 * Hojas de Estilo y Constantes
 * */ 
import './SelectExercise.css';
class SelectExerciseContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idExercise: 0,
            exercises: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        getExercises()
        .then((res) => {
            this.setState((prevState, props) => {
                return {
                    exercises : res
                };
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }

    handleChange(event) {
        this.setState((prevState, props) => {
            return {
                idExercise : event.target.value
            };
        }, () => {
            this.props.handleChangeExercise(event.target.value, event.target.name)
        })
    }

    render() {
        let exSelected = this.state.exercises.filter(obj => {
            return obj.id == this.state.idExercise;
        })[0];
        return (
            <section>
                <MiddleFormControl 
                    variant="filled" 
                >
                    <RedInputLabel>Ejercicio</RedInputLabel>
                    <SelectList
                        id={this.state.idExercise} 
                        list={this.state.exercises} 
                        handleChange={this.handleChange} />
                </MiddleFormControl>
                {
                    this.state.idExercise !== 0 &&
                    <section className="ex-description">
                        <span className="dif-shower"></span>
                        <Text lateralMargin><BoldText>Dificultad:</BoldText> {exSelected.exercise.difficulty}/5</Text>
                        <Text lateralMargin><BoldText>Descripción:</BoldText> {exSelected.exercise.description}</Text>
                    </section>
                }
            </section>
        );
    }
}

export default SelectExerciseContainer;