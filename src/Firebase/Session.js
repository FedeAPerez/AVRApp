import * as firebase from 'firebase';

export function getToken(patientId) {
    let myInitConfiguation = 
    { 
        method: 'POST',
        body: JSON.stringify({
            patientId : patientId
        }),
        headers: {
            'Content-Type': 'application/json'  
        },
    };

    return fetch(process.env.REACT_APP_API_URL.replace(/ /g,'') + '/token', myInitConfiguation)
    .then(res => res.json(), (error) => {return {hasError : true, errorDescription : error}})
    .then((res) => {
        if(res.head.status != 200)
            throw new Error("Error al generar token");
        return res;
    });
}

function getPatients() {

    return new Promise(function(resolve, reject) {
        // Popule the paients with the needed data 
        return firebase.database().ref('/patient/').once('value').then((res) => {
            let listOfPatients = [];
            let listOfValues = res.val();
            let listOfKeys = Object.keys(listOfValues);
            listOfKeys.forEach(element => {
                listOfPatients.push({ 
                    name : listOfValues[element].name, 
                    idPatient : listOfValues[element].idPatient
                }); 
            });
            resolve(listOfPatients);
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
                    if(listOfValues) {
                        // Doy ejercicios acerca de los que tuvieron rehabilitación
                        listOfSessionsByPatient.push({
                            name : listOfPatients[value].name,
                            sessions: listOfValues, 
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