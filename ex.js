// #Define an array with valid input values 'Rock', 'Paper', 'Scissors'
let choiceArr = ['Rock', 'Paper', 'Scissors'];

// #Define a function getComputerChoice that returns a random value either 'Rock', 'Paper', 'Scissors'
function getComputerChoice(){
    let computerChoice = choiceArr[Math.floor(Math.random()*choiceArr.length)];
    return computerChoice;
}

// #Define a function that plays a single round of rock, paper, scissors and returns a string.
// #If the player input and computer input are equal, it is a tie. Case-insensitive comparison.
// #Else 
// #If the player input is 'Rock' & computer input is 'Scissors', Player wins; else Player loses.
// #ElseIf the player input is 'Scissors' & computer input is 'Paper', Player wins; else Player loses.
// #ElseIf the player input is 'Paper' & computer input is 'Rock', Player wins; else Player loses.
// #Else the player input is invalid.
//  Change 3: Add a counter;
let counterComp = 0;
let counterPlayer = 0;
function singleRound(computerSelection, playerSelection){
    if(computerSelection.toLowerCase() === playerSelection.toLowerCase()){
        return "It's a tie!";
    }
    else{
        if(playerSelection.toLowerCase() === 'rock'){
            if(computerSelection.toLowerCase() === 'scissors'){
                counterPlayer++;
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }
            else{
                counterComp++;
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }
        }
        else if(playerSelection.toLowerCase() === 'paper'){
            if(computerSelection.toLowerCase() === 'rock'){
                counterPlayer++;
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }
            else{
                counterComp++;
                return `You lose! ${computerSelection} beats ${playerSelection}`;
                
            }
        }
        else if(playerSelection.toLowerCase() === 'scissors'){
            if(computerSelection.toLowerCase() === 'paper'){
                counterPlayer++;
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }
            else{
                counterComp++;
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }
        }
        else{
            return "Enter a valid choice!";
        }
    }
}

// #Call the getComputerChoice() and store the returned value in computerSelection variable
const computerSelection = getComputerChoice();
console.log(computerSelection);

// #Take input from the user
const playerSelection = prompt("Enter your choice:");
console.log(playerSelection);

// #Call function passing the functions: getComputerChoice() & getPlayerChoice(), that return inputs, as parameters.
console.log(singleRound(computerSelection, playerSelection));


// #Play 5 Round Game:
// #1. Add a new function game(). call singleRound() inside to iterate 5 times. Display results of each round.
// #2. Keep a score in each iteration
// #3. return a string stating winner or loser at end.