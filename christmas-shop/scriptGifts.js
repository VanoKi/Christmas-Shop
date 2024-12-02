import {displayGifts} from "./js/displayGifts.js";
import {getGifts} from "./js/displayGifts.js";
import {clickOnCard} from "./js/popup.js";

const gifts = await getGifts()
const destination = document.querySelector('#gifts')

displayGifts(gifts.length, destination, gifts)
clickOnCard()

//tabs
document.querySelectorAll('.tabs__item').forEach((tab) => {
    tab.addEventListener('click', () => {
        document.querySelector('.tabs__item.disabled__tab').classList.remove('disabled__tab')
        tab.classList.add('disabled__tab')
        // console.log(tab.innerHTML)
        if (tab.innerHTML !== 'all') {
            let changedGifts = gifts.filter((item)=> item.category.toLowerCase() === tab.innerHTML)
            displayGifts(changedGifts.length, destination, changedGifts)
        } else {
            displayGifts(gifts.length, destination, gifts)
        }
    })
})

