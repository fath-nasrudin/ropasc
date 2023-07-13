const getComputerChoice = () => {
  const MAX_NUMBER = 3;
  let randomNumber = Math.floor(Math.random() * MAX_NUMBER);
  switch (randomNumber) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }
};

const getWinner = (userSelection, computerSelection) => {
  userSelection = userSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let winner = null;

  if (userSelection === 'rock') {
    if (computerSelection === 'rock') {
      winner = 'tie';
    } else if (computerSelection === 'paper') {
      winner = 'computer';
    } else {
      winner = 'player';
    }
  } else if (userSelection === 'paper') {
    if (computerSelection === 'paper') {
      winner = 'tie';
    } else if (computerSelection === 'scissors') {
      winner = 'computer';
    } else {
      winner = 'player';
    }
  } else if (userSelection === 'scissors') {
    if (computerSelection === 'scissors') {
      winner = 'tie';
    } else if (computerSelection === 'rock') {
      winner = 'computer';
    } else {
      winner = 'player';
    }
  }
  return winner;
};

const generateRoundLog = (userSelection, computerSelection, winner) => {
  if (!winner) return 'Wrong input!';
  if (winner === 'tie') return 'tie';
  return `You ${
    winner === 'player' ? 'win' : 'lose'
  }! User: ${userSelection} | Computer: ${computerSelection}`;
};

const playRound = (userSelection, computerSelection) => {
  const winner = getWinner(userSelection, computerSelection);
  return winner;
};

// update year display in footer
document.querySelector('#yearFooter').textContent = new Date().getFullYear();

const consoleController = () => {
  const ROUNDS = 5;

  let userScore = 0;
  let computerScore = 0;
  for (let i = 0; i < ROUNDS; i++) {
    const userSelection = prompt(
      'Choose your weapon (rock | paper | scissors)'
    );
    if (!userSelection) {
      console.log('cancelled');
      break;
    }
    const computerSelection = getComputerChoice();
    const winner = playRound(userSelection, computerSelection);

    if (winner === 'player') userScore += 1;
    if (winner === 'computer') computerScore += 1;

    console.log(generateRoundLog(userSelection, computerSelection, winner));
    console.log(`
    Score: [User: ${userScore} || Computer: ${computerScore}]
    Round: ${i + 1}
    `);
  }

  if (userScore > computerScore) {
    console.log('Congrats! you beat the computer');
  } else if (computerScore < userScore) {
    console.log('Unfortunately, you defeated');
  } else {
    console.log('Draw. refresh to do rematch');
  }
};

// selection listener
const buttons = document.querySelectorAll('#selectionButtons > button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', function (e) {
    const userSelection = this.value;
    const computerSelection = getComputerChoice();
    const winner = getWinner(userSelection, computerSelection);

    // update log
    // update score
    // check is the game over?
  });
});
