import {countdown} from "./js/timer.js";
import {displayGifts} from "./js/displayGifts.js";
import {getGifts} from "./js/displayGifts.js";
import {clickOnCard} from "./js/popup.js";
import {showBurger} from "./js/burger.js";
import {slider} from "./js/slider.js";

setInterval( countdown, 1000)
const gifts = await getGifts()
const destination = document.querySelector('.gifts__wrap')

showBurger()
displayGifts(4, destination, gifts)
clickOnCard()
slider()
