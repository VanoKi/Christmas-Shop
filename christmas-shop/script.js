import {countdown} from "./js/timer.js";
import {displayGifts} from "./js/displayGifts.js";
import {getGifts} from "./js/displayGifts.js";

setInterval( countdown, 1000)
const gifts = await getGifts()
const destination = document.querySelector('.gifts__wrap')
displayGifts(4, destination, gifts)

