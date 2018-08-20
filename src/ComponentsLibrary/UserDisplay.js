import React from 'react';
import Text from './Text';
import { Section, SimpleSection } from './Section';
import Tag from './Tag'

const UserDisplay = ({...props, children}) => {
    return (
        <Section noLaterals withBottomBorders withHover {...props} onClick={props.onClick}>
            <SimpleSection noPadding  relative>
                {
                    (props.userTag && props.userTag !== '') &&
                    <Tag>{props.userTag}</Tag>
                }
                {
                    (props.userShowName && props.userShowName !== '') &&
                    <Text bolded noMargin>{props.userShowName}</Text>
                }
                <Text secondary noMargin>{'@'+props.userName}</Text>
                {   (props.userDescription && props.userDescription !== '') &&
                    <Text noMargin topMargin>{props.userDescription}</Text>
                }
            </SimpleSection>
        </Section>
    );
};

export default UserDisplay;
export {
    UserDisplay
};