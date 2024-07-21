//#region Controls
const startButton = document.getElementById("startButton");

const endButton = document.getElementById("endButton");

var resultText = document.getElementById("Result");

var playerResultText = document.getElementById("PlayerResult");

var computerResultText = document.getElementById("ComputerResult");

var playerSelection = "";

var computerSelection = "";

var playerScore = 0;

var computerScore = 0;

var gameStarted = true;

const choices = ["paper", "scissors", "rock"];
//#endregion

//#region Helper Methods
function GenerateComputerSelection() {
    var selectedValue = Math.floor(Math.random() * 3);
    return choices[selectedValue];
}
function CheckChoiceResult(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        resultText.textContent = "IT'S A TIE";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        resultText.textContent = "COMPUTER WINS";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        resultText.textContent = "PLAYER WINS";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        resultText.textContent = "PLAYER WINS";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        resultText.textContent = "COMPUTER WINS";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        resultText.textContent = "PLAYER WINS";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        resultText.textContent = "COMPUTER WINS";
    }
}

function DisplayResults(){
    playerResultText.textContent = `PLAYER: ${playerScore}`;
    computerResultText.textContent = `COMPUTER: ${computerScore}`;
}
//#endregion

//#region OnClickEvents

function RockButtonClicked() {
    playerSelection = "rock";
    computerSelection = GenerateComputerSelection();
    CheckChoiceResult(playerSelection,computerSelection);
    DisplayResults();
}
function PaperButtonClicked() {
    playerSelection = "paper";
    computerSelection = GenerateComputerSelection();
    CheckChoiceResult(playerSelection,computerSelection);
    DisplayResults();
}

function ScissorsButtonClicked() {
    playerSelection = "scissors";
    computerSelection = GenerateComputerSelection();
    CheckChoiceResult(playerSelection,computerSelection);
    DisplayResults();
}

function StartGameButtonClicked() {
    endButton.style.visibility = 'visible';
    startButton.style.visibility = 'hidden';
    gameStarted = true;
}

function EndGameButtonClicked() {
    startButton.style.visibility = "visible";
    endButton.style.visibility = "hidden";
    gameStarted = false;
    playerScore = 0;
    computerScore = 0;
    resultText.textContent = "";
    DisplayResults();
}
//#endregion
