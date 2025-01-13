import {getSequence} from "./scripts/sequenceGenerator.js";
import {generateKeyboard} from "./scripts/keyboard.js";

document.querySelector('#start').addEventListener('click',() => {
    console.log('click on start')
    // document.querySelector('#sequence').innerText = getRandomChar()
    let round = document.querySelector('#rounds').value
    let level = document.querySelector('#levels').value
    let sequence = getSequence(level, round)
    document.querySelector('#sequence').innerText = sequence
    console.log(sequence)
    generateKeyboard(level)

    let userInput = [];
    function checkInput() {
        for (let i = 0; i < userInput.length; i++) {
            if (userInput[i] !== sequence[i]) {
                console.log('Error!');
                return false;
            }
        }
        if (userInput.length === sequence.length) {
            console.log('success');
            return true;
        }
        return null; // Ожидаем дальнейших нажатий
    }
    checkInput()
})