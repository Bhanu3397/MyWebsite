/*let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget=()=>{
  return console.log(Math.floor(Math.random()*9)) 
};

//generateTarget()

const compareGueesee= function compareGueesee (userGuess,computerGuess,numberToGuess){
    if(userGuess === computerGuess){
        return console.log('User won!')
    } else if(userGuess>computerGuess){
        return console.log(true)
    } else if(userGuess<computerGuess){
        return console.log(false)
    } else{
        return console.log('Error!')
    }
};

compareGueesee(2,1,0)

const updateScore = () =>{
    if 
} 
*/

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;
