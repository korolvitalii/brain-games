import startGame from '../index.js';
import generateRandom from '../utils';

const isEven = (num) => num % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const makeQuestion = generateRandom();
  const rigthAnswer = isEven(makeQuestion) ? 'yes' : 'no';

  return { makeQuestion, rigthAnswer };
};

export default () => startGame(getQuestionAndAnswer, description);
