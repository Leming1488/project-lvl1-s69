import readlineSync from 'readline-sync';

const GAME_COUNT = 3;

const welcomeUser = (description = '') => {
  console.log(`Welcome to Brain Games!
${description}`);
  console.log('');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  return userName;
};

const startGames = (description, expression, calculate) => {
  const userName = welcomeUser(description);

  const createQuestion = (counter = GAME_COUNT) => {
    if (counter === 0) {
      return console.log(`Congratulation, ${userName}!`);
    }
    const question = expression();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = `${calculate(question)}`;

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return createQuestion(counter - 1);
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
  };

  createQuestion();
};

export default startGames;
