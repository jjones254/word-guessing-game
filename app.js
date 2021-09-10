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

