import React from 'react';
import './BigButton.css';

const BigButton = ({...props, children}) => {
    return (
        <div className="bigButton" onClick={props.onClick}>
            {props.symbol}
        </div>
    );
};

export default BigButton;