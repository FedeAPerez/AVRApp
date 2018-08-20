import PropTypes from 'prop-types';
import React from 'react';
import Text from './Text';
import { ModalSection, ModalInnerSection, FlexSection } from './Section';
import { SimpleButton } from './Button';
import { TextField } from 'material-ui';

/**
 * @augments {Setting<{settingName: string, settingDescrption: string}}, State>}
 */
const ModalSetting = ({ ...props, children}) => {
    
    return (
        <ModalSection>
        <ModalInnerSection noPadding relative>
            <Text bolded noMargin>{ props.settingName }</Text>
            <Text noMargin>{ props.settingDescrption }</Text>
            <TextField id={"input"  + props.id} onChange={ (e) => { props.onChange ? props.onChange(e, props.id) : null } } value={props.value} />
            <FlexSection>
                <SimpleButton onClick={ (e) => { props.onClick ? props.onCancel(e, props.id) : null } }>Cancelar</SimpleButton>
                <SimpleButton onClick={ (e) => { props.onClick ? props.onClick(e, props.id, props.value) : null } }>Aceptar</SimpleButton>
            </FlexSection>
        </ModalInnerSection>
        </ModalSection>
    );
};

ModalSetting.propTypes = {
    settingName: PropTypes.string
};

export default ModalSetting;
export {
    ModalSetting
}