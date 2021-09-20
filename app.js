const buttons = document.getElementById('qwerty').querySelectorAll('button');
const phrase = document.getElementById('phrase').querySelector('ul');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;

const phrases = [
    "fly like an eagle",
    "rise and shine",
    "teamwork makes the dream work",
    "practice makes perfect",
    "to the moon"
];

//Hides the start screen overlay when the "Start Game" button is clicked.
startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Chooses a random index from an array of strings (with no special characters)
// Splits that string into a new array of characters.
function getRandomPhraseAsArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomPhrase = array[randomIndex];
    return randomPhrase.split('');
};
const characters = getRandomPhraseAsArray(phrases);

//
function addPhraseToDisplay(array) {
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li')
        li.textContent = array[i];
		if (array[i] !== ' ') {
			li.className = 'letter';
		} else {
			li.className = 'space';
		};
		phrase.appendChild(li);            
    }
};
addPhraseToDisplay(characters);