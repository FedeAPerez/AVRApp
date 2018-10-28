import React from 'react';
import './InformationBox.css';

const InformationBox = ({...props, children}) => {
    return (
        <div className="InformationBox">
        <span><img rel="preload" src={props.imageSrc} /></span>
        <span>{props.children}</span>
        </div>
    );
};

export default InformationBox;
export {
    InformationBox
};