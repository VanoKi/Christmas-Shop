export const createHTML = () => {
  const body = document.body
  const gameContainer = document.createElement('div')
  gameContainer.classList.add('game-container')
  body.appendChild(gameContainer)


  const nonogramContainer = document.createElement('div')
  nonogramContainer.classList.add('nonogram-container')
  gameContainer.appendChild(nonogramContainer)
  
  const rowHints = document.createElement('div')
  rowHints.id = 'row-hints'
  rowHints.classList.add('row-hints')
  nonogramContainer.appendChild(rowHints)


  const columnHints = document.createElement('div')
  columnHints.id = 'column-hints'
  columnHints.classList.add('column-hints')
  nonogramContainer.appendChild(columnHints)

  const nonogram = document.createElement('div')
  nonogram.id = 'nonogram'
  nonogram.classList.add('nonogram')
  nonogramContainer.appendChild(nonogram)

  const controls = document.createElement('div')
  controls.classList.add('controls')
  body.appendChild(controls)
  // gameContainer.appendChild(controls)

  const resetButton = document.createElement('button')
  resetButton.classList.add('reset')
  resetButton.textContent = 'Reset'
  controls.appendChild(resetButton)

  const checkButton = document.createElement('button')
  checkButton.classList.add('check')
  checkButton.textContent = 'Check'
  controls.appendChild(checkButton)
}

export default createHTML
