//create promise function
const lowerCaseWords = new Promise((resolve, reject) => {
    const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
    let wordArray = [];

    mixedArray.forEach(element => {
        if(typeof(element)== "string"){
            wordArray.push(element.toLowerCase());
        }
        
    });

    if(wordArray != null){
        resolve(wordArray)
    } else {
        reject(Error("Cannot complete action"));
    }
});

//call promise function
lowerCaseWords.then(function(result){
    console.log(result);
}).catch ( error => {
    console.log(error)
});