// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
/* *
 * Código de librerías internas
 * */ 
import Loader from './Loader';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class LoaderContainer extends Component {
    render() {
        return (
            <Loader isFetching = {this.props.isFetching} />
        );
    }
}

function mapStateToProps(state) {
    const { isFetching } = state.fetching;
    return {
        isFetching
    }
}

export default connect(mapStateToProps)(LoaderContainer);