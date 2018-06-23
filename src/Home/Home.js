// BlankFile.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import LinkButton from '../Commons/LinkButton';
/* *
 * Hojas de Estilo y Constantes
 * */ 
import './Home.css';

class Home extends Component {
    render() {

        return (
            <main className="home-main">
                <header>
                    <h1 className="home-title">
                    ATAXIA VISION
                    </h1>
                </header>
                <footer>
                    <LinkButton 
                        href="/login"
                        color="#fff"
                        text="EMPEZAR"
                    />
                </footer>
            </main>
        );
    }
}

export default Home;