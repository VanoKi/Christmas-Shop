const NumberSequence = Array.from({length: 10}, (v, k) => k)
// console.log(Math.floor(Math.random() * NumberSequence.length))
const getRandomNumber = () => Math.floor(Math.random() * NumberSequence.length)
// console.log('a'.charCodeAt(0))
// console.log('z'.charCodeAt(0))
const getRandomChar = () => {
    let randomNumber = Math.floor(Math.random() * (122 - 97 + 1)) + 97
    return String.fromCharCode(randomNumber)
}

console.log(getRandomChar())