const buttons = document.getElementById("qwerty").querySelectorAll("button");
const phrase = document.getElementById("phrase").querySelector("ul");
const startGame = document.getElementsByClassName("btn__reset");
const overlay = document.getElementById("overlay");
let missed = 0;

const phrases = [
    'fly like an eagle',
    'rise and shine',
    'teamwork makes the dream work',
    'practice makes perfect',
    'to the moon'
];

startGame[0].addEventListener('click', () => {
    overlay.style.display = 'none';
});

//Chooses a random phrase from the "phrases" array and splits that phrase into a new array of characters.
function getRandomPhraseAsArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomPhrase = array[randomIndex];
    return randomPhrase.split('');
};