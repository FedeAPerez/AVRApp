import * as firebase from 'firebase';

export function getToken(patientId, exerciseId, repetitions) {
    let myInitConfiguation = 
    { 
        method: 'POST',
        body: JSON.stringify({
            patientId : patientId,
            exerciseId: exerciseId,
            repetitions: repetitions
        }),
        headers: {
            'Content-Type': 'application/json'  
        },
    };

    return fetch(process.env.REACT_APP_API_URL.replace(/ /g,'') + '/token', myInitConfiguation)
    .then((res) => {
            try { 
                return res.json();
            }
            catch(err) {
                console.log(err);
                
            }
        }, (error) => {
            return { 
                hasError : true, errorDescription : error 
            }
    })
    .then((res) => {
        if(res.hasError) {
            throw new Error("Fallo al cargar los ejercicios");
        } else {
        return res;
        }
    });
}

function getPatients() {

    return new Promise(function(resolve, reject) {
        // Popule the paients with the needed data 
        return firebase.database().ref('/patient/').once('value').then((res) => {
            let listOfPatients = [];
            let listOfValues = res.val();
            if(res.val()) {
                let listOfKeys = Object.keys(listOfValues);
                listOfKeys.forEach(element => {
                    listOfPatients.push({ 
                        name : listOfValues[element].name, 
                        idPatient : listOfValues[element].idPatient
                    }); 
                });
                
                resolve(listOfPatients);
            }   
            else {
                reject();
            }
        });
    });
}

function getSessionsXPatients(listOfPatients) {
    return new Promise(function(resolve, reject) {
        try {
            let listOfSessionsByPatient = [];
            listOfPatients.forEach((value, index, array) => {

                firebase.database().ref('/session/'+ value.idPatient).once('value').then((res) => {
                    let listOfValues = res.val();
                    if(listOfValues) {
                        // Doy ejercicios acerca de los que tuvieron rehabilitación
                        listOfSessionsByPatient.push({name : value.name ,sessions: listOfValues, idPatient: value.idPatient});
                    }
                    else {
                        listOfSessionsByPatient.push({ name : value.name, idPatient: value.idPatient});
                    }
                });
                
                if (index === array.length -1) 
                    resolve(listOfSessionsByPatient);
            });
        }
        catch(err){
            reject(err);
        }
    });

     
}

async function getSessionsXPatientsv2(listOfPatients) {
        try {
            let listOfSessionsByPatient = [];
            for (const value in listOfPatients) {
                await firebase.database().ref('/session/'+ listOfPatients[value].idPatient).once('value').then((res) => {
                    let listOfValues = res.val();
                    console.table(res.val());
                    if(listOfValues) {
                        let list = Object.values(listOfValues);
                        listOfSessionsByPatient.push({
                            name : listOfPatients[value].name,
                            sessions: list, 
                            idPatient: listOfPatients[value].idPatient
                        });
                    }
                    else {
                        listOfSessionsByPatient.push({
                            name : listOfPatients[value].name, 
                            idPatient: listOfPatients[value].idPatient
                        });
                    }
                });
            };
            return listOfSessionsByPatient;
        }
        catch(err){
            console.log(err);
        }
     
}


export function loadSessions() {

        return getPatients()
        .then((responsePatients) => {
            return responsePatients;
        })
        .then((patients) => {
            return getSessionsXPatientsv2(patients)
            .then((responseSessionsPatients) => {
                console.log(responseSessionsPatients);
                return responseSessionsPatients;
            })
            .catch(() => {
                console.log("ERROR AL OBTENER SESIONES POR PACIENTE");
            });
        })
        .catch((err) => {
            console.log("ERROR AL OBTENER PACIENTES");
        });
}