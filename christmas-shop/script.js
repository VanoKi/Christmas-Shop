import {countdown} from "./js/timer.js";

setInterval( countdown, 1000)

async function getGifts() {
    let response = await fetch('gifts.json')
    let data = await response.json()
    return data
}

// console.log(await getGifts())

async function displayGifts() {
    let block = ``
    let gifts = await getGifts()
    gifts = gifts.sort(() => .5  - Math.random()).slice(0, 4)
    for (let i = 0; i < gifts.length; i++) {
        // console.log(gifts[i].category.split(' ')[1].toLowerCase())
        block += `
            <div class="gift__card">
          <img src="assets/img/img-compressed/gift-for-${gifts[i].category.split(' ')[1].toLowerCase()}.png" alt="gift-for-work">
          <div class="gift__card-titles">
            <p class="gift__card-subtitle card__for-work">${gifts[i].category}</p>
            <h3 class="gift__card-title">${gifts[i].name}</h3>
          </div>
        </div>
        `
    }
    document.querySelector('.gifts__wrap').innerHTML += block
}

displayGifts()

// getGifts().then(gifts => {
//     console.log(gifts)
// })