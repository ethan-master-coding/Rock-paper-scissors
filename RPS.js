const getUsersChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (userInput == "rock" || userInput == "scissors" || userInput == "paper") {
      return "You have inputed " + userInput;
    } else {
      console.log(
        "You did not input a valid option. Please input a valid one next time."
      );
    }
  };
  
  function getComputerChoice() {
    ChoiceC = Math.floor(Math.random() * 3);
  
    if (ChoiceC == 0) {
      ChoiceC = "paper";
    } else if (ChoiceC == 1) {
      ChoiceC = "rock";
    } else if (ChoiceC == 2) {
      ChoiceC = "scissors";
    } else {
      return "An error as accerd Please run this program again.";
    }
  }
  
  function determinWinner(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
      return "The game was a tie.";
    }
  
    if ((userChoice = "rock")) {
      if (computerChoice == "paper") {
        return "The computer has won. :(";
      } else {
        return "You have won! :)";
      }
    }
  
    if (userChoice == "paper") {
      if (computerChoice == "scissors") {
        return "The computer has won. :(";
      } else {
        return "You have won! :)";
      }
    }
  
    if (userChoice == "scissors") {
      if ((computerChoice = "rock")) {
        return "The computer has won. :(";
      } else {
        return "You have won! :)";
      }
    }
  }
  
  function playGame(input) {
    const userChoice = getUsersChoice(input);
    const computerChoice = getComputerChoice();
  
    console.log(
      `You have played ${userChoice} and the computer has played ${computerChoice}.`
    );
  
    determinWinner(userChoice, computerChoice);
  }
  
  playGame("input choice here");