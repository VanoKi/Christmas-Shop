const generateKeyboard = () => {
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
          console.log(`${key}`)
      })
      keyboardContainer.appendChild(button)
  })
}

export {generateKeyboard}