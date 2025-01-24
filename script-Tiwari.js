console.log("hi");
// Function to get the user's choice
// Function to get the user's choice
// Function to get the user's choice
var username = prompt('What is your name?');
document.getElementById('username').innerHTML = 'Hey ' + username + ', Let\'s get this game started';
//Hey '(username)' Let's get started
// Function to get the computer's choice

let userScore = 0;
let computerScore = 0;

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
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerScore++;
      return 'The computer won!';
    } else {
      userScore++;
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      computerScore++;
      return 'The computer won!';
    } else {
      userScore++;
      return 'You won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      computerScore++;
      return 'The computer won!';
    } else {
      userScore++;
      return 'You won!';
    }
  }
};
var userwins=0;
var computerwins=0;
// Function to play the game
const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

  const result = determineWinner(userChoice, computerChoice);
  console.log(result);

  document.getElementById('userScore').innerHTML = 'User Score: ' + userScore;
  document.getElementById('computerScore').innerHTML = 'Computer Score: ' + computerScore;
  document.getElementById('game-result').innerHTML = result;
};
// const resetGame = () => {
//     userScore = 0;
//     computerScore = 0;
//     round = 0;
//     document.getElementById('game-result').innerHTML = '';
//     document.getElementById('result').innerHTML = '';
//     document.getElementById('computer-choice').style.backgroundImage = '';
//   };
  
