// setInterval( () => {
//     let now = new Date()
//     console.log(now)
//     let newYear = new Date(2025, 0, 1)
//     console.log(newYear)
//     let diff = newYear - now
//     console.log(diff)
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24))
//     const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 *60))
//     const minutes = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60))
//     const seconds = Math.floor((diff % (1000 * 60 * 60 * 24)) / 1000)
//     console.log(days, hours, minutes, seconds)
// }, 1000)

let now = new Date()
console.log(now)
let newYear = new Date(2025, 0, 1)
console.log(newYear)
let diff = newYear - now
console.log(diff)
const days = Math.floor(diff / (1000 * 60 * 60 * 24))
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
const minutes = Math.floor((diff / (1000 * 60 )) % 60)
const seconds = Math.floor((diff / 1000) % 60)
console.log(days, hours, minutes, seconds)

const TIME = document.querySelectorAll('.time')
TIME[0].innerHTML = days
TIME[1].innerHTML = hours
TIME[2].innerHTML = minutes
TIME[3].innerHTML = seconds
