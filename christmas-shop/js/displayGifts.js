export async function getGifts() {
    let response = await fetch('gifts.json')
    let data = await response.json()
    return data
}

export async function displayGifts(amount, destination, gifts) {
    let block = ``
    // gifts = await getGifts()
    gifts = gifts.sort(() => .5  - Math.random()).slice(0, amount)
    for (let i = 0; i < gifts.length; i++) {
        // console.log(gifts[i].name)
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
    destination.innerHTML = block
}