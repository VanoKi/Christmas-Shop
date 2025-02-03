const solution = [
    [0, 1, 1, 0, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0]
]

const gridColumns = solution.length
const gridRows = solution[0].length
console.log(solution)
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

    for (let col = 0; col < gridColumns; col++) {
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

const createBoard = (rows, columns) => {
    nonogram.innerHTML = ''
    document.documentElement.style.setProperty('--grid-rows', rows);
    document.documentElement.style.setProperty('--grid-columns', columns);
    for (let i = 0; i <columns * rows ; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
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
      const row = Math.floor(index / gridColumns);
      const col = index % gridColumns;
      const isFilled = cell.classList.contains('filled');
      if ((solution[row][col] === 1 && !isFilled) || (solution[row][col] === 0 && isFilled)) {
          correct = false;
          cell.style.backgroundColor = 'red';
      } else {
          cell.style.backgroundColor = solution[row][col] === 1 ? '#333' : '#fff';
      }
  });
    if (correct) {
        alert("Great! You have solved the nonogram!");
    } else {
        alert('Some cells are incorrect. Try again!');
    }
}

createBoard(gridRows, gridColumns)
generateHints()

const btnReset = document.querySelector('.reset')
const btnCheck = document.querySelector('.check')

btnReset.addEventListener('click', resetGame)
btnCheck.addEventListener('click', checkSolution)


