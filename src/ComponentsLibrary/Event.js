import PropTypes from 'prop-types';
import React from 'react';
import { Text, BoldText } from './Text';
import { SimpleSection } from './Section';
import Card from './Card';
/**
 * @augments {Setting<{settingName: string, settingDescrption: string}}, State>}
 */
const Event = ({ ...props, children}) => {
    
    return (
        <Card noPadding noLaterals>
            <SimpleSection noPadding noLaterals relative>
                <Text bolded noMargin>{props.userName}</Text>
                <Text noMargin secondary>{"El " + props.date + " a las " + props.hour}</Text>
            </SimpleSection>
        </Card>
    );
};

const EventV2 = ({ ...props, children}) => {
    
    return (
        <Card noPadding noLaterals>
            <SimpleSection noPadding noLaterals relative>
                <Text bolded noMargin>{props.description}</Text>
                <Text noMargin secondary><BoldText>{"Con " + props.userName}</BoldText> {" - El " + props.date + " a las " + props.hour}</Text>
            </SimpleSection>
        </Card>
    );
};

export default Event;
export {
    Event,
    EventV2
}