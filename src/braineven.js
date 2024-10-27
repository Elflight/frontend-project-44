import readlineSync from 'readline-sync';

const brainEvenGame = (userName) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const minValue = 1;
    const maxValue = 20;
    const roundCount = 3;
    let successRounds = 0;

    for (let i = 0; i < roundCount; ++i) {
        const question = getRandomNumber(minValue, maxValue);
        const solution = getSolution(question);
        const answer = readlineSync.question(`Question: ${question}\nYour answer: `);

        if (answer === solution) {
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

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const getSolution = (question) => {
    return Number(question % 2 === 0) ? 'yes' : 'no';
}

export {brainEvenGame as default};