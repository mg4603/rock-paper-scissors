const OPTIONS = ["Rock", "Paper", "Scissors"];

function random(number1, number2){
    return Math.floor(Math.random()*number2-number1) + number1;
}

function calcOption(number1){
    return OPTIONS[number1];    
}

function computerPlay(){
    return calcOption(random(0, 2));
}

function transformUserInput(inputString){
    return `${inputString[0].toUpperCase()}${inputString.slice(1).toLowerCase()}`;
}

function checkRound(playerSelection, computerSelection){
    if(playerSelection !== undefined){
        playerSelection = transformUserInput(playerSelection);
    }else{
        return "Enter rock, paper or scissors.";
    }
    let result = "";
    let winningSelection = "";
    let losingSelection = "";
    if(playerSelection == computerSelection){
        return "It's a draw."
    }
    if(playerSelection == "Rock" && computerSelection == "Paper"){
        losingSelection = "Rock";
        winningSelection = "Paper";
        result = "Lose";
    }else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        losingSelection = "Scissors";
        winningSelection = "Rock";
        result = "Win";
    }else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        losingSelection = "Scissors";
        winningSelection = "Rock";
        result = "Lose";
    }else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        losingSelection = "Paper";
        winningSelection = "Scissors";
        result = "Win";
    }else if(playerSelection == "Paper" && computerSelection == "Rock"){
        losingSelection = "Rock";
        winningSelection = "Paper";
        result = "Win";
    }else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        losingSelection = "Paper";
        winningSelection = "Scissors";
        result = "Lose";
    }


    return `You ${result}! ${winningSelection} beats ${losingSelection}`;

}


