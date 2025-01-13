const NumberSequence = Array.from({length: 10}, (v, k) => k)
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const getRandomChar = () => {
    let randomNumber = Math.floor(Math.random() * (122 - 97 + 1)) + 97
    return String.fromCharCode(randomNumber)
}

const getSequence = (level, round) => {
    const sequenceLength = +round * 2
    const sequence = Array.from({length:sequenceLength}, () => {
        if (level == 'easy') return getRandomNumber(1, 9)
        else if (level == 'medium') return getRandomChar()
        else if (level == 'hard') {
            return Math.random() < 0.5 ? getRandomNumber(1, 9) : getRandomChar()
        }
    })
    return sequence
}

// export {getSequence}

console.log(getSequence('hard', '5').join(''))