// #Define an array with valid input values 'Rock', 'Paper', 'Scissors'
let choiceArr = ['Rock', 'Paper', 'Scissors'];


// #Define a function getComputerChoice that returns a random value either 'Rock', 'Paper', 'Scissors'
function getComputerChoice(){
    let computerChoice = choiceArr[Math.floor(Math.random()*choiceArr.length)];
    return computerChoice;
}

// #Define a function to getPlayerChoice, also set default value to avoid null values
function getPlayerChoice(){
    let playerSelection = prompt("Enter your choice: ", "Rock");
    return playerSelection;
}


// #Define a function that plays a single round of rock, paper, scissors and returns a string.
// #If the player input and computer input are equal, it is a tie. Case-insensitive comparison.
// #Else 
// #If the player input is 'Rock' & computer input is 'Scissors', Player wins; else Player loses.
// #ElseIf the player input is 'Scissors' & computer input is 'Paper', Player wins; else Player loses.
// #ElseIf the player input is 'Paper' & computer input is 'Rock', Player wins; else Player loses.
// #Else the player input is invalid.

//update: Add a counter to maintain score;
let counterComp = 0;
let counterPlayer = 0;
function singleRound(computerSelection, playerSelection){
    if(computerSelection.toLowerCase() === playerSelection.toLowerCase()){
        return "It's a tie!";
    }
    else{
        if(playerSelection.toLowerCase() === 'rock'){
            if(computerSelection.toLowerCase() === 'scissors'){
                //Add counter, increment if player wins
                counterPlayer++;
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }
            else{
                //Add counter, increment if computer wins
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
// Play Single Round Game:
// #Call the getComputerChoice() and store the returned value in computerSelection variable
// const computerSelection = getComputerChoice();
// console.log(computerSelection);

// #Take input from the user
// const playerSelection = prompt("Enter your choice:");
// console.log(playerSelection);

// #Call function passing the functions: getComputerChoice() & getPlayerChoice(), that return inputs, as parameters.
// console.log(singleRound(computerSelection, playerSelection));


// #Play 5 Round Game:
// #1. Add a new function game(). call singleRound() inside for loop to iterate 5 times. Display results of each round.
// #2. Get computerSelection & playerSelection for each iteration i.e 5 times.
for(let i=1; i<=5; i++){
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(singleRound(computerSelection,playerSelection));
    // #3. Keep a score in each iteration. Add each counter for computer and player and increment it for the one who wins.
    console.log("Computer : "+counterComp);
    console.log("Player : "+counterPlayer);
}

// #4. Display the score
console.log(`Score -  Computer_${counterComp}: Player_${counterPlayer}`);

// #3. Compare the counters, the greater wins. return a string stating winner or loser at end.
if(counterComp > counterPlayer){
    console.log("You lose! Computer wins!");
} else{
    console.log("You win! Computer loses!");
}