console.log("hi");

// Variables to keep track of scores and rounds


var userName = prompt('What is your name?');
let userScore = 0;
let computerScore = 0;
let round = 0;
let gameOver = false; // Add a flag to track if the game is over
document.getElementById('name').innerHTML = `Hey ${userName}, let's play Rock, Paper, Scissors!`;
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
  if (gameOver) return; // Check if the game is over

  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

  const result = determineWinner(userChoice, computerChoice);
  console.log(result);

  document.getElementById('userScore').innerHTML = name + ' Score: ' + userScore;
  document.getElementById('computerScore').innerHTML = 'Computer Score: ' + computerScore;
  document.getElementById('game-result').innerHTML += 'Round ' + (round + 1) + ': You threw ' + userChoice + ', The computer threw ' + computerChoice + '. ' + result + '<br>';
//`Hey ${name}, you threw: ${userChoice}. The computer threw: ${computerChoice}. ${result}`;
  round++;
  if (round === 5) {
    const finalResult = userScore > computerScore ? 'Congratulations! You won the game!' : 'The computer won the game!';
    document.getElementById('game-result').innerHTML += '<br>' + finalResult;
    gameOver = true; // Set the game over flag
  }
};
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  document.querySelectorAll('button').forEach(button => {
    button.classList.toggle("dark-mode");
  });
  document.querySelector('header').classList.toggle("dark-mode");
  document.querySelector('footer').classList.toggle("dark-mode");
};

// Function to reset the game
const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  round = 0;
  gameOver = false; // Reset the game over flag
  document.getElementById('game-result').innerHTML = '';
  document.getElementById('userScore').innerHTML = 'User Score: 0';
  document.getElementById('computerScore').innerHTML = 'Computer Score: 0';
};