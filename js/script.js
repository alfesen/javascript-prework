//let computerMove ='kamień';
//printMessage('Zagrałem ' +  computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

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


// Logika if .. else

let randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba: ' + randomNumber);


console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1) {
    computerMove = 'kamień'
} else if(randomNumber == 2) {
    computerMove = 'papier'
} else if (randomNumber == 3) {
    computerMove = 'nożyce'
}
printMessage('Mój ruch to: ' + computerMove);

/* Prompt */
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');

console.log ('Gracz wpisał: ' + playerInput);
let playerMove = 'nieznany ruch';

if(playerInput == 1) {
    playerMove = 'kamień'
} else if(playerInput == 2) {
    playerMove = 'papier'
} else if(playerInput == 3) {
    playerMove = 'nożyce'
}
printMessage('Twój ruch to: ' + playerMove);