import * as firebase from 'firebase';

export function getPatients() {
    return firebase.database().ref('/patient/').once('value').then((res) => {
        var ar = [];
        Object.keys(res.val()).forEach(element => {
           ar.push(res.val()[element]) 
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