const randomNumber = parseInt(Math.random() * 100 + 1);

const inputArea = document.getElementById('inputArea');
const submit = document.getElementById('submit');
const hintHeading = document.getElementById('hintHeading');
const previousGuessesHeading = document.getElementById('previousGuessesHeading');
const previousGuessesArray = document.getElementById('previousGuessesArray');

let playGame = true;
let numberOfGuesses = 0;
let previousGuesses = [];

if (playGame) {
    submit.addEventListener('click', () => {
        valueOfInputArea = inputArea.value;
        if (valueOfInputArea === '' || valueOfInputArea > 100 || valueOfInputArea < 0) {
            hintHeading.innerHTML = 'Please enter the correct value between 1 to 100';
            return;
        } else {
            validateValue(valueOfInputArea);
            numberOfGuesses++;
            previousGuesses.push(inputArea.value);
            inputArea.value = '';
            previousGuessesHeading.innerHTML = 'Previous Guesses';
            previousGuessesArray.innerHTML = `[${previousGuesses}]`;
        }
    });
}

function validateValue(valueOfInputArea) {
    if (numberOfGuesses === 11) {
        hintHeading.innerHTML = 'You have reached the maximum number of attempts';
        endGame();
    } else if (valueOfInputArea == randomNumber) {
        hintHeading.innerHTML = 'Yeahh You Guessed it Correct <br> You Won it Champion';
        hintHeading.style.color = 'green';
        endGame();
    } else if (valueOfInputArea < randomNumber) {
        hintHeading.innerHTML = 'Your Guess is very low';
    } else if (valueOfInputArea > randomNumber) {
        hintHeading.innerHTML = 'Your Guess is very Highs';
    }
}

function endGame() {
    playGame = false;
    inputArea.setAttribute('disabled', '');
    newGame();
}

function newGame() {
    submit.value = 'Play Again';
    submit.removeEventListener('click', validateValue);
    submit.addEventListener('click', () => location.reload());
}
