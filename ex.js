// #Define an array with valid input values 'Rock', 'Paper', 'Scissors'
let choiceArr = ['Rock', 'Paper', 'Scissors'];

// #Define a function getComputerChoice that returns a random value either 'Rock', 'Paper', 'Scissors'
function getComputerChoice(){
    let computerChoice = choiceArr[Math.floor(Math.random()*choiceArr.length)];
    return computerChoice;
}

// #Call the getComputer and store the returned value in computerSelection variable
let computerSelection = getComputerChoice();
// console.log(computerSelection);

// #Take user input from the prompt and store it in playerSelection variable.
let playerSelection = prompt('Enter your choice:');
// console.log(playerSelection);

// #Define another function that plays a single round of rock, paper, scissors and returns a string.
// #If the player input and computer input are equal, it is a tie. Case-insensitive comparison.
// #Else 
// #If the player input is 'Rock' & computer input is 'Scissors', Player wins; else Player loses.
// #ElseIf the player input is 'Scissors' & computer input is 'Paper', Player wins; else Player loses.
// #ElseIf the player input is 'Paper' & computer input is 'Rock', Player wins; else Player loses.
// #Else the player input is invalid.
function singleRound(computerSelection, playerSelection){
    if(computerSelection.toLowerCase() === playerSelection.toLowerCase()){
        return "It's a tie!";
    }
    else{
        if(playerSelection.toLowerCase() === 'rock'){
            if(computerSelection.toLowerCase() === 'scissors'){
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }
            else{
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }
        }
        else if(playerSelection.toLowerCase() === 'paper'){
            if(computerSelection.toLowerCase() === 'rock'){
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }
            else{
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }
        }
        else if(playerSelection.toLowerCase() === 'scissors'){
            if(computerSelection.toLowerCase() === 'paper'){
                return `You win! ${playerSelection} beats ${computerSelection}`
            }
            else{
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }
        }
        else{
            return "Enter a valid choice!";
        }
    }
}

// #Call function passing the player input as playerSelection and computer input as computerSelection.
alert(singleRound(computerSelection, playerSelection));
