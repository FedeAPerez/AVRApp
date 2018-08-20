import styled from "styled-components";
import React from 'react';

const TextInputComponent = styled.input`
    display: block;
    text-align: left;
    padding: 1rem;
    margin: 1rem auto;

    &:focus {
        outline: none;
    }
`;
const TextInput = ({...props, children}) => {
    return (
        <TextInputComponent {...props} />
    );
}
export default TextInput;
