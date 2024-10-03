const resolvedPromise = () =>{
    return new Promise(resolve => {
        setTimeout(() => {
            let success = {'message': 'resolved'};
            resolve(success);
        }, 500);
    });
} 

const rejectedPromise = () => {
    return new Promise(reject => {
        setTimeout(() => {
            let failure = {'error': 'rejected'};
            reject(failure);
        },500);
    });
}

resolvedPromise()
    .then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error)
    });


rejectedPromise()
    .then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    });