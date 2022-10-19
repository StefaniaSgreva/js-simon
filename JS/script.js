"use strict"; 

/* 
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono 
e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
tramite una casella di input e un bottone
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti 
e quali dei numeri da indovinare sono stati individuati.
*/

const numToGuess = document.querySelector('.guess');

const NUM_GUESS = 5; 
const toGuess = [];
const MAX_ATTEMPT = 5;


  //RANDOM 5 NUMBERS TO GUESS
  while(toGuess.length < NUM_GUESS){
    const num = randomNumber(1,5);
    if(!toGuess.includes(num)){
        toGuess.push(num);
    }
}
console.log(toGuess);
numToGuess.innerHTML = `Try to remember: ${toGuess}`;


