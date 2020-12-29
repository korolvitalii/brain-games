import readlineSync from 'readline-sync';

export default (game) => {
  const [description, getQuestionAndAnswer] = game();
  const playerName = readlineSync.question('What is your name: ');
  console.log('Welcome to the Brain Games!');
  console.log(`Hello ${playerName}, you Welcome!`);
  console.log(description);
  const count = 3;
  for (let i = 0; i < count; i += 1) {
    const [makeQuestion, rigthAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${makeQuestion}`);
    const answer = readlineSync.question('Your answer:');
    console.log(`answer!!!!!!${typeof answer}!!!!!!`);
    console.log(`rigthAnswer!!!!!!${typeof rigthAnswer}!!!!!!`);
    // console.log(answer === rigthAnswer);
    if (answer === rigthAnswer) {
      console.log('Correct!!!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulation ${playerName}. You Win!`);
};
