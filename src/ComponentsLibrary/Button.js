import styled from "../../node_modules/styled-components";
import React from 'react';

const textstyles = `
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
`;

const paddingStyles = `
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
`;

const ButtonComponent = styled.button`
    ${paddingStyles}
    ${textstyles}

    border-radius: 0.5rem;
    min-width: 250px;
    background-color: ${ props => props.primary ? '#f16334' : 'white'};

    background-image: ${ props => props.primary ? 'linear-gradient( to bottom right, #f0932b, #f16334)' : 'none' };

    background-color: ${ props => props.disabled ? '#CAD3C8' : 'white'};

    background-image: ${ props => props.disabled ? 'none' : '' };

    display: block;
    margin: 1rem auto;

    color: ${ props => props.primary ? 'white' : 'black'};
    color: ${ props => props.disabled ? '#2C3A47' : ''};

    text-align: center;
    font-size: 1rem;

    border: ${ props => props.primary ? '0px' : '1px solid rgba(255,255,255,.5)' };

    -webkit-box-shadow: ${props => props.disabled ? 'none' : '0 1px 3px 0 rgba(0, 0, 0, .5)' } ;
    box-shadow: ${props => props.disabled ? 'none' : '0 1px 3px 0 rgba(0, 0, 0, .5)' } ;

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: ${ props => props.disabled ? 'auto' : 'pointer'};
    }

    &:active {
        cursor: ${ props => props.disabled ? 'auto' : 'pointer'};
    }
`;

const RoundedButtonComponent = styled.button`
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-family: 'Rubik',sans-serif;
    font-weight: 400;
    border-radius: 0.5rem;
    min-width: 200px;
    background-color: white;
    background-image: none;
    background-color: white;
    display: block;
    margin: 2rem auto;
    color: white;
    text-align: center;
    font-size: 1rem;
    border: none;
    background-color: #f16334;

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
        background-color: #e17055;
    }

    &:active {
        cursor: pointer;
    }

    @media (max-width: 400px) {
      min-width: 110px;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
    }

    @media (max-width: 600px) {
        min-width: 120px;
        padding-left: 0.4rem;
        padding-right: 0.4rem;
      }
`;

const Button = ({children, ...props}) => {
    return (
        <ButtonComponent 
            {...props}
            onClick={ props.onClick ? props.onClick.bind(this) : null }
        >
            {children}
        </ButtonComponent>
    );
};

const SimpleButton = styled.span`
    ${textstyles}
    text-transform: uppercase;
    color : #e84118;
`;
const getMessageHtml = (element) => {
    return { __html: element };
}
const RoundedButton = ({children, ...props}) => {
    return (
        <RoundedButtonComponent 
            dangerouslySetInnerHTML= { getMessageHtml(children) }
            onClick={ props.onClick ? props.onClick.bind(this) : null }
        >
        </RoundedButtonComponent>
    );
};

export default Button;
export {
    Button,
    SimpleButton,
    RoundedButton
};