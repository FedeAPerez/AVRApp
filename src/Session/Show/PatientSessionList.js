import React from 'react';
import { Text, BoldText } from '../../ComponentsLibrary/Text';
import Emoji from '../../MaterialLikeComponents/Emoji';

function reduceTwoExToSessions(listOfEx) {
    let reduced ={
        adjustments : 0,
        okExercises : 0,
        failedExercises : 0,
        sessionDate : ""
    }
    
    for(const ex in listOfEx) {
        reduced.adjustments += listOfEx[ex].Desvios;
        if(listOfEx[ex].FinalizoConExito) {
            reduced.okExercises++;
        }
        else {
            reduced.failedExercises++;
        }
        try {
            let exDate = new Date(listOfEx[ex].Fecha);
            if(isNaN(exDate.getDate()))
                throw new Error("No es una fecha");
            reduced.sessionDate = exDate.getDate() + '/' +(exDate.getMonth()+1) + '/' + exDate.getFullYear();
        }
        catch(err) {
            reduced.sessionDate = "Sin fecha asignada";
        }
    };
    return reduced;
}

const PatientSessionList = ({...props, children}) => {
    return (
        <section>
            <Text secondary noMargin withPadding withBackground>{props.name}</Text>
            {
                props.sessions && props.sessions.length > 0 && 
                props.sessions.map((element, index) => {
                    const reduceFromSessionsToExer = reduceTwoExToSessions(element);

                    const shouldRenderAdjustments = reduceFromSessionsToExer.adjustments && reduceFromSessionsToExer.adjustments > 0;
                    const shouldHaveBreak = props.sessions.length > 1 && index !== (props.sessions.length -1);
                    return (
                        <section key={"patientSessionListItem_"+index}>
                            <Text key={"patientSessionListItemDate_"+index} lateralMargin><BoldText>Fecha:</BoldText> {reduceFromSessionsToExer.sessionDate || "Sin determinar"}</Text>
                            <Text key={"patientSessionListItemEx_"+index} lateralMargin><BoldText>Ejercicios correctos:</BoldText> { reduceFromSessionsToExer.okExercises + "/" + (reduceFromSessionsToExer.okExercises + reduceFromSessionsToExer.failedExercises)}</Text>
                            {   shouldRenderAdjustments ? 
                                <Text key={"patientSessionListItemAdj_"+index} lateralMargin><BoldText>Desvíos:</BoldText> { reduceFromSessionsToExer.adjustments }</Text>
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