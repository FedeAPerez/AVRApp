export function getToken(patientId) {
    return fetch('https://ataxia-services-project.herokuapp.com/token')
    .then(res => res.json(), error => console.error("FALLO AL PEDIR TOKEN"))
    .then(res => {
        return res;
    });
}