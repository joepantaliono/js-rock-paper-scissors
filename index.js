function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw!'
    }
    else if (playerSelection === 'rock' && computerSelection !== 'rock') {
        return 'You win!'
    }
    else if (computerSelection === 'rock' && playerSelection !== 'rock') {
        return 'You lose!'
    }
    else if (playerSelection === 'scissors' && computerSelection !== 'scissors') {
        return 'You win!'
    }
    else if (computerSelection === 'scissors' && playerSelection !== 'scissors') {
        return 'You lose!'
    }
}

var playerSelection = 'scissors';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
