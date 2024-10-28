import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const run = () => {
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
    }

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const generateProgression = (startNumber, step, progressionLength) => {
        let arProgression = [];
        for (let i = 0; i < progressionLength; ++i) {
            arProgression.push(startNumber + i * step);
        }
    
        return arProgression;
    }

    runGame(description, generateRound);
}

export {run as default};