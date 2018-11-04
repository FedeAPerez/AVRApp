import React from 'react';
import InformationBox from '../MaterialLikeComponents/InformationBox';

const BeginSessionError = ({...props, children}) => {
    return (
    <InformationBox imageSrc="error">
        Hubo un error al iniciar tu sesión... no te preocupes, podemos recuperar tus datos luego. Utilizá el dispositivo de <b>escritorio</b> para la rehabilitación.
    </InformationBox>
    );
}

export default BeginSessionError;