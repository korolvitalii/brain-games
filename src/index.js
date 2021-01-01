import readlineSync from 'readline-sync';

export default (game) => {
  const [description, getQuestionAndAnswer] = game();
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question(' What is your name: ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);
  const count = 3;
  for (let i = 0; i < count; i += 1) {
    const [makeQuestion, rigthAnswer] = getQuestionAndAnswer();
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
  console.log(`Congratulations, ${playerName}!`);
};
