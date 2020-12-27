import startGame from '../index.js';
import generateRandom from '../utils';

const isEven = (num) => num % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const makeQuestion = generateRandom();
  console.log(makeQuestion);
  const rigthAnswer = isEven(makeQuestion) ? 'yes' : 'no';

  return { makeQuestion, rigthAnswer };
};

const startEvenGame = () => startGame(getQuestionAndAnswer, description);
export default startEvenGame;
