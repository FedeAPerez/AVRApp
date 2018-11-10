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
                comment: elementToPush.comment,
                age: elementToPush.age 
            });
        });
        return ar;
    });
}

export function createModifyPatient(patient, modify = false) {
    if(!modify) {
        const actualDate = new Date();
        const beginDate = actualDate.getDate() + '/' + (actualDate.getMonth() + 1) + '/' + actualDate.getFullYear();
        patient.beginDate = beginDate;
    }
    firebase.database().ref('/patient/' + patient.idPatient).set(patient);
}

export function deletePatient(idPatient) {
    let myInitConfiguation = 
    { 
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'  
        },
    };
    return fetch(process.env.REACT_APP_API_URL.replace(/ /g,'') + '/patient/'+idPatient, myInitConfiguation)
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
        return {
            status : res.head.status_code
        };
    });
}

export function getPatient(idPatient) {
    let myInitConfiguation = 
    { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'  
        },
    };

    return fetch(process.env.REACT_APP_API_URL.replace(/ /g,'') + '/patient/'+idPatient, myInitConfiguation)
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
    });
}