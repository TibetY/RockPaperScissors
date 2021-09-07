const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'paper' || userInput === 'rock' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    }else {
        console.log('Erorr, not a valid selection.')
    }

};

const getComputerChoice = () => {

    randNum = Math.floor(Math.random() * 3)

    switch(randNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'It\'s a tie game!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The AI won, run!!';
        } else if (computerChoice === 'scissors') {
            return 'You win!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'You loose! The AI has taken over! :(';
        } else if (computerChoice === 'rock') {
            return 'You win! Skynet is destroyed!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Skynet has killed John Connor, you loose!';
        } else if (computerChoice === 'paper') {
            return 'John Connor has succeeded, you win!';
        }
    }
    if (userChoice === 'bomb') {
        return 'You nuked SkyNet, victory is yours!';
    }
}

const playGame = () => {
    userChoice = getUserChoice('bomb');
    computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The AI threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));

}

playGame();
