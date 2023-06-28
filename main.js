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

const playRound = (userSelection, computerSelection) => {
  userSelection = userSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let result = null;

  if (userSelection === 'rock') {
    if (computerSelection === 'rock') {
      result = 'tie';
    } else if (computerSelection === 'paper') {
      result = 'lose';
    } else {
      result = 'win';
    }
  } else if (userSelection === 'paper') {
    if (computerSelection === 'paper') {
      result = 'tie';
    } else if (computerSelection === 'scissors') {
      result = 'lose';
    } else {
      result = 'win';
    }
  } else if (userSelection === 'scissors') {
    if (computerSelection === 'scissors') {
      result = 'tie';
    } else if (computerSelection === 'rock') {
      result = 'lose';
    } else {
      result = 'paper';
    }
  }

  if (result) {
    return `You ${result}! User: ${userSelection} | Computer: ${computerSelection}`;
  } else {
    return 'wrong input!';
  }
};
