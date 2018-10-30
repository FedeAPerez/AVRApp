import React from 'react';
import { Text, BoldText } from '../../ComponentsLibrary/Text';
import Emoji from '../../MaterialLikeComponents/Emoji';

const PatientSessionList = ({...props, children}) => {
    return (
        <section>
            <Text secondary noMargin withPadding withBackground>{props.name}</Text>
            {
                props.sessions && props.sessions.length > 0 && 
                props.sessions.map((element, index) => {
                    const shouldRenderAdjustments = element.adjustments && element.adjustments > 0;
                    const shouldHaveBreak = props.sessions.length > 1 && index !== (props.sessions.length -1);
                    return (
                        <section key={"patientSessionListItem_"+index}>
                            <Text key={"patientSessionListItemDate_"+index} lateralMargin><BoldText>Fecha:</BoldText> {element.sessionDate || "Sin determinar"}</Text>
                            <Text key={"patientSessionListItemEx_"+index} lateralMargin><BoldText>Ejercicios:</BoldText> { element.okExercises + "/" + (element.okExercises + element.failedExercises)}</Text>
                            {   shouldRenderAdjustments ? 
                                <Text key={"patientSessionListItemAdj_"+index} lateralMargin><BoldText>Desvíos:</BoldText> { element.adjustments }</Text>
                                : null
                            }
                            {
                                !shouldRenderAdjustments ?
                                <Text key={"patientSessionListItemAdj_"+index} lateralMargin><BoldText>Desvíos:</BoldText> { " Sin desvíos " }<Emoji>&#x2714</Emoji></Text>
                                : null
                            }
                            {
                                shouldHaveBreak ?
                                <hr key={"patientSessionListItemHr_"+index} />
                                : null
                            }
                        </section>
                    );
                })
            }
            {
                (!props.sessions || props.sessions.length === 0) &&
                <Text lateralMargin>Todavía no tenemos información de sesiones de este paciente.</Text>
            }
        </section>
    );
};

export default PatientSessionList;