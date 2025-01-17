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

// Function to play the game
const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
console.log('The computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};
// const resetGame = () => {
//     userScore = 0;
//     computerScore = 0;
//     round = 0;
//     document.getElementById('game-result').innerHTML = '';
//     document.getElementById('result').innerHTML = '';
//     document.getElementById('computer-choice').style.backgroundImage = '';
//   };
  
