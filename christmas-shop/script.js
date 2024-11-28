
function countdown() {
    let now = Date.now()
    let newYear = new Date(2025, 0, 1)
    let diff = newYear - now
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60 )) % 60)
    const seconds = Math.floor((diff / 1000) % 60)
    const TIME = document.querySelectorAll('.time')
    TIME[0].innerHTML = days
    TIME[1].innerHTML = hours
    TIME[2].innerHTML = minutes
    TIME[3].innerHTML = seconds
}

setInterval( countdown, 1000)

