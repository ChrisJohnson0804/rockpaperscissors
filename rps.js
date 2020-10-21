const options = Array.from(document.querySelectorAll('.weapon'));
let results = document.querySelector('#results');

function computerPlay(){
    let playNum = Math.floor(Math.random()*3);
    let compChoice = "";
    if (playNum == 0) {
        compChoice = "rock";
    } else if (playNum == 1){
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }
    return compChoice;
}

function play(e){
    let playerSelection = e.target.id;
    computerPlay();
    playRound(playerSelection);
}

options.forEach(weapon => document.addEventListener('click', play));

function playRound(playerSelection){
    let winner = "";
    computerSelection = computerPlay();
    if(playerSelection ==  computerSelection){
        winner = "nobody";
    } else if(playerSelection == "rock" && computerSelection == "paper"){
        winner = "computer";
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        winner = "player";
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        winner = "player";
    } else if(playerSelection == "paper" && computerSelection == "scissors"){
        winner = "computer";
    } else if(playerSelection == "scissors" && computerSelection == "rock"){
        winner = "computer";
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        winner = "player";
    } else if ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors")) {
        winner = "nobody";
        results.textContent = ("You typed " + playerSelection + ". I didn't understand that. Please try again.");
    }
    
    results.textContent = ("Player picked " + playerSelection + " and Computer picked " + computerSelection + ". " + winner + " wins.");
    return (winner);  
}


// function game(){
// let playerScore = 0;
// let compScore = 0;
// for(i=0; i<5; i++){
//     let victor = playRound();
//     if (victor == "computer"){
//         compScore++;
//     } else if (victor == "player"){
//         playerScore++;
//     }
//     console.log("Player Score is " + playerScore + ". Computer Score is " + compScore + ".");
//     if (compScore == 3 || playerScore == 3){
//         console.log(victor + " wins the best 3 out of 5!");
//         break;
//     }
//     }
// }
// game(); 