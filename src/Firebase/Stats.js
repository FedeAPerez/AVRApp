export function getStats(patientId, exerciseId, repetitions) {
    let myInitConfiguation = 
    { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'  
        },
    };

    return fetch(process.env.REACT_APP_API_URL.replace(/ /g,'') + '/report', myInitConfiguation)
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
        if(res.hasError) {
            throw new Error("Fallo al cargar los reportes");
        } else {
            return res.data;
        }
    });
}