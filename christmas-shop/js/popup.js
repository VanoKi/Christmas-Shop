import {getGifts} from "./displayGifts.js";
const gifts = await getGifts()

export function clickOnCard() {
    document.querySelectorAll('.gift__card').forEach( (card) => {
        card.addEventListener('click', (event) => {
            let clickedCard = card.querySelector('h3').textContent
            console.log(clickedCard)
            for (let i = 0; i < gifts.length; i++) {
                if (clickedCard === gifts[i].name) {
                    console.log(gifts[i])
                }
            }
        })
    })
}

