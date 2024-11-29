import {countdown} from "./js/timer.js";

setInterval( countdown, 1000)

async function getGifts() {
    let response = await fetch('gifts.json')
    let data = await response.json()
    return data
}

// console.log(await getGifts())

async function displayGifts() {
    let gifts = await getGifts()
    console.log(gifts)
}

displayGifts()

// getGifts().then(gifts => {
//     console.log(gifts)
// })