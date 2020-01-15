var cpuNumberArray = [];
while (cpuNumberArray.length < 16) {
    var cpuRandomNumber = getRandomIntInclusive(1, 100);
    if (checkNumberInArray(cpuNumberArray, cpuRandomNumber) == false) {
        cpuNumberArray.push(cpuRandomNumber);
    }
}

var counter = 1;
var userNumberArray = [];
var userNumber;

do {
    userNumber = parseInt(prompt('[' + counter + '] Inserisci un numero da 1 a 100:'));
    if (checkNumberInArray(userNumberArray, userNumber) == false && checkIs1to100(userNumber) && checkNumberInArray(cpuNumberArray, userNumber) == false && isNaN(userNumber) == false) {
        userNumberArray.push(userNumber);
        counter++;
    }
} while (checkNumberInArray(cpuNumberArray, userNumber) == false && userNumberArray.length != 84);

if (checkNumberInArray(cpuNumberArray, userNumber)) {
    alert('Hai perso!\nHai inserito: ' + userNumber + '\nNumeri CPU: ' + cpuNumberArray + '\nI tuoi numeri: ' + userNumberArray + '\nPunteggio: ' + userNumberArray.length);
}
else if (userNumberArray.length == 84) {
    alert('Hai vinto!\nNumeri CPU: ' + cpuNumberArray + '\nI tuoi numeri: ' + userNumberArray + '\nPunteggio: ' + userNumberArray.length);
}

// **************************************************************************
function checkIs1to100(number) {
    if (number > 100 || number == 0) {
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
