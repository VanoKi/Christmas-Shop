function generateGameUI() {
    const app = document.querySelector('#app'); // Контейнер для игры
    app.innerHTML = ''; // Очищаем контейнер

    // Заголовок
    const title = document.createElement('h1');
    title.textContent = 'Simon says:';
    app.appendChild(title);

    // Контейнер управления
    const controls = document.createElement('div');
    controls.id = 'controls';
    app.appendChild(controls);

    // Кнопка старта
    const startButton = document.createElement('button');
    startButton.id = 'start';
    startButton.textContent = 'Start Game';
    controls.appendChild(startButton);

    // Селектор уровня
    const levelSelect = document.createElement('select');
    levelSelect.name = 'level';
    levelSelect.id = 'levels';

    const levels = ['easy', 'medium', 'hard'];
    levels.forEach((level) => {
        const option = document.createElement('option');
        option.value = level;
        option.textContent = level;
        levelSelect.appendChild(option);
    });
    controls.appendChild(levelSelect);

    // Селектор раундов
    const roundSelect = document.createElement('select');
    roundSelect.name = 'round';
    roundSelect.id = 'rounds';

    const rounds = ['1', '2', '3', '4', '5'];
    rounds.forEach((round) => {
        const option = document.createElement('option');
        option.value = round;
        option.textContent = `${round} round`;
        roundSelect.appendChild(option);
    });
    controls.appendChild(roundSelect);

    // Элемент для отображения последовательности
    const sequenceParagraph = document.createElement('p');
    sequenceParagraph.id = 'sequence';
    app.appendChild(sequenceParagraph);

    // Контейнер для клавиатуры
    const keyboardContainer = document.createElement('div');
    keyboardContainer.id = 'keyboard';
    app.appendChild(keyboardContainer);
}

// Вызываем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    generateGameUI();
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
            console.log('victory!');
            return true;
        }
        return null;
    }

    function generateSequence(level, round) {
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        const letters = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z'
        ];

        let pool = [];
        if (level === 'easy') {
            pool = numbers;
        } else if (level === 'medium') {
            pool = letters;
        } else if (level === 'hard') {
            pool = [...numbers, ...letters];
        }

        const length = round * 2;
        return Array.from({ length }, () => pool[Math.floor(Math.random() * pool.length)]);
    }

    const generateKeyboard = (level) => {
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        const letters = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z'
        ];

        let pool = [];
        if (level === 'easy') {
            pool = numbers;
        } else if (level === 'medium') {
            pool = letters;
        } else if (level === 'hard') {
            pool = [...numbers, ...letters];
        }

        const keyboardContainer = document.querySelector('#keyboard');
        keyboardContainer.innerHTML = '';

        pool.forEach((key) => {
            const button = document.createElement('button');
            button.textContent = key;
            button.dataset.key = key;
            button.addEventListener('click', () => {
                userInput.push(key);
                console.log(`You pressed: ${key}`);
                const result = checkInput();
                if (result === true) {
                    console.log('Victory!');
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
});

