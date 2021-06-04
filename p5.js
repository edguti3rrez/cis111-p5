/* 
    Name: Edwin Gutierrez
    Class: CIS 111
    Description: Project 5: Events, JSON, and NATO Phonetic web app
*/

const words = wordList;

let guesses = [];

let word = '';

function handleGuessButtonClick(evt) {
    let guessEntry = document.querySelector('#guessInput').value.trim();
        let firstLetterGuess = guessEntry[0].toUpperCase();
    if (word.length > 0 && guesses.indexOf(firstLetterGuess) < 0) {
        guesses.push(firstLetterGuess);
        displayGuessedLetters();
        displayUnderscores();
    }
    document.querySelector('#guessInput').value = '';
}

function handleStartRestartButtonClick(evt) {
    guesses = [];
    newRandomWord = wordList[getRandomNumber(0, 50)].toUpperCase();
    word = newRandomWord;
    displayUnderscores();

    console.log(word);
    document.querySelector('#startAndRestartButton').textContent = "Restart";
    document.querySelector('#lettersGuessed').textContent = '';
}

function displayGuessedLetters() {
    let guessDisplay = "";

    for (let i = 0; i < guesses.length; i++) {
        guessDisplay = guessDisplay + guesses[i] + "<br />";
    }
    document.querySelector('#lettersGuessed').innerHTML = guessDisplay;
}

function displayUnderscores() {
    let underscoreDisplay = '';
    wordArray = word.split('');
    for (let i = 0; i < wordArray.length; i++) {
        underscoreDisplay = underscoreDisplay + "_ ";
    }
    for (let i = 0; i < guesses.length; i++) {
        for (let i2 = 0; i2 < wordArray.length; i2++) {
            if (wordArray[i2] === guesses[i]) {
                correctGuesses = underscoreDisplay.split(" ");
                correctGuesses[i2] = wordArray[i2];
                underscoreDisplay = correctGuesses.join(" ");
            }
        }
    }
    let underscoresRemaining = underscoreDisplay.split(' ');
    if (underscoresRemaining.indexOf('_') === -1) {
        document.querySelector('#backgroundChanger').style.backgroundImage = "url('confettiGIF.gif')";
        document.querySelector('#correctValue').textContent = 'Correct';
    } else {
        document.querySelector('#backgroundChanger').style.backgroundImage = "url('')";
        document.querySelector('#correctValue').textContent = '';
    }
    document.querySelector('#underscoreDisplay').textContent = underscoreDisplay;
}

function getRandomNumber(min, max) {
    // Generate a random integer between min (included) and max (excluded)
    let randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
}

document.querySelector('#guessButton').addEventListener('click', handleGuessButtonClick);

document.querySelector('#startAndRestartButton').addEventListener('click', handleStartRestartButtonClick);

window.addEventListener("keyup", enterKeyPressed, false);

function enterKeyPressed(evt) {
    if (evt.keyCode === 13) {
        handleGuessButtonClick();
    }
}