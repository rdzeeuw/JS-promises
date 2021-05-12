
// exercise 1 ----- one promise------
const testNum = num => {
    return new Promise((resolve, reject) => {
        if(num > 10){
            resolve( num + ' is greater than 10');
        } else {
            reject( num + ' is less than 10');
        }  
    });
};

testNum(9)
    .then(result => console.log(result))
    .catch(error => console.log(error));

testNum(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));

// exercise 2 -----promise.all()----
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = words => {
    return new Promise((resolve, reject) => {
        if(words.every(word => {
            return typeof word === 'string';
        })
        ){
            resolve(
                sortWords(
                    words.map(word => {
                        return word.toUpperCase();
                    })
                )
            );
        } else {
            reject('Not a string!');
        }
    });
};

const sortWords = words => {
    return new Promise((resolve, reject) => {
        if(words) {
            resolve(words.sort());
        } else {
            reject('strings only!');
        }
    });
};

makeAllCaps(arrayOfWords)
    .then(sortWords(arrayOfWords))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(complicatedArray)
    .then(sortWords(complicatedArray))
    .then(result => console.log(result))
    .catch(error => console.log(error));