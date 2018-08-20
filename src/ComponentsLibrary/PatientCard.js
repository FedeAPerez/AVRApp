import styled from 'styled-components';
import React from 'react';
import { SimpleSection } from './Section';
import { Text, BoldText } from './Text';
import { Card } from './Card';
/**
 * @augments {Setting<{settingName: string, settingDescrption: string}}, State>}
 */
const PatientCard = ({ ...props, children}) => {
    
    return (
        <Card noPadding noLaterals>
            <SimpleSection noLaterals relative>
                <Text bolded noMargin>{props.name}</Text>
                <Text noMargin topMargin><BoldText>Edad: </BoldText>{props.age}</Text>
                <Text noMargin topMargin><BoldText>Sexo: </BoldText>{props.gender}</Text>
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