import React from 'react';
import styled from 'styled-components';
import { SimpleSection } from '../ComponentsLibrary/Section';
import { Text, BoldText } from '../ComponentsLibrary/Text';
import { Card } from '../ComponentsLibrary/Card';

const EditButton = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 0.5rem;
    margin-right: 1rem;
    z-index: 1;
    opacity: 0.6;
`;

const PatientCard = ({ ...props, children}) => {
    return (
        <Card noPadding relative>                
            <EditButton onClick={(e) => props.editPatientHandler(e, props.index)} >
                <img src={"/content/images/actions/edit.svg"} alt="editar paciente" />
            </EditButton>   
            <SimpleSection noPadding noLaterals relative>
            <Text noMargin><BoldText>{props.name}</BoldText> {props.age} años.</Text>
                <Text noMargin topMargin><BoldText>Comenzó el tratamiento: </BoldText>{props.startDate}</Text>
                {   props.comment &&
                    <Text secondary noMargin topMargin><BoldText>Observaciones: </BoldText>{props.comment}</Text>
                }
            </SimpleSection>
        </Card>
    );
};

export default PatientCard;
export {
    PatientCard
}