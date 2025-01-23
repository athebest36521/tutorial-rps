console.log("hi");
// Function to get the user's choice
// Function to get the user's choice
// Function to get the user's choice

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
    return 'You won!';
  }
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    return computerChoice === 'paper' ? 'The computer won!' : 'You won!';
  }
  if (userChoice === 'paper') {
    return computerChoice === 'scissors' ? 'The computer won!' : 'You won!';
  }
  if (userChoice === 'scissors') {
    return computerChoice === 'rock' ? 'The computer won!' : 'You won!';
  }
};
  var userScore = 0;
  var computerScore = 0;
  var round = 0;
// Function to play the game
const playGame = (userChoice) => {
  round++;
  const computerChoice = getComputerChoice();

  var string = "The user chose: " + userChoice;
  string = string + " and the computer chose: " + computerChoice;
  var result = determineWinner(userChoice, computerChoice);
  string = string + determineWinner(userChoice, computerChoice);
  document.getElementById('userChoice').innerHTML = string;

  if (result === 'You won!') {
    userScore++;
  }
  else if (result === 'The computer won!') {
    computerScore++;
  } 
  
  document.getElementById('computerScore').innerHTML = computerScore;
  document.getElementById('userScore').innerHTML = userScore;
  if (round === 5) {
    document.getElementById('result').innerHTML = 'Game Over';
    if (userScore > computerScore) {
      document.getElementById('game-result').innerHTML = 'You won the game!';
    }
    else if (userScore < computerScore) {
      document.getElementById('game-result').innerHTML = 'The computer won the game!';
    }
    else {
      document.getElementById('game-result').innerHTML = 'The game is a tie!';
  }
}
  

  console.log('You threw: ' + userChoice);
console.log('The computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};
 const resetGame = () => {
     userScore = 0;
     computerScore = 0;
     round = 0;
     document.getElementById('game-result').innerHTML = '0';
     document.getElementById('result').innerHTML = '0';
};

