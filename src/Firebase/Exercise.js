export function getExercises() {
    let myInitConfiguation = 
    { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'  
        },
    };

    return fetch(process.env.REACT_APP_API_URL.replace(/ /g,'') + '/exercise', myInitConfiguation)
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
            throw new Error("Fallo al cargar los ejercicios");
        } else {
            var ar = [];
            Object.keys(res.data.exercisesList).forEach(element => {
                const elementToPush = res.data.exercisesList[element];
                ar.push({ id: element, name: elementToPush.exercise.name, exercise: elementToPush.exercise });
            });
            return ar;
        }
    });
}
