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
  return generateRoundLog(userSelection, computerSelection, winner);
};

const game = () => {
  const ROUNDS = 5;

  for (let i = 0; i < ROUNDS; i++) {
    const userSelection = prompt(
      'Choose your weapon (rock | paper | scissors)'
    );
    const computerSelection = getComputerChoice();
    const result = playRound(userSelection, computerSelection);
    console.log(result);
  }
};

game();
