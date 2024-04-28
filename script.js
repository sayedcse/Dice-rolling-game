'use strict';
//Selecting the elements
const eliScore0 = document.getElementById('score--0');
const eliScore1 = document.getElementById('score--1');
const eliCurrent0 = document.querySelector('#current--0');
const eliCurrent1 = document.querySelector('#current--1');
const eliDice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Staring Conditions
eliScore0.textContent = 0;
eliScore1.textContent = 0;
eliDice.classList.add('hidden');
let currentScore = 0;

//Rolling Dice Function
btnRoll.addEventListener('click', () => {
  //Generating Random Num
  const dice = Math.trunc(Math.random() * 6) + 1;

  //Display the Dice
  eliDice.classList.remove('hidden');
  eliDice.src = `dice-${dice}.png`;
  //Check for the 1
  if (dice !== 1) {
    //Score update
    currentScore += dice;
    eliCurrent0.textContent = currentScore;
    console.log(currentScore);
  } else {
  }
});
