import styled from "../../node_modules/styled-components";
import React from 'react';

const textstyles = `
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
`;

const Label = styled.label`
    margin: 1rem auto;
    display: block;
    position: relative;
    text-align: center;

    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    width: fit-content;
    min-width: 250px;
    
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor:pointer;
    
    border: 1px solid rgba(127,140,141,.5);

    box-sizing: border-box;
    border-radius: 0.5rem;

    -webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, .5);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .5);

    ${textstyles};
`;

const Input = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

const CheckMark = styled.span`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: ${ props => props.checked ? '#27ae60' : '#95a5a6' };
    height: 1rem;
    top: 0.5rem;
    right: 0.5rem;
    bottom: 0.5rem;
    width: 1rem;
    border-radius: 0.5rem;
    cursor:pointer;
    
    &:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);

        content: "";
    position: absolute;
    display: none;
    }
`;

const CheckBox = ({children, ...props}) => {
    return (
        <Label {...props} onClick={ props.onClick ? props.onClick : null }>
            {children}
            <Input type="checkbox" />
            <CheckMark {...props} />
        </Label>
    );
};

export default CheckBox;