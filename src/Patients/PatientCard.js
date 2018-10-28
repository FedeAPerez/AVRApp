import React from 'react';
import { SimpleSection } from '../ComponentsLibrary/Section';
import { Text, BoldText } from '../ComponentsLibrary/Text';
import { Card } from '../ComponentsLibrary/Card';

const PatientCard = ({ ...props, children}) => {
    return (
        <Card noPadding noLaterals relative>
            <SimpleSection noLaterals relative>
                <Text noMargin><BoldText>{props.name}</BoldText> {props.age} años.</Text>
                <Text noMargin topMargin><BoldText>Comenzó el tratamiento: </BoldText>{props.startDate}</Text>
                {   props.observations &&
                    <Text secondary noMargin topMargin><BoldText>Observaciones: </BoldText>{props.observations}</Text>
                }
            </SimpleSection>
        </Card>
    );
};

export default PatientCard;
export {
    PatientCard
}