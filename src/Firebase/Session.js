export function getToken(patientId) {
    let myInitConfiguation = 
    { 
        method: 'POST',
        body: JSON.stringify({
            patientId : patientId
        }),
        headers: {
            'Content-Type': 'application/json'  
        },
    };

    return fetch(process.env.REACT_APP_API_URL.replace(/ /g,'') + '/token', myInitConfiguation)
    .then(res => res.json(), (error) => {return {hasError : true, errorDescription : error}})
    .then((res) => {
        if(res.head.status != 200)
            throw new Error("Error al generar token");
        return res;
    });
}