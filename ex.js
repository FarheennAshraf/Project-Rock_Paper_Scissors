// #Define an array with valid input values 'Rock', 'Paper', 'Scissors'
let choiceArr = ['Rock', 'Paper', 'Scissors'];


// #Define a function getComputerChoice that returns a random value either 'Rock', 'Paper', 'Scissors'
function getComputerChoice(){
    let computerChoice = choiceArr[Math.floor(Math.random()*choiceArr.length)];
    return computerChoice;
}

// #Define a function to getPlayerChoice, add the necessary checks for null/undefined and other random prompts
function getPlayerChoice(){
    let playerSelection = prompt("Rock, Paper, Scissors, shoot... ");
    if(playerSelection){
        if(playerSelection.toLowerCase() === 'rock'|| playerSelection.toLowerCase() === 'scissors' || playerSelection.toLowerCase() === 'paper') return playerSelection;  
    }
    // logs the error message, doesn't return it
    // returns undefined by default for null/undefined and other random values
    console.log("Please enter a valid choice!");
}

//updated: Add a counter to maintain score;
let counterComp = 0;
let counterPlayer = 0;


// #Define a function playRound() that plays a single round of rock, paper, scissors and returns a string.
// #If the player input and computer input are equal, it is a tie. Case-insensitive comparison.
// #Else 
// #If the player input is 'Rock' & computer input is 'Scissors', Player wins; else Player loses.
// #ElseIf the player input is 'Scissors' & computer input is 'Paper', Player wins; else Player loses.
// #ElseIf the player input is 'Paper' & computer input is 'Rock', Player wins; else Player loses.
// #Else the player input is invalid.
function playRound(computerSelection = getComputerChoice(), playerSelection = getPlayerChoice()){
    if(playerSelection){
        console.log(`Player's choice: ${playerSelection}`);
        console.log(`Computer's choice: ${computerSelection}`);
        if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
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
        }
    }
    // else return "Please enter a valid choice!";
}

function clearCounters(){
    counterComp = 0;
    counterPlayer = 0;
}
// #Play 5 Round Game:
// #1. Add a new function game(). call playRound() inside for loop to iterate 5 times. Display results of each round.
// #2. Get computerSelection & playerSelection for each iteration i.e 5 times. (not needed, call the functions to get each selection in playRound() parameters.)
function game(){
    // Clear the counters as it may store value already if the playRound is executed
    clearCounters();
    for(let i=1; i<=5; i++){
        // const computerSelection = getComputerChoice();
        // const playerSelection = getPlayerChoice();
        console.log(playRound());
        // #3. Keep a score in each iteration. Add each counter for computer and player and increment it for the one who wins.
        console.log("Computer : "+counterComp);
        console.log("Player : "+counterPlayer);
    }
    // #4. Display the score
    console.log(`Score:  Computer-${counterComp} : Player-${counterPlayer}`);

    // #5. Compare the counters, the greater wins. If equal it is a tie return a string stating winner or loser at end.
    if(counterComp > counterPlayer){
    console.log("You lose! Computer wins!");
    } 
    else if(counterComp < counterPlayer){
    console.log("You win! Computer loses!");
    } else{
        console.log("It is a Tie!");
    }
}


