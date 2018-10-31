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
                    name : "Ataxia Visión",
                    improvment : "Información cruzada de los pacientes",
                    data : [
                        {
                          "id": "Pac. 1",
                          "color": "hsl(51, 70%, 50%)",
                          "data": [
                            {
                              "x": "Día 1",
                              "y": 10
                            },
                            {
                                "x": "Día 2",
                                "y": 5
                            },
                              {
                                "x": "Día 3",
                                "y": 3
                              },
                              {
                                "x": "Día 4",
                                "y": 4
                              },
                              {
                                "x": "Día 5",
                                "y": 3
                              },
                              {
                                "x": "Día 6",
                                "y": 3
                              },
                              
                              {
                                "x": "Día 7",
                                "y": 0
                              },
                              {
                                "x": "Día 8",
                                "y": 1
                              }
                          ]
                        },

                        {
                            "id": "Pac. 2",
                            "color": "hsl(23, 70%, 50%)",
                            "data": [
                              {
                                "x": "Día 1",
                                "y": 20
                              },
                              {
                                  "x": "Día 2",
                                  "y": 9
                              },
                                {
                                  "x": "Día 3",
                                  "y": 11
                                },
                                {
                                  "x": "Día 4",
                                  "y": 9
                                },
                                {
                                  "x": "Día 5",
                                  "y": 7
                                },
                                {
                                  "x": "Día 6",
                                  "y": 3
                                },
                                
                                {
                                  "x": "Día 7",
                                  "y": 2
                                },
                                {
                                  "x": "Día 8",
                                  "y": 1
                                }
                            ]
                          }
                    ]
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
                                    data = {element.data}
                                    key={"session_patient_"+index} />
                        );
                    })
                }
            </SimpleSection>
        );
    }
}

export default PatientsView;