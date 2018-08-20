// SignUpView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import SignUpContainer from './SignUpContainer.js';


class SignUpView extends Component {
    
    render() {
        return (
            <main className="main-container">
                <section className="main-section-container">
                    <SignUpContainer />
                </section>
            </main>
        );
    }
}

export default SignUpView;