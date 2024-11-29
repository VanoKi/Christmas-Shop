import {getGifts} from "./displayGifts.js";

export function clickOnCard() {
    document.querySelectorAll('.gift__card').forEach( (card) => {
        card.addEventListener('click', (event) => {
            console.log(card.innerHTML)
        })
    })
}
