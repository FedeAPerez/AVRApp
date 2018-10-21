import * as firebase from 'firebase';

export function getPatients() {
    return firebase.database().ref('/patient/').once('value');
}

export function createModifyPatient(patient) {
    firebase.database().ref('/patient/' + patient.idPatient).set(patient);
}