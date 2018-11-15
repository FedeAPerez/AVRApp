import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCqdPh_ZXfcJcTAgCooL0eHYVCsF7kReb8",
    authDomain: "avn-env-prod.firebaseapp.com",
    databaseURL: "https://avn-env-prod.firebaseio.com",
    projectId: "avn-env-prod",
    storageBucket: "avn-env-prod.appspot.com",
    messagingSenderId: "68354630269"
  };

firebase.initializeApp(config);
const auth = firebase.auth();


function fbCreateUser(user) {
    firebase.database().ref('/users/'+user.user_name+'/').set(user);
}

function fbModifyUser(user, parameter, value) {
    firebase.database().ref('/users/'+user.user_name+'/'+parameter).set(value);
}

function fbGetUser(user) {
    const route = '/users/' + user.toLowerCase() + '/';
    return firebase.database().ref(route).once('value');
}

function fbGetUserByEmail(email) {
    
    const route = '/users/';

    return firebase.database().ref(route).orderByChild("email").equalTo(email).once('value');
}



const doSignInWithEmailAndPassword = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
}

const doCreateUserWithEmailAndPassword = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
}

export { 
    fbCreateUser,
    fbGetUser,
    fbModifyUser,
    fbGetUserByEmail,
    doSignInWithEmailAndPassword,
    doCreateUserWithEmailAndPassword
 };