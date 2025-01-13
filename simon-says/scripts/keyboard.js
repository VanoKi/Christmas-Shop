const generateKeyboard = () => {
    const keys = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  const keyboardContainer = document.querySelector('#keyboard');
  keyboardContainer.innerHTML = '';
  keys.forEach((key) => {
      const button = document.createElement('button');
      button.textContent = key;
      button.dataset.key = key;
      button.addEventListener('click', () => {
          console.log(`${key}`)
      })
      keyboardContainer.appendChild(button)
  })
}

export {generateKeyboard}