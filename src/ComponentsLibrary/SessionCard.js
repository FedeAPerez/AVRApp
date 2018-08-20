import styled from 'styled-components';
import React from 'react';
import { SimpleSection } from './Section';
import { Text, BoldText } from './Text';
import { Card } from './Card';
/**
 * @augments {Setting<{settingName: string, settingDescrption: string}}, State>}
 */
const SessionCard = ({ ...props, children}) => {
    
    return (
        <Card noPadding noLaterals>
            <SimpleSection noLaterals relative>
                <Text bolded noMargin>{props.name}</Text>
                <Text noMargin topMargin>{props.sessionDate}</Text>
                <Text noMargin topMargin><BoldText>Mejora: </BoldText>{props.improvment}</Text>
                </SimpleSection>
        </Card>
    );
};

export default SessionCard;
export {
    SessionCard
}