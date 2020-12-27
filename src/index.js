import readlineSync from 'readline-sync';

const startGame = (getQuestionAndAnswer, description) => {
  const playerName = readlineSync.question('What is your name: ');
  console.log(`Hello ${playerName}, you Welcome!`);
  console.log(description);
  const count = 3;
  for (let i = 0; i <= count; i += 1) {
    const { makeQuestion, rigthAnswer } = getQuestionAndAnswer();
    console.log(`Question: ${makeQuestion}`);
    const answer = readlineSync.question('Your answer:');
    if (answer === rigthAnswer) {
      console.log('Correct!!!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulation${playerName}. You Win!`);
};

export default startGame;
