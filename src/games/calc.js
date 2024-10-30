import runGame from '../index.js';
import getRandomNumber from '../randomizer.js';

const description = 'What is the result of the expression?';

const calculate = (operand1, operand2, operation) => {
  let solution;
  switch (operation) {
    case '+':
      solution = operand1 + operand2;
      break;
    case '-':
      solution = operand1 - operand2;
      break;
    case '*':
      solution = operand1 * operand2;
      break;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
  return solution;
};

const runCalcGame = () => {
  const generateRound = () => {
    let solution = 0;
    const minValue = 1;
    const maxValue = 100;
    const actions = ['+', '-', '*'];

    const number1 = getRandomNumber(minValue, maxValue);
    const number2 = getRandomNumber(minValue, maxValue);
    const action = actions[getRandomNumber(0, actions.length - 1)];
    solution = calculate(number1, number2, action);

    const question = `${number1} ${action} ${number2}`;

    return [question, solution];
  };

  runGame(description, generateRound);
};

export default runCalcGame;
