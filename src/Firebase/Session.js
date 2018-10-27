export function getToken(patientId) {
    let myInitConfiguation = { method: 'POST',
               body: {
                patientId : patientId
               },
               mode: 'cors',
               cache: 'default' };
    return fetch('https://ataxia-services-project.herokuapp.com/token', myInitConfiguation)
    .then(res => res.json(), error => console.error("FALLO AL PEDIR TOKEN"))
    .then(res => {
        return res;
    });
}