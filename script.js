'use strict';
// Selecting the elements
const eliPlayer0 = document.querySelector('.player--0');
const eliPlayer1 = document.querySelector('.player--1');
const eliScore0 = document.getElementById('score--0');
const eliScore1 = document.getElementById('score--1');
const eliCurrent0 = document.querySelector('#current--0');
const eliCurrent1 = document.querySelector('#current--1');
const eliDice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, currentPlayer, playing;
// Staring Conditions
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  playing = true;

  eliScore0.textContent = 0;
  eliScore1.textContent = 0;
  eliCurrent0.textContent = 0;
  eliCurrent1.textContent = 0;

  eliDice.classList.add('hidden');
  eliPlayer0.classList.remove('player--winner');
  eliPlayer1.classList.remove('player--winner');
  eliPlayer0.classList.add('player--active');
  eliPlayer1.classList.remove('player--active');
};
init();
// Switch player function
const switchPlayer = () => {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  eliPlayer0.classList.toggle('player--active');
  eliPlayer1.classList.toggle('player--active');
};
// Reset button function
btnNew.addEventListener('click', init);
// Rolling Dice Function
btnRoll.addEventListener('click', () => {
  if (playing) {
    // Generating Random Num
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display the Dice
    eliDice.classList.remove('hidden');
    eliDice.src = `dice-${dice}.png`;
    // Check for the 1
    if (dice !== 1) {
      // Score update
      currentScore += dice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      // Switching the next player
      switchPlayer();
    }
  }
});
// Hold button function
btnHold.addEventListener('click', () => {
  if (playing) {
    // Add and hold the current player score
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];

    // Checking the Winner
    if (scores[currentPlayer] >= 100) {
      //Finishing the game
      playing = false;
      eliDice.classList.add('hidden');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch player
      switchPlayer();
    }
  }
});
