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
const numUserHtml = document.querySelector('.userNum');
const btn = document.querySelector('.push');
const popup = document.querySelector('.popup');
const result = document.getElementById('result');
document.getElementById("userInputs").style.visibility = "hidden";

const NUM_GUESS = 5; 
const toGuess = [];
const userAttempts = [];
const MAX_ATTEMPTS = 5;


  //RANDOM 5 NUMBERS TO GUESS
  while(toGuess.length < NUM_GUESS){
    const num = randomNumber(1,100);
    if(!toGuess.includes(num)){
        toGuess.push(num);
    }
}
console.log(toGuess);
numToGuess.innerHTML = `Try to remember: ${toGuess}`;

//COUNTDOWN
let timer = setInterval(function() {
    const elem = document.getElementById("countdown");
    let val = parseInt(elem.innerHTML);
  
    if (val === 0) {
      clearInterval(timer);
      elem.innerHTML = '';
      numToGuess.innerHTML = '';
      document.getElementById("userInputs").style.visibility = "visible";
      return;
    } else{
         val--;
    }
    
    elem.innerHTML = val;
  }, 1000);

//USER ATTEMPTS
function userValuePush(){
    if(userAttempts.length < toGuess.length){
        let inputValue = parseInt(numUserHtml.value);
        userAttempts.push(inputValue);
        console.log(userAttempts);
    } else {
        console.log('stop');
        document.getElementById("userInputs").innerHTML = '';  
        popup.classList.add('active');
        // btn.removeEventListener('click', userValuePush);
    }
    numUserHtml.value = '';
}
btn.addEventListener('click', userValuePush);

//SCORE







  
  
  
  
  





    

    
