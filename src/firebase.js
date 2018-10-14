import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAdcpqgLvibIjxI11ltuRpdQO2qZL6oeE4",
    authDomain: "app-core-6d96d.firebaseapp.com",
    databaseURL: "https://app-core-6d96d.firebaseio.com",
    projectId: "app-core-6d96d",
    storageBucket: "app-core-6d96d.appspot.com",
    messagingSenderId: "35365703643"
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