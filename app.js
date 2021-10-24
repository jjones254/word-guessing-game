const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const title = document.querySelector('.title');
const phrase = document.getElementById('phrase').querySelector('ul');
const keyboard = document.querySelectorAll('#qwerty button');
const heart = document.querySelectorAll('li > img');

let missed = 0;

const phrases = [
    "fly like an eagle",
    "rise and shine",
    "teamwork makes the dream work",
    "practice makes perfect",
    "to the moon",
    "a whole new world",
    "diamond hands",
    "hold on for dear life"
];

// Hides the start screen overlay when the "Start Game" button is clicked.
startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Chooses a random index from an array of strings.
// Splits that string into a new array of characters.
function getRandomPhraseAsArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomPhrase = array[randomIndex];
    return randomPhrase.split('');
};
const characters = getRandomPhraseAsArray(phrases);

// Adds an array of characters to the display.
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

// Listens for the onscreen keyboard to be clicked.
for (let i = 0; i < keyboard.length; i++) {
    keyboard[i].addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            e.target.className = 'chosen';
            e.target.disabled = true;
            let letterFound = checkLetter(e.target);
            if (letterFound === null) {
                heart[missed].src = "images/lostHeart.png";
                missed += 1;
            }
        }
        checkWin();
    })
};

// Checks if a letter is in the phrase.
function checkLetter(button) {
    let letters = document.querySelectorAll('li.letter');
    let match = null
    for (i = 0; i < letters.length; i++) {
        if (letters[i].textContent.toUpperCase() === button.textContent.toUpperCase()) {
            letters[i].className = 'letter show';
            match = button.textContent;
        }
    }
    return match;
};

// Checks if the game has been won or lost.
function checkWin() {
    let letter = document.querySelectorAll('li.letter');
    let letterShow = document.querySelectorAll('li.show');
    if (letter.length === letterShow.length) {
        overlay.style.display = 'flex';
        overlay.className = 'win';
        title.textContent = "You won the game!";
        startGame.textContent = "New Game";
        resetGame();
    }
    if (missed >= 5) {
        overlay.style.display = 'flex';
        overlay.className = 'lose';
        title.textContent = "Game Over";
        startGame.textContent = "New Game";
        resetGame();
    }
};

// Resets the game with a new phrase.
function resetGame() {
    const newPhrase = getRandomPhraseAsArray(phrases);
    phrase.innerHTML = '';
    addPhraseToDisplay(newPhrase);
    for (let i = 0; i < keyboard.length; i++ ) {
		keyboard[i].disabled = false;
		keyboard[i].classList.remove('chosen');
	}
    for(let i = 0; i < heart.length; i++){
        heart[i].src = "images/liveHeart.png";
    }
    missed = 0;
};
