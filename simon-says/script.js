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
    generateKeyboard()
})