let computerMove ='kamień';
printMessage('Zagrałem ' +  computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let playerMove='papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

//let randomFraction = Math.random();
//printMessage('Wylosowany ułamek to ' + randomFraction)

//let calculation= randomFraction * 3+1;
//printMessage('Ułamek pomnożony przez 3 i powiększ o 1: ' + calculation);

//let roundNumber = Math.floor(calculation);
//printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);

//let randomNumber = Math.floor(Math.random() * 9 + 11);
//printMessage('Wylosowana liczba: ' + randomNumber);

let randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba: ' + randomNumber);

// Logika if .. else

console.log('Wylosowana liczba to: ' + randomNumber);