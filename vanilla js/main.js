// Created by: Joshua C. Magoliman
let humanScore = 0;
let computerScore = 0;
document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;
function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}
function play(humanPlay) {
  computerPlay = getComputerPlay();
  document.getElementById('status').innerHTML = "<p>(You = <b>" + humanPlay.toUpperCase() + "</b>) VS (AI = <b>" + computerPlay.toUpperCase() + "</b>)</p>";
  if (humanPlay == 'rock') {
    if (computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>Result: Draw</p>";
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>Result: You lose</p>";
      computerScore++;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>Result: You win</p>";
      humanScore++;
    }
  } else if (humanPlay == 'paper') {
    if (computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>Result: You win</p>";
      humanScore++;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>Result: Draw</p>";
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>Result: You lose</p>";
      computerScore++;
    }
  } else if (humanPlay == 'scissors') {
    if (computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>Result: You lose</p>";
      computerScore++;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>Result: You win</p>";
      humanScore++;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>Result: Draw</p>";
    }
  }
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
}
function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}