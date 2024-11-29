import {countdown} from "./js/timer.js";
import {displayGifts} from "./js/displayGifts.js";

setInterval( countdown, 1000)
displayGifts(4, document.querySelector('.gifts__wrap'))

