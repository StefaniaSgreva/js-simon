"use strict";

// VARIABILI

const NUMBERS_NUM = 5;
const numsToGuess = [];
const userNums = [];
const inputHtml = document.getElementsByTagName('input');
const btn = document.querySelector('button');
const guessedNums = [];

const alertHtml = document.querySelector('.alert');

//FUNZIONI

function init(){
    let time = 3;
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
    // console.log(numsToGuess);
    const timer = setTimeout(resetAll, time * 1000, false);
}
//INVOCO LA FUNZIONE
init();
function resetAll(end){
    for(let i = 0; i < inputHtml.length; i++){
        inputHtml[i].value = '';
        inputHtml[i].toggleAttribute('readonly');
    }
    btn.classList.toggle('d-none');
    alertHtml.innerHTML = '';//riparte il gioco dopo 5 sec
    alertHtml.classList.add('d-none');
    if(end){
        //fare qualcosa in più per ripulire dopo 5 sec
        numsToGuess.length = 0;//svuoto array num da indovinare
        guessedNums.length = 0;//dei num indovinati
        userNums.length = 0;//num ind utente
        init();//richiamo init

    }
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
    } else if{
        alertHtml.innerHTML = 'indovinato ${guessedNums.length}'; //backtick
        questi ${guessedNums}

    } else{
        alertHtml.innerHTML = 'perso';

    }
    const resetTimer = setTimeout(resetAll, 5000, true);
}
