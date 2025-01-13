let userInput = [];
let sequence = [];

function checkInput() {
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] !== sequence[i]) {
            console.log('error');
            return false;
        }
    }

    if (userInput.length === sequence.length) {
        console.log('you won!');
        return true;
    }
    return null;
}

function generateSequence(level, round) {
    const length = round * 2;
    const getRandomChar = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65); // A-Z
    return Array.from({ length }, getRandomChar);
}

const generateKeyboard = (level) => {
    const keys = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    const keyboardContainer = document.querySelector('#keyboard');
    keyboardContainer.innerHTML = '';

    keys.forEach((key) => {
        const button = document.createElement('button');
        button.textContent = key;
        button.dataset.key = key;
        button.addEventListener('click', () => {
            userInput.push(key);
            console.log(`You press: ${key}`);
            const result = checkInput();
            if (result === true) {
                console.log('round end!');
            } else if (result === false) {
                userInput = [];
                console.log('try again!');
            }
        });
        keyboardContainer.appendChild(button);
    });
};

document.querySelector('#start').addEventListener('click', () => {
    const level = document.querySelector('#levels').value;
    const round = +document.querySelector('#rounds').value;

    sequence = generateSequence(level, round);
    userInput = [];
    console.log(`sequence: ${sequence}`);
    generateKeyboard(level);
});