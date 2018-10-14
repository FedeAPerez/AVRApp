import * as firebase from 'firebase';

export function getPatients() {
    return firebase.database().ref('/patient/').once('value');
}