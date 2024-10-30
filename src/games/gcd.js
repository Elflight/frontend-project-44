import runGame from '../index.js';
import getRandomNumber from '../randomizer.js';

const description = 'Find the greatest common divisor of given numbers.';

const runGcdGame = () => {
  const findGcd = (a, b) => ((a % b) ? findGcd(b, a % b) : b);

  const generateRound = () => {
    const minValue = 1;
    const maxValue = 100;

    const number1 = getRandomNumber(minValue, maxValue);
    const number2 = getRandomNumber(minValue, maxValue);

    const question = `${number1} ${number2}`;
    const solution = findGcd(number1, number2);

    return [question, solution];
  };

  runGame(description, generateRound);
};

export default runGcdGame;
