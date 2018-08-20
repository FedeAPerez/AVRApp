import styled from 'styled-components';

const SimpleSection = styled.div`
    margin: 0rem auto;
    padding: 0rem;
    margin-right: ${ props => props.noLaterals ? '0rem' : '1rem'};
    margin-left: ${ props => props.noLaterals ? '0rem' : '1rem'};
    padding-top: ${ props => props.noPadding ? '0rem' : '1rem'};
    padding-bottom: ${ props => props.noPadding ? '0rem' : '1rem'};
    border-bottom: ${ props => props.withBottomBorders ? '1px solid #dfe6e9' : 'none'}
    position: ${ props => props.relative ? 'relative' : 'initial'};
    background-color: inherit;
    cursor: inherit;
`;

const Section = styled.div`
    margin: 0rem auto;
    padding: 0rem;
    margin-right: ${ props => props.noLaterals ? '0rem' : '1rem'};
    margin-left: ${ props => props.noLaterals ? '0rem' : '1rem'};
    padding-top: ${ props => props.noPadding ? '0rem' : '1rem'};
    padding-bottom: ${ props => props.noPadding ? '0rem' : '1rem'};
    border-bottom: ${ props => props.withBottomBorders ? '1px solid #dfe6e9' : 'none'}
    position: ${ props => props.relative ? 'relative' : 'initial'};
    
    background-color: ${props => props.disabled ? '#E0DDDD' : 'white'};
    
    background-position: center;
    transition: background 0.8s;

    &:hover {
        background-color: ${props => props.disabled ? '' : '#f4f5f5'};
        
        cursor: ${props => props.disabled ? '' : 'pointer'};
    }

    &:active {
        background-color: ${props => props.disabled ? '' : '#95a5a6'};
        background-size: ${props => props.disabled ? '' : '100%'};
        transition: ${props => props.disabled ? '' : 'background 0s'};
    }
`;

const ModalSection = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(41, 42, 43, 0.9);
    margin: 0rem auto;
    display: flex;
`;

const ModalInnerSection = styled.div`
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    background-color: white;
    padding: 1rem;
    border-radius: ${ props => props.withRadius ? '1rem' : '' };
`;

const ModalCenteredInnerSection = styled.div`
    top: 0;
    top: 1rem;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;

`;

const FlexSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: row;
    justify-content: space-around;
`;
export default Section;
export {
    Section,
    ModalSection,
    ModalInnerSection,
    ModalCenteredInnerSection,
    SimpleSection,
    FlexSection
}