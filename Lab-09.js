/* 
    Name: Edwin Gutierrez
    Class: CIS 111
    Description: Week 9 Lab: Events, JSON, and NATO Phonetic web app
*/

// takes each letter and finds the NATO equivalent from the JSON object below
function chToNATO(ch) {
    let NATO_phon = NATO_Object[ch.toUpperCase()]; // makes each letter capital before comparing
    if (NATO_phon !== undefined || null) {
        return NATO_phon;
    } else {
        return ch; // default return if no match with any properties in JSON object
    }
}

// takes an individual word and makes it into an array formed by its letters
function wordToNATO(word) {
    let letterArray = word.split('');

    let wordString = '';
    for (let i = 0; i < letterArray.length; i++) {
        wordString = wordString + ` ${chToNATO(letterArray[i])}`;
    }
        return wordString; // forms a string made of NATO phonetics from the constituent letters
}

// breaks down several words from a phrase into an array and sends it to the wordToNATO function
function sentenceToNATO(sentence) {
    let trimmedSentence = document.querySelector('#NATOInput').value.trim();
    let wordArray = trimmedSentence.split(' ');

    let NATO_string = '';
    for (let i = 0; i < wordArray.length; i++) {
        NATO_string = NATO_string + ` ${wordToNATO(wordArray[i])}`;
    }
    document.querySelector('#NATO_Output').textContent = NATO_string; // holds and displays the large string of NATO phonetics into a paragraph element
}

// JSON object for every NATO phonetic
const NATO_Object = {
    "A": "Alfa", "B": "Bravo", "C": "Charlie", "D": "Delta", "E": "Echo", "F": "Foxtrot",
    "G": "Golf", "H": "Hotel", "I": "India", "J": "Juliett", "K": "Kilo", "L": "Lima",
    "M": "Mike", "N": "November", "O": "Oscar", "P": "Papa", "Q": "Quebec", "R": "Romeo",
    "S": "Sierra", "T": "Tango", "U": "Uniform", "V": "Victor", "W": "Whiskey", "X": "Xray", 
    "Y": "Yankee", "Z": "Zulu", "1": "One", "2": "Two", "3": "Three", "4": "Four", "5": "Five",
    "6": "Six", "7": "Seven", "8": "Eight", "9": "Niner", "0": "Zero"
}

// calls the sentenceToNATO after clicking the button
document.querySelector('#verbalizeNATO').addEventListener("click", sentenceToNATO);