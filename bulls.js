const readlineSync = require('readline-sync');

let randomNumber1 = `${Math.floor(Math.random() * 10)}`, 
    randomNumber2 = `${Math.floor(Math.random() * 10)}`, 
    randomNumber3 = `${Math.floor(Math.random() * 10)}`, 
    randomNumber4 = `${Math.floor(Math.random() * 10)}`; 

    while (randomNumber2 == randomNumber1) {
        randomNumber2 = `${Math.floor(Math.random() * 10)}`;
    }
    while (randomNumber3 == randomNumber2 || randomNumber3 == randomNumber1) {
        randomNumber3 = `${Math.floor(Math.random() * 10)}`;
    }
    while (randomNumber4 == randomNumber3 || randomNumber4 == randomNumber2 || randomNumber4 == randomNumber1) {
        randomNumber4 = `${Math.floor(Math.random() * 10)}`;
    }

    let randomNumber = randomNumber1 + randomNumber2 + randomNumber3 + randomNumber4; 

console.log(randomNumber);


let userTry = readlineSync.question('start\nTry:');

let tryCounter = 1;
while (userTry != randomNumber) {
    let bulls = 0,
        covs = 0;
        for (let i = 0; i < userTry.length; i++){
            if (userTry[i] == randomNumber[i]) {
                bulls++;
            } else {
                for (let j = 0; j < randomNumber.length; j++) {
                    if (userTry[i] == randomNumber[j]) {
                        covs++;
                    }
                }
            }
            
        }
        console.log(`bulls:${bulls}, covs:${covs}`);
        userTry = readlineSync.question('Try:');
        tryCounter++;
}
console.log(`Congratulations! Tries:${tryCounter}`);