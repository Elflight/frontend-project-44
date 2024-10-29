import { runGame, getRandomNumber } from '../index.js';

const description = 'What number is missing in the progression?';

const run = () => {
  const generateProgression = (startNumber, step, progressionLength) => {
    let arProgression = [];
    for (let i = 0; i < progressionLength; i += 1) {
      arProgression.push(startNumber + i * step);
    }

    return arProgression;
  };

  const generateRound = () => {
    const progressionLength = 10;

    const minStartNumber = 1;
    const maxStartNumber = 20;
    const startNumber = getRandomNumber(minStartNumber, maxStartNumber);

    const minStep = 2;
    const maxStep = 10;
    const step = getRandomNumber(minStep, maxStep);

    const hiddenItemIndexMin = 0;
    const hiddenItemIndexMax = progressionLength - 1;
    const hiddenItemIndex = getRandomNumber(hiddenItemIndexMin, hiddenItemIndexMax);

    const arProgression = generateProgression(startNumber, step, progressionLength);

    const solution = arProgression[hiddenItemIndex];
    arProgression[hiddenItemIndex] = '..';

    const question = arProgression.join(' ');

    return [question, solution];
  };

  runGame(description, generateRound);
};

export default run;
