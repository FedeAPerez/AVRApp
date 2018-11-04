import * as firebase from 'firebase';

export function getPatients() {
    return firebase.database().ref('/patient/').once('value').then((res) => {
        var ar = [];
        Object.keys(res.val()).forEach(element => {
            const elementToPush = res.val()[element];
            ar.push({ 
                id: elementToPush.idPatient, 
                name: elementToPush.name, 
                beginDate: elementToPush.beginDate,
                observations: elementToPush.observations,
                age: elementToPush.age 
            });
        });
        return ar;
    });
}

export function createModifyPatient(patient) {
    const actualDate = new Date();
    const beginDate = actualDate.getDate() + '/' + (actualDate.getMonth() + 1) + '/' + actualDate.getFullYear();
    patient.beginDate = beginDate;
    firebase.database().ref('/patient/' + patient.idPatient).set(patient);
}