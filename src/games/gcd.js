import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const run = () => {
    const generateRound = () => {
        const minValue = 1;
        const maxValue = 100;

        const number1 = getRandomNumber(minValue, maxValue);
        const number2 = getRandomNumber(minValue, maxValue);

        const question = `${number1} ${number2}`;
        const solution = findGcd(number1, number2);

        return [question, solution];
    }

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const findGcd = (a, b) => {
        return (a % b) ? findGcd(b, a % b) : b;
    }

    runGame(description, generateRound);
}

export {run as default};