let computerScore = 0;
let playerScore = 0;

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

function game() {
    // plays 10 random rounds and returns score
    for (let roundCount = 0; roundCount < 10; roundCount++) {
        let playerSelection = choices[Math.floor(Math.random()*choices.length)]; //randomly generated
        let computerSelection = computerPlay(); //randomly generated
        let result = playRound(playerSelection, computerSelection);
        if (result === 'Draw') {
            //pass
        }
        else if (result === 'You win!') {
            playerScore++
        }
        else if (result === 'You lose!') {
            computerScore++
        }
    }
    console.log("Final Scores:");
    console.log("Computer's score: " + computerScore);
    console.log("Player's score: " + playerScore);

    if (computerScore > playerScore) {
        console.log('You lose the game.')
    }
    else if (playerScore > computerScore) {
        console.log('You won the game!')
    }
    else {
        console.log('Game ends in a draw')
    }
}





let choices = ['rock', 'paper', 'scissors'];
let playerSelection = choices[Math.floor(Math.random()*choices.length)];

console.log(game());
