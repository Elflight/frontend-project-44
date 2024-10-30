import readlineSync from 'readline-sync';

const runGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {
    const [gameQuestion, solution] = generateRound();
    const answer = readlineSync.question(`Question: ${gameQuestion}\nYour answer: `);

    if (String(answer) === String(solution)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
