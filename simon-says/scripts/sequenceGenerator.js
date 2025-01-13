const NumberSequence = Array.from({length: 10}, (v, k) => k)
const getRandomNumber = () => Math.floor(Math.random() * NumberSequence.length)
const getRandomChar = () => {
    let randomNumber = Math.floor(Math.random() * (122 - 97 + 1)) + 97
    return String.fromCharCode(randomNumber)
}

export {getRandomChar, getRandomNumber}

// console.log(getRandomChar())