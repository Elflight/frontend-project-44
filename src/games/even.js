import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const run = () => {
    const generateRound = () => {
        const minValue = 1;
        const maxValue = 100;

        const question = getRandomNumber(minValue, maxValue);
        const solution = Number(question % 2 === 0) ? 'yes' : 'no';

        return [question, solution];
    }

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    runGame(description, generateRound);
}

export {run as default};