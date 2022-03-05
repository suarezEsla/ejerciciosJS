const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerChoice()
    getResult()


}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) //Se puede usar possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = 'Piedra';
    }
    if (randomNumber === 2) {
        computerChoice = 'Papel';
    }
    if (randomNumber === 3) {
        computerChoice = 'Tijeras';
    }

    computerChoiceDisplay.innerHTML = computerChoice

}


function getResult() {
    if (computerChoice === userChoice) {
        result = 'Empate!!'
    }

    if (computerChoice === 'Piedra' && userChoice === 'Papel') {
        result = 'Has perdido!!'
    }

    if (computerChoice === 'Piedra' && userChoice === 'Tijeras') {
        result = 'Has perdido!!'
    }

    if (computerChoice === 'Papel' && userChoice === 'Tijeras') {
        result = 'Has ganado!!'
    }

    if (computerChoice === 'Papel' && userChoice === 'Piedra') {
        result = 'Has perdido!!'
    }

    if (computerChoice === 'Tijeras' && userChoice === 'Piedra') {
        result = 'Has ganado!!'
    }

    if (computerChoice === 'Tijeras' && userChoice === 'Papel') {
        result = 'Has perdido!!'
    }

    resultDisplay.innerHTML = result
}