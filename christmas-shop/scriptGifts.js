import {displayGifts} from "./js/displayGifts.js";
import {getGifts} from "./js/displayGifts.js";

const gifts = await getGifts()
const destination = document.querySelector('#gifts')

displayGifts(gifts.length, destination, gifts)

document.querySelectorAll('.tabs__item').forEach((tab) => {
    tab.addEventListener('click', () => {
        document.querySelector('.tabs__item.disabled__tab').classList.remove('disabled__tab')
        tab.classList.add('disabled__tab')
        console.log(tab.innerHTML)
        // gifts = gifts.filter((item)=> item.category === tab.inner)
        // displayGifts()
    })
})