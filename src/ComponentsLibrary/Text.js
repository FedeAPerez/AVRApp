import styled from 'styled-components';
import React from 'react';

function getColor(props) {
    if(props.secondary) {
        return 'rgb(101, 119, 134)';
    }
    if(props.primary) {
        return '#e17055';
    }
    if(props.warning) {
        return '#d63031';
    }
}

const TextComponent = styled.p`
    font-family: 'Rubik', sans-serif;
    font-weight: ${ props => props.bolded ? '500' : '400' };
    text-align: ${ props => props.centered ? 'center' : 'left' };
    font-size: ${ props => props.bigSize ? '1.8rem' : '1rem' };
    font-size: ${ props => {if(props.amazingSize) return '4rem' } };
    color: ${ props => getColor(props) };
    margin: ${ props => props.noMargin ? '0rem auto' : '1rem auto' };
    margin-top: ${ props => {if(props.topMargin) return '1rem' } };
    
    margin-right: ${ props => {if(props.lateralMargin) return '1rem' } };
    
    margin-left: ${ props => {if(props.lateralMargin) return '1rem' } };
    padding: ${ props => {if(props.withPadding) return '1rem' } };
    background-color:  ${ props => {if(props.withBackground) return '#dfe6e9' } };
`;

const TextComponentOnboarding = TextComponent.extend`
    font-size: 2rem;
    font-weight: 200;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 2rem;
`;

const BoldText = styled.span`
    font-family: 'Rubik', sans-serif;
    font-size: 1rem;
    font-weight: ${ props => props.secondary ? '400' : '500'};
    color: black;
    display: inline;
`;
const getMessageHtml = (element) => {
    return { __html: element };
}
const Text = ({...props, children}) => {
    return (
        <TextComponent {...props} >
        {children}
        </TextComponent>
    );
};

const TextOnboarding = ({...props, children}) => {
    return (
        <TextComponentOnboarding {...props} >
        {children}
        </TextComponentOnboarding>
    );
};

const TextV2  = ({...props, children}) => (
    <TextComponent
        lateralMargin={props.lateralMargin}
        withPadding={props.withPadding}
        noMargin={props.noMargin}
        bigSize={props.bigSize}
        centered = {props.centered}
        amazingSize={props.amazingSize}
        dangerouslySetInnerHTML= { getMessageHtml(children) }>
    </TextComponent>
);
export default Text;
export {
    Text,
    TextV2,
    TextOnboarding,
    BoldText
};