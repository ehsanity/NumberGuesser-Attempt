let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// we 'generateTarget' through the formula given.
const generateTarget = () =>{
    let generateTarget = Math.floor(Math.random () * 10);
    return generateTarget;
}
//we create the 'compareGuesses' constant 3 param. 

const compareGuesses = (humanGuess, computerGuess, secretTarget) =>{
    //created a value for 'humanGuess
    let humanGuess = Math.floor(Math.random()*10);
    //created a value for 'computerGuess'
    let computerGuess = Math.floor(Math.random()*10);
    //we defined 'secretTarget' to equal 'generateNumber'
    let secretTarget = generateTarget ();
    // value h for human input which runs into the math abs formula
    const valueH = Math.abs(humanGuess - secretTarget);
    // value c for computer input also runs into the math abs formula
    const valueC = Math.abs(computerGuess - secretTarget);
    //created the if else statement 
    if (valueH < valueC){
        return true;
        
    }else if (valueC < valueH){
        return false;

    }else if (valueH === valueC){
        return true;
    
    }

}
//update score of winner through formula provided below. ++ means +1
const updateScore = (winner) => {
    if (winner === 'human') {
      humanScore ++;
    } else if(winner === 'computer') {
        computerScore ++;
    }
}

// advance the round using ++. bringing 'compareGusses' to check for round completion
const advanceRound = () =>{
    if (compareGuesses = true) {
        let currentRoundNumber = currentRoundNumber ++; 
    }else if (compareGuesses = false){
        let currentRoundNumber = currentRoundNumber ++;    
    }

}

    

  