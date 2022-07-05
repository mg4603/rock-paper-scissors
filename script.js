const OPTIONS = ["Rock", "Paper", "Scissors"];

function random(number1, number2){
    return Math.floor(Math.random()*(number2-number1)) + number1;
}

function calcOption(number1){
    return OPTIONS[number1];    
}

function computerPlay(){
    return calcOption(random(0, 2));
}




function checkRound(playerSelection, computerSelection){
  
    let result = {
        status: "",
        winningSelection: "",
        losingSelection: "",
    }
    if(playerSelection == computerSelection){
        result.status = "draw";
        return result;
    }
    
    if(playerSelection == "Rock" && computerSelection == "Paper"){
        result.losingSelection = "Rock";
        result.winningSelection = "Paper";
        result.status = "Lose";
    }else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        result.losingSelection = "Scissors";
        result.winningSelection = "Rock";
        result.status = "Win";
    }else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        result.losingSelection = "Scissors";
        result.winningSelection = "Rock";
        result.status = "Lose";
    }else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        result.losingSelection = "Paper";
        result.winningSelection = "Scissors";
        result.status = "Win";
    }else if(playerSelection == "Paper" && computerSelection == "Rock"){
        result.losingSelection = "Rock";
        result.winningSelection = "Paper";
        result.status = "Win";
    }else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        result.losingSelection = "Paper";
        result.winningSelection = "Scissors";
        result.status = "Lose";
    }


    return result;

}


const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const roundResultsDiv = document.querySelector(".roundResults");
const runningScoreDiv = document.querySelector(".runningScore");
const finalResultsDiv = document.querySelector(".finalResults");

let computerPoints = 0;
let playerPoints = 0;

function handleResults(result){
  console.log(result.status);
  if(result.status == "draw")
    roundResultsDiv.textContent = `It's a draw.`;
    else{
      if(result.status == "Win"){
        playerPoints++;
      }else{
        computerPoints++;
      }
  
      runningScoreDiv.textContent = `Computer: ${computerPoints}
                                      Player: ${playerPoints}`
      roundResultsDiv.textContent = 
        `You ${result.status}. ${result.winningSelection} beats ${result.losingSelection}.`;
  }
}
function checkGame(){
  if(computerPoints == 5 || playerPoints == 5){
    //
    // rockBtn.removeEventListener("click", rockClickListenerHandler);
    // paperBtn.removeEventListener("click", paperClickListenerHandler);
    // scissorsBtn.removeEventListener("click", scissorsClickListenerHandler);

    roundResultsDiv.textContent = "";
    runningScoreDiv.textContent = "";
    
    if(playerPoints == 5)
      finalResultsDiv.textContent = "Winner: Player!"
    else
      finalResultsDiv.textContent = "Winner: Computer!"
    return;    
  }
}
function rockClickListenerHandler(){
  handleResults(checkRound("Rock", computerPlay()));
  checkGame();
}

function paperClickListenerHandler(){
  handleResults(checkRound("Paper", computerPlay()));
  checkGame();
}

function scissorsClickListenerHandler(){
  handleResults(checkRound("Scissors", computerPlay()));
  checkGame();
}

function game(){
  console.log(playerPoints, computerPoints)
  rockBtn.addEventListener("click", rockClickListenerHandler);
  paperBtn.addEventListener("click", paperClickListenerHandler);
  scissorsBtn.addEventListener("click", scissorsClickListenerHandler);
  
}

game();