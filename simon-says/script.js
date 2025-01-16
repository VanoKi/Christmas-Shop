import {generateLayout} from "./scripts/generateLayout.js";
import {generateKeyboard} from "./scripts/keyboard.js";
import {getSequence} from "./scripts/sequenceGenerator.js";

generateLayout()

document.addEventListener('DOMContentLoaded', () => {
    generateGameUI();
    let userInput = [];
    let sequence = [];

    function checkInput() {
        for (let i = 0; i < userInput.length; i++) {
            if (userInput[i] !== sequence[i]) {
                console.log('error');
                return false;
            }
        }
        if (userInput.length === sequence.length) {
            console.log('victory!');
            return true;
        }
        return null;
    }

    function generateSequence(level, round) {
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        const letters = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z'
        ];

        let pool = [];
        if (level === 'easy') {
            pool = numbers;
        } else if (level === 'medium') {
            pool = letters;
        } else if (level === 'hard') {
            pool = [...numbers, ...letters];
        }

        const length = round * 2;
        return Array.from({ length }, () => pool[Math.floor(Math.random() * pool.length)]);
    }

    const generateKeyboard = (level) => {
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        const letters = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z'
        ];

        let pool = [];
        if (level === 'easy') {
            pool = numbers;
        } else if (level === 'medium') {
            pool = letters;
        } else if (level === 'hard') {
            pool = [...numbers, ...letters];
        }

        const keyboardContainer = document.querySelector('#keyboard');
        keyboardContainer.innerHTML = '';

        pool.forEach((key) => {
            const button = document.createElement('button');
            button.textContent = key;
            button.dataset.key = key;
            button.addEventListener('click', () => {
                userInput.push(key);
                console.log(`You pressed: ${key}`);
                const result = checkInput();
                if (result === true) {
                    console.log('Victory!');
                } else if (result === false) {
                    userInput = [];
                    console.log('try again!');
                }
            });
            keyboardContainer.appendChild(button);
        });
    };

    document.querySelector('#start').addEventListener('click', () => {
        const level = document.querySelector('#levels').value;
        const round = +document.querySelector('#rounds').value;

        sequence = generateSequence(level, round);
        userInput = [];
        console.log(`sequence: ${sequence}`);
        generateKeyboard(level);
    });
});

