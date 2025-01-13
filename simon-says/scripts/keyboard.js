const generateKeyboard = (level) => {
    const keys = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let selectedKeys = [];
    if (level === 'easy') {
        selectedKeys = numbers; // Только цифры
    } else if (level === 'medium') {
        selectedKeys = keys; // Только буквы
    } else if (level === 'hard') {
        selectedKeys = [...numbers, ...keys]; // Цифры + буквы
    }

    const keyboardContainer = document.querySelector('#keyboard');
    keyboardContainer.innerHTML = ''; // Очистка контейнера перед новой генерацией

    selectedKeys.forEach((key) => {
        const button = document.createElement('button');
        button.textContent = key;
        button.dataset.key = key;
        button.addEventListener('click', () => {
            console.log(`you press: ${key}`);
        });
        keyboardContainer.appendChild(button);
    });
};

export { generateKeyboard };