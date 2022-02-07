//Randomly picks rock, paper, or sissors
function computerPlay() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    
    return choices[Math.floor(Math.random()*choices.length)];
}

const rockButton = document.querySelector('.ROCK');
rockButton.addEventListener('click', () => {
    game('ROCK');
});

const paperButton = document.querySelector('.PAPER');
paperButton.addEventListener('click', () => {
    game('PAPER');
});

const scissorButton = document.querySelector('.SCISSORS');
scissorButton.addEventListener('click', () => {
    game('SCISSORS');
});

const scoreboard = document.querySelector('.score-board');
const playerWins = document.querySelector('.player-wins');
const player = document.querySelector(".player-choice");
const computer = document.querySelector('.computer-choice');
const result = document.querySelector('.result');
const rounds = document.querySelector('.rounds');
const playerLosses = document.querySelector('.player-losses');
const gameResult = document.querySelector('.game-result');


//Takes player input and compares against computer selection
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER' || 
            playerSelection === 'PAPER' && computerSelection === 'SCISSORS' || 
            playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return "Lose";
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || 
            playerSelection === 'PAPER' && computerSelection === 'ROCK' || 
            playerSelection === 'SCISSORS' && computerSelection === 'PAPER') { 
        return "Win";
    }
}

let losses = 0;
let wins = 0;
let round = 1;
let winOrLose;


function game(playerSelection) {
        
    let computerSelection = computerPlay();    
    winOrLose = playRound(playerSelection, computerSelection);

        //display selections and results 
        player.textContent = `${playerSelection}`;
        computer.textContent = `${computerSelection}`;
        result.textContent = `${winOrLose}`;
        rounds.textContent = `${round}`;
    
    if (winOrLose == "Win") {
        round++;
        ++wins;
    } else if (winOrLose == "Lose") {
        round++;
        ++losses;
    } else {
        round++;
    }
    gameResult.textContent = '';
    //displays wins and losses on UI
    playerWins.textContent = `${wins}`;
    playerLosses.textContent = `${losses}`;

    //determines winner
    if (wins === 5) {
        gameResult.textContent = 'You Win The Game!';
        wins = 0;
        round = 0;
        losses = 0;
        winOrLose = '';
        playerSelection = '';
        computerSelection = '';
        player.textContent = `${playerSelection}`;
        computer.textContent = `${computerSelection}`;
        result.textContent = `${winOrLose}`;
        rounds.textContent = `${round}`;
        playerWins.textContent = `${wins}`;
        playerLosses.textContent = `${losses}`;

    } else if (losses === 5) {
        gameResult.textContent = 'You Lost The Game!';
        wins = 0;
        round = 0;
        losses = 0;
        winOrLose = '';
        playerSelection = '';
        computerSelection = '';
        player.textContent = `${playerSelection}`;
        computer.textContent = `${computerSelection}`;
        result.textContent = `${winOrLose}`;
        rounds.textContent = `${round}`;
        playerWins.textContent = `${wins}`;
        playerLosses.textContent = `${losses}`;
    }
}
