import runGame from '../index.js';
import getRandomNumber from '../randomizer.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const runEvenGame = () => {
  const generateRound = () => {
    const minValue = 1;
    const maxValue = 100;

    const question = getRandomNumber(minValue, maxValue);
    const solution = isEven(question) ? 'yes' : 'no';

    return [question, solution];
  };

  runGame(description, generateRound);
};

export default runEvenGame;
