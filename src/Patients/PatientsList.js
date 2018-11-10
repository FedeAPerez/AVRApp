import React from 'react';
import { PatientCard } from './PatientCard';

const PatientsList = ({...props, children}) => {
        if( props.patients && props.patients.length > 0) {
            return (
                props.patients.map((element, index) => {
                    return ( 
                        <PatientCard 
                                name = {element.name}
                                age = { element.age}
                                startDate= {element.beginDate}
                                comment={ element.comment }
                                editPatientHandler={ props.editPatientHandler }
                                index={index} 
                                key={"stat_patient_"+index} />
                    );
                })
            );
        }
        else {
            return ( <span>Todavía no tenés pacientes. Creá uno para empezar.</span> );
        }
};

export default PatientsList;