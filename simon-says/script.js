import {getSequence} from "./scripts/sequenceGenerator.js";

document.querySelector('#start').addEventListener('click',() => {
    // document.querySelector('#sequence').innerText = getRandomChar()
    let round = document.querySelector('#rounds').value
    let level = document.querySelector('#levels').value
    console.log(getSequence(level, round))
})