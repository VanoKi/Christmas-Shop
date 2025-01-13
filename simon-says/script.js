import {getRandomNumber} from "./scripts/sequenceGenerator.js";
import {getRandomChar} from "./scripts/sequenceGenerator.js";

document.querySelector('#start').addEventListener('click',() => {
    // console.log('click')
    document.querySelector('#sequence').innerText = getRandomChar()
    let selected = document.querySelector('#rounds').value
    console.log(typeof +selected)
})