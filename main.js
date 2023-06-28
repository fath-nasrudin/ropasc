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
