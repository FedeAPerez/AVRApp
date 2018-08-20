import styled from 'styled-components';
import React from 'react';

const TextGlobeComponent = styled.div`
    border-radius: 16px;
    border-bottom-left-radius: ${ props => props.sender ? '16px' : '2px' };

    border-bottom-right-radius: ${ props => props.sender ? '2px' : '16px' };
    float: ${ props => props.sender ? 'right' : 'none' };
    display: ${ props => props.sender ? 'block' : 'inline-block' };

    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .5);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .5);

    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    margin: 0.5rem;
    position: relative;
    padding: 1rem;
    color: ${ props => props.sender ? 'white' : 'black'  };
    background-color: ${ props => props.sender ? 'cornflowerblue' : 'white' };
`;

const KdabraTextGlobe = TextGlobeComponent.extend`
    background-color: #f16334;
    background-image: linear-gradient( to bottom right, #f0932b, #f16334);
    border-radius: 16px;
    display: block;
    text-align: ${ props => props.isLeft ? 'left' : 'center'};
    float: none;
    color: white;
`;

const TextArticle = styled.article`
    position: relative;
    clear: both;
    overflow: hidden;
`;

const TextGlobe = ({children, ...props}) => (
    <TextArticle>
    <TextGlobeComponent {...props}>
        {children}
    </TextGlobeComponent>
    </TextArticle>
);

const getMessageHtml = (element) => {
    return { __html: element };
}

const TextGlobeKdabra = ({children, ...props}) => (
    <TextArticle>
        <KdabraTextGlobe 
            {...props} 
            dangerouslySetInnerHTML= { getMessageHtml(children) }
        />
    </TextArticle>
);

export default TextGlobe;

export {
    TextGlobe,
    TextGlobeKdabra
}