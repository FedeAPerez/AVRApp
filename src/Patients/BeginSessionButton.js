import React from 'react';

const BeginSessionButton = ({...props, children}) => {
    return (
        <div className="bigButton" onClick={props.onClick}>
            +
        </div>
    );
};

export default BeginSessionButton;