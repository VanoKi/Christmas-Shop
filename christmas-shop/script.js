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
    gifts = gifts.sort(() => .5  - Math.random())
    for (let i = 0; i < gifts.length; i++) {
        console.log(gifts[i].name)
        // console.log(gifts[i].category)
    }
}

displayGifts()

// getGifts().then(gifts => {
//     console.log(gifts)
// })