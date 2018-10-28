import React from 'react';
import './InformationBox.css';

const InformationBox = ({...props, children}) => {
    return (
        <div className="InformationBox">
        <span><img rel="preload" src={props.imageSrc} /></span>
        <span>El siguiente número deberás ingresarlo en la <b>aplicación de escritorio</b> de Ataxia Visión.</span>
        </div>
    );
};

export default InformationBox;
export {
    InformationBox
};