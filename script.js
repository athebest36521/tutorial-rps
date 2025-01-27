console.log("hi");

// Variables to keep track of scores and rounds
let userScore = 0;
let computerScore = 0;
let round = 0;

// Function to get the computer's choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// Function to determine the winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    userScore++;
    return 'You won!';
  }
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock' && computerChoice === 'paper') {
    computerScore++;
    return 'The computer won!';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    userScore++;
    return 'You won!';
  }
  if (userChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    return 'The computer won!';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    userScore++;
    return 'You won!';
  }
  if (userChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    return 'The computer won!';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    userScore++;
    return 'You won!';
  }
};

// Function to play the game
const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

  const result = determineWinner(userChoice, computerChoice);
  console.log(result);

  document.getElementById('userScore').innerHTML = 'User Score: ' + userScore;
  document.getElementById('computerScore').innerHTML = 'Computer Score: ' + computerScore;
  document.getElementById('game-result').innerHTML += 'Round ' + (round + 1) + ': You threw ' + userChoice + ', The computer threw ' + computerChoice + '. ' + result + '<br>';

  round++;
  if (round === 5) {
    const finalResult = userScore > computerScore ? 'Congratulations! You won the game!' : 'The computer won the game!';
    document.getElementById('game-result').innerHTML += '<br>' + finalResult;
  }
};

// Function to reset the game
const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  round = 0;
  document.getElementById('game-result').innerHTML = '';
  document.getElementById('userScore').innerHTML = 'User Score: 0';
  document.getElementById('computerScore').innerHTML = 'Computer Score: 0';
};