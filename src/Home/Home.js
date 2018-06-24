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
                    <div className="arms-anim-container">
                        <span className="arms-anim-bot">
                        </span>
                        <span className="arms-anim-obj">
                        </span>
                    </div>
                    <h1 className="home-title">
                    AV
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