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

// VARIABILI

let time = 3;
const NUMBERS_NUM = 5;
const numsToGuess = [];
const userNums = [];
const inputHtml = document.getElementsByTagName('input');
const btn = document.querySelector('button');
const guessedNums = [];
// const popup = document.querySelector('.popup');
// const result = document.getElementById('result');
const alertHtml = document.querySelector('.alert');

//FUNZIONI

function init(){
  
  const min = 1;
  const max = 50;
  let counter = 0;
  while(numsToGuess.length < NUMBERS_NUM){
      const num = randomNumber(min, max);
      if(!numsToGuess.includes(num)){
          numsToGuess.push(num);
          inputHtml[counter].value = num;
          counter++;
      }
  }
  console.log(numsToGuess);
  const timer = setTimeout(resetAll, time * 1000, false);
  
} 
//INVOCO LA FUNZIONE
init();

//COUNTDOWN
// let timer = setInterval(function() {
//     const elem = document.getElementById("countdown");
//     let val = parseInt(elem.innerHTML);
  
//     if (val === 0) {
//       clearInterval(timer);
//       elem.innerHTML = '';
//       numsToGuess.innerHTML = '';
//       return;
//     } else{
//          val--;
//     }
    
//     elem.innerHTML = val;

//   }, resetAll, time * 1000);

function resetAll(){
  for(let i = 0; i < inputHtml.length; i++){
      inputHtml[i].value = '';
      inputHtml[i].toggleAttribute('readonly');
  }
  btn.classList.toggle('d-none');
  alertHtml.innerHTML = '';
  alertHtml.classList.add('d-none');
}

btn.addEventListener('click', showResult);

function showResult(){
  for(let i = 0; i < inputHtml.length; i++){
      const userNum = parseInt(inputHtml[i].value);
      //qui si potrebbe controllare se è un numero, se l'imput è vuoto...
      //controllare che ha inserito 5 numeri
      userNums.push(userNum); 
  }
  // console.log(userNums);
  for(let i = 0; i < userNums.length; i++){
      if(numsToGuess.includes(userNums[i])){
          if(!guessedNums.includes(userNums[i])){
              guessedNums.push(userNums[i]);
          }
      }
  }
  console.log(guessedNums);
  alertHtml.classList.remove('d-none');
  if(numsToGuess.length === guessedNums.length){
      alertHtml.innerHTML = 'indovinato';
  
    }  else if(!guessedNums.length){
    alertHtml.innerHTML = 'perso';

  }else if(numsToGuess.length > guessedNums.length){
    alertHtml.innerHTML = `indovinato ${guessedNums.length} 
    questi ${guessedNums}`;
  }

}



  
  

