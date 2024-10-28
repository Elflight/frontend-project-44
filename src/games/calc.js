import {runGame, getRandomNumber} from '../index.js';

const description = 'What is the result of the expression?';

const run = () => {
    const generateRound = () => {
        let solution = 0;
        const minValue = 1;
        const maxValue = 100;
        const actions = ['+', '-', '*'];

        const number1 = getRandomNumber(minValue, maxValue);
        const number2 = getRandomNumber(minValue, maxValue);
        const action = actions[getRandomNumber(0, actions.length-1)];

        switch (action) {
            case '+':
                solution = number1 + number2;
                break;
            case '-':
                solution = number1 - number2;
                break;
            case '*':
                solution = number1 * number2;
                break;
        }

        const question = `${number1} ${action} ${number2}`;

        return [question, solution];
    }

    runGame(description, generateRound);
}

export {run as default};