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
