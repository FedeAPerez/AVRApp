import * as Actions from './actions_type';
import * as firebase from 'firebase';

export function fetchPatients() {
    return function(dispatch) {
        return firebase.database().ref('/patient/').once('value');
    }
} 