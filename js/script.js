var cpuNumber = [];
while (cpuNumber.length < 16) {
    var cpuRandomNumber = getRandomIntInclusive(1, 100);
    if (checkNumberInArray(cpuNumber, cpuRandomNumber) == false) {
        cpuNumber.push(cpuRandomNumber);
    }
}

var counter = 1;
var userNumberArray = [];
var userNumber;

while (counter !== 85 && checkNumberInArray(cpuNumber, userNumber) == false) {
    userNumber = parseInt(prompt('[' + counter + '] Inserisci un numero da 1 a 100:'))
    if (checkNumberInArray(userNumberArray, userNumber) || userNumber > 100) {
        alert('Numero già inserito o superiore a 100! Riprova!');
        counter -= 1;
    }
    else {
        userNumberArray.push(userNumber);
    }
    if (counter === 84) {
        alert('Hai vinto!\nI tuoi numeri: ' + userNumberArray + '\nNumeri CPU: ' + cpuNumber + '\nPunteggio: ' + counter );
    }
    counter += 1;
}

if (checkNumberInArray(cpuNumber, userNumber)) {
    alert('Hai perso!\nHai inserito: ' + userNumber + '\nNumeri CPU: ' + cpuNumber + '\nI tuoi numeri: ' + userNumberArray + '\nPunteggio: ' + (counter - 1));
}

// **************************************************************************
function checkNumberInArray(array, number) {
    for (var x = 0; x < array.length; x++) {
        if (array[x] === number) {
            return true;
        }
    }
    return false;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
