import styled from 'styled-components';

const Title = styled.h1`
    font-family: 'Rubik', sans-serif;
    font-weight: ${ props => props.h1 ? '600' : '500'};
    text-align: left;
    font-size: ${ props => props.h1 ? '2rem' : '1.5rem'};
    margin-top: 0rem;
    margin-bottom: 1rem;
`;

export default Title;