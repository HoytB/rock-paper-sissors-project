//Randomly picks rock, paper, or sissors
function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    
    return choices[Math.floor(Math.random()*choices.length)];
}

//Takes player input and compares against computer selection
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "Tie";
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER' || 
            playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS' || 
            playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK') {
        return "Lose";
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS' || 
            playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK' || 
            playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER') { 
        return "Win";
    }
}

let losses = 0;
let wins = 0;
let round = 1;
let winOrLose;

function game() {
    let playerSelection = prompt("Rock, Paper, Scissors!");
        console.log(playerSelection);

    let computerSelection = computerPlay();
        console.log(computerSelection);
    
    winOrLose = playRound(playerSelection, computerSelection);
        console.log(winOrLose);
    
        console.log(`Rounds: ${round}`);
    
    if (winOrLose == "Win") {
        round++;
        ++wins;
    } else if (winOrLose == "Lose") {
        round++;
        ++losses;
    } else {
        round++;
    }

    console.log(`Wins: ${wins}`);
    console.log(`Losses: ${losses}`);

    if (round === 6 && wins > losses) {
        console.log('You Win The Game!')
    } else if (round === 6 && losses > wins) {
        console.log('You Lost The Game!')
    } else if (round === 6 && wins === losses) {
        console.log('You Tied The Game!')
    }

    if (round === 6) {
        round = 1;
        wins = 0;
        losses = 0;
    }
}