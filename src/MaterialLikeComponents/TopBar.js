import React from 'react';
import { Redirect } from 'react-router-dom';
import './TopBar.css';

const TopBar = ({...props, children}) => {
    if(props.goBack) {
        return (
            <Redirect to='/login' />
        );
    }
    else {
        return (
            <section className="topBar">
                <span className="top-bar-action" onClick={props.backToAction}>
                <img className="top-bar-image" src={"/content/images/actions/back.svg"} alt={"Action Top Bar"}/>
                <span className="top-bar-action-text">{props.text}</span>
                </span> 
            </section>
        );
    }
};

export default TopBar;