const solution = [
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1, 0, 0, 1, 0, 0],
]
const gridSize = solution.length
const nonogram = document.getElementById('nonogram')
const rowHints = document.getElementById('row-hints')
const columnHints = document.getElementById('column-hints')

const generateHints = () => {
  rowHints.innerHTML = '';
  columnHints.innerHTML = '';

  solution.forEach(row => {
      const hint = document.createElement('div')
      hint.classList.add('hint-cell');
      hint.textContent = row
          .join('')
          .split('0')
          .filter(group => group)
          .map(group => group.length)
          .join(' ')
      rowHints.appendChild(hint)
  });

    for (let col = 0; col < gridSize; col++) {
        let columnData = solution.map(row => row[col]);
        const hint = document.createElement('div');
        hint.classList.add('hint-cell');
        hint.textContent = columnData
            .join('')
            .split('0')
            .filter(group => group)
            .map(group => group.length)
            .join(' ')
        columnHints.appendChild(hint)
    }

}

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

const checkSolution = () => {
  const cells = document.querySelectorAll('.cell');
  let correct = true;

  cells.forEach((cell, index) => {
      const row = Math.floor(index / gridSize);
      const col = index % gridSize;
      const isFilled = cell.classList.contains('filled');
      if ((solution[row][col] === 1 && !isFilled) || (solution[row][col] === 0 && isFilled)) {
          correct = false;
          cell.style.backgroundColor = 'red';
      } else {
          cell.style.backgroundColor = solution[row][col] === 1 ? '#333' : '#fff';
      }
      if (correct) {
          alert('Congratulations! You solved the puzzle!');
      } else {
          alert('Some cells are incorrect. Try again!');
      }
  });
    if (correct) {
        alert('Congratulations! You solved the puzzle!');
    } else {
        alert('Some cells are incorrect. Try again!');
    }
}

createBoard()
generateHints()