import { runGame, getRandomNumber } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const run = () => {
  const generateRound = () => {
    const minNumber = 2;
    const maxNumber = 1000;
    const question = getRandomNumber(minNumber, maxNumber);

    const solution = isPrime(question) ? 'yes' : 'no';

    return [question, solution];
  };

  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(num); ++i) {
      if (num % i == 0) {
        return false;
      }
    }

    return true;
  };

  runGame(description, generateRound);
}

export { run as default };
