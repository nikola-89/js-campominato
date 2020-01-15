var cpuNumberArray = [];
var userNumberArray = [];
var userNumber;
var selectLevel;
var level = 0;
var attempts;
var counter;

while (level == 0) {
    selectLevel = parseInt(prompt('Inserisci il livello di difficoltà:\nFacile: inserisci 0\nMedio: inserisci 1\nDifficile: inserisci 2'));
    switch (selectLevel) {
        case 0:
            level = 100;
            attempts = 84;
            break;
        case 1:
            level = 80;
            attempts = 64;
            break;
        case 2:
            level = 50;
            attempts = 34;
            break;
        case 900:
        // DEBUG con 5 tentativi!
            level = 100;
            attempts = 5;
            break;
    }
    counter = attempts;
}

while (cpuNumberArray.length < 16) {
    var cpuRandomNumber = getRandomIntInclusive(1, level);
    if (checkNumberInArray(cpuNumberArray, cpuRandomNumber) == false) {
        cpuNumberArray.push(cpuRandomNumber);
    }
}

// se il contatore non diminuisce: l'utente non ha inserito un numero, un numero doppio o non nel range giusto.
do {
    if (selectLevel == 900) {
        userNumber = parseInt(prompt('[DEBUG]' + '\nNumeri CPU: ' + cpuNumberArray.sort(sortNumber) + '\nI tuoi numeri: ' + userNumberArray.sort(sortNumber) + '\nPunteggio: ' + userNumberArray.length + '\n[' + counter + '] Inserisci un numero da 1 a ' + level + ':'));
    } else {
        userNumber = parseInt(prompt('[' + counter + '] Inserisci un numero da 1 a ' + level + ':'));
    }
    if (checkNumberInArray(userNumberArray, userNumber) == false && checkIs1toNumberMax(userNumber, level) && checkNumberInArray(cpuNumberArray, userNumber) == false && isNaN(userNumber) == false) {
        userNumberArray.push(userNumber);
        counter--;
    }
} while (checkNumberInArray(cpuNumberArray, userNumber) == false && userNumberArray.length != attempts);

if (checkNumberInArray(cpuNumberArray, userNumber)) {
    alert('Hai perso!\nHai inserito: ' + userNumber + '\nNumeri CPU: ' + cpuNumberArray.sort(sortNumber) + '\nI tuoi numeri: ' + userNumberArray.sort(sortNumber) + '\nPunteggio: ' + userNumberArray.length);
} else {
    alert('Hai vinto!\nNumeri CPU: ' + cpuNumberArray.sort(sortNumber) + '\nI tuoi numeri: ' + userNumberArray.sort(sortNumber) + '\nPunteggio: ' + userNumberArray.length);
}

// **************************************************************************
function checkIs1toNumberMax(number, numberMax) {
    if (number > numberMax || number == 0) {
        return false;
    }
    return true;
}

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

function sortNumber(a, b) {
    return a - b;
}
