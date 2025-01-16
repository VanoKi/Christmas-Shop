const generateLayout = () => {
  const app = document.querySelector('#app');
  const title = document.createElement('h1');
  title.textContent = 'Simon says:';
  app.appendChild(title);

  const controls = document.createElement('div');
  controls.id = 'controls';
  app.appendChild(controls);

  const startBtn = document.createElement('button');
  startBtn.id = 'start';
  startBtn.textContent = 'Start Game';
  controls.appendChild(startBtn);

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

  const roundSelect = document.createElement('select');
  roundSelect.name = 'round';
  roundSelect.id = 'rounds';

  const rounds = Array.from({length: 5}, (v, k) => k + 1);
  rounds.forEach((round) => {
    const option = document.createElement('option');
    option.value = round;
    option.textContent = `${round} round`;
    roundSelect.appendChild(option);
  })
  controls.appendChild(roundSelect);

  const sequenceParagraph = document.createElement('p');
  sequenceParagraph.id = 'sequence';
  app.appendChild(sequenceParagraph);

  const keyboardContainer = document.createElement('div');
  keyboardContainer.id = 'keyboard';
  app.appendChild(keyboardContainer);
}

export {generateLayout}