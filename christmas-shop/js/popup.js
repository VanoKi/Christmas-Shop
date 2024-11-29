import {getGifts} from "./displayGifts.js";

export function clickOnCard() {
    document.querySelectorAll('.gift__card').forEach( (card) => {
        card.addEventListener('click', (event) => {
            let clickedCard = card.querySelector('h3').textContent
            console.log(clickedCard)
        })
    })
}
