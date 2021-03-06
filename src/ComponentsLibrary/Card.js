import styled from 'styled-components';

const Card = styled.div`
    margin: 0rem auto;
    margin-right: ${ props => props.noLaterals ? '0rem' : '1rem'};
    margin-left: ${ props => props.noLaterals ? '0rem' : '1rem'};
    padding-bottom: ${ props => props.noPadding ? '0rem' : '1rem'};
    border-bottom: ${ props => props.withBottomBorders ? '1px solid #dfe6e9' : 'none'}
    position: ${ props => props.relative ? 'relative' : 'initial'}
    
    margin-bottom: 1rem;
    border-radius: 1rem;
    padding: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 90%;
    box-sizing: content-box;
    background-color: #f5f6fa;
`;

export default Card;
export {
    Card
}