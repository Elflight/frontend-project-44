import readlineSync from 'readline-sync';

const runGame = (description, generateRound) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(description);

    const roundCount = 3;
    let successRounds = 0;

    for (let i = 0; i < roundCount; ++i) {
        const [gameQuestion, solution] = generateRound();
        const answer = readlineSync.question(`Question: ${gameQuestion}\nYour answer: `);

        if (Number(answer) === Number(solution)) {
            console.log('Correct!');
            ++successRounds;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'.`);
            break;
        }
    }

    if (successRounds == roundCount) {
        console.log(`Congratulations, ${userName}!`);
    } else {
        console.log(`Let's try again, ${userName}!`);
    }
}

export {runGame as default};