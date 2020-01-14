var cpuNumber = [];
for (var i = 0; i < 16; i++) {
    cpuNumber.push(getRandomIntInclusive(1, 100))
}
console.log('CPU: ' + cpuNumber);

var counter = 1;
var userNumberArray = [];
var userNumber = parseInt(prompt('[' + counter + '] Inserisci un numero:'))

while (counter !== 85 && checkNumberInArray(cpuNumber, userNumber) == false) {
    console.log('Contatore: ' + counter);
    console.log('USER: ' + userNumberArray);
    userNumber = parseInt(prompt('[' + counter + '] Inserisci un numero:'))
    userNumberArray.push(userNumber);
    if (counter === 84) {
        alert('Hai vinto!\nI tuoi numeri: ' + userNumberArray + '\nNumeri CPU: ' + cpuNumber);
    }
    counter += 1;
}

if (checkNumberInArray(cpuNumber, userNumber)) {
    alert('Hai perso!\nHai inserito: ' + userNumber + '\nNumeri CPU: ' + cpuNumber + '\nI tuoi numeri: ' + userNumberArray);
}

// **************************************************************************
function checkNumberInArray(array, number) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === number) {
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
