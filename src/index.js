const guessForm = document.getElementById("guess-form");
const maxNumberInput = document.getElementById("max-number");
const userGuessInput = document.getElementById("guess-number")

const resultsContainer = document.getElementById("results-container");
const userGuessResult = document.getElementById("user-guess-result");
const machineGuessResult = document.getElementById("machine-guess-result");
const resultText = document.getElementById("result-text");

const HIDDEN_CLASSNAME = "hidden";
const WIN_TEXT = "You won!";
const LOSE_TEXT = "You lost!";

function generateRandomNumber(maxNumber){
    return Math.floor(Math.random()*maxNumber);
}

function onSubmit(event) {
    event.preventDefault();
    const randomNumber = generateRandomNumber(maxNumberInput.value);
    const userGuess = parseInt(userGuessInput.value,10);
    userGuessResult.textContent = userGuess;
    machineGuessResult.textContent = randomNumber;
    if(randomNumber === userGuess){
        resultText.textContent=WIN_TEXT;
    } else{
        resultText.textContent=LOSE_TEXT;
    }

    resultsContainer.classList.remove(HIDDEN_CLASSNAME);
}


guessForm.addEventListener("submit", onSubmit);