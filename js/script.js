var cpuNumber = [];
while (cpuNumber.length < 16) {
    var cpuRandomNumber = getRandomIntInclusive(1, 100);
    if (checkNumberInArray(cpuNumber, cpuRandomNumber) == false) {
        cpuNumber.push(cpuRandomNumber);
    }
}

var userNumberArray = [];
var userNumber;
var counter = 1;

while (checkNumberInArray(cpuNumber, userNumber) == false && userNumberArray.length != 5) {
    userNumber = parseInt(prompt('[' + counter + '] Inserisci un numero da 1 a 100:'));
    if (checkNumberInArray(userNumberArray, userNumber) == false && checkIs1to100andNan(userNumber)) {
        userNumberArray.push(userNumber);
        counter++;
    }
    else {
        alert('Numero già inserito, superiore a 100 o carattere non consentito!\nRiprova!');
    }
}

if (checkNumberInArray(cpuNumber, userNumber)) {
    alert('Hai perso!\nHai inserito: ' + userNumber + '\nNumeri CPU: ' + cpuNumber + '\nI tuoi numeri: ' + userNumberArray + '\nPunteggio: ' + userNumberArray.length);
}
else if (userNumberArray.length == 5) {
    alert('Hai vinto!\nNumeri CPU: ' + cpuNumber + '\nI tuoi numeri: ' + userNumberArray + '\nPunteggio: ' + userNumberArray.length);
}

// **************************************************************************
function checkIs1to100andNan(number) {
    if (number > 100 || number == 0 || isNaN(number) == true) {
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
