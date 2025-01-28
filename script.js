const gridSize = 10
const nonogram = document.getElementById('nonogram')

const createBoard = () => {
    nonogram.innerHTML = ''
    for (let i = 0; i <gridSize * gridSize ; i++) {
        const cell = document.createElement('div');
        cell.classList.add('ceil');
        cell.addEventListener('click', () => {
            if (!cell.classList.contains('hint')) {
                cell.classList.toggle('filled')
            }
        })
        nonogram.appendChild(cell)
    }
}

const resetGame = () => {
  document.querySelectorAll('.cell').forEach(cell => {
      cell.classList.remove('filled')
  })
}

createBoard()