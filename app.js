const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice =  e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'stone'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult () {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === 'stone' && userChoice === 'paper') {
        result = 'You Won!!'
    }
    if (computerChoice === 'stone' && userChoice === 'scissors') {
        result = 'You Lost!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Won!!'
    }
    if (computerChoice === 'paper' && userChoice === 'stone') {
        result = 'You Lost!'
    }
    if (computerChoice === 'scissors' && userChoice === 'stone') {
        result = 'You Won!!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You Lost!'
    }
    resultDisplay.innerHTML = result;
}