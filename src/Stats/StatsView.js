// StatsView.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import { SimpleSection } from '../ComponentsLibrary/Section';
import { SessionCard } from '../ComponentsLibrary/SessionCard';
/* *
 * Hojas de Estilo y Constantes
 * */ 

function compareSessions(a, b) {
    var dt1   = parseInt(a.sessionDate.substring(0,2));
    var mon1  = parseInt(a.sessionDate.substring(3,5));
    var yr1   = parseInt(a.sessionDate.substring(6,10));
    var date1 = new Date(yr1, mon1-1, dt1);
    var dt2   = parseInt(b.sessionDate.substring(0,2));
    var mon2  = parseInt(b.sessionDate.substring(3,5));
    var yr2  = parseInt(b.sessionDate.substring(6,10));
    var date2 = new Date(yr2, mon2-1, dt2);
    return date1 < date2;
} 

class PatientsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sessions : [
                {
                    name : "Agustín Fernandez",
                    improvment: '0%',
                    sessionDate : '12/08/2018'
                },
                {
                    name : "Agustín Fernandez",
                    improvment : "2%",
                    sessionDate : '20/09/2018'
                },
                {
                    name : "Agustín Fernandez",
                    improvment : "3%",
                    sessionDate : '30/08/2018'
                }
            ]
        }
    }

    render() {
        return (
            <SimpleSection>
                {
                    this.state.sessions.sort(compareSessions).map((element, index) => {
                        return ( 
                            <SessionCard 
                                    name = {element.name}
                                    sessionDate= {element.sessionDate}
                                    improvment={ element.improvment } 
                                    key={"session_patient_"+index} />
                        );
                    })
                }
            </SimpleSection>
        );
    }
}

export default PatientsView;