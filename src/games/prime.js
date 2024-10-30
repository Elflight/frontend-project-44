import runGame from '../index.js';
import getRandomNumber from '../randomizer.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrimeGame = () => {
  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  const generateRound = () => {
    const minNumber = 2;
    const maxNumber = 1000;
    const question = getRandomNumber(minNumber, maxNumber);

    const solution = isPrime(question) ? 'yes' : 'no';

    return [question, solution];
  };

  runGame(description, generateRound);
};

export default runPrimeGame;
