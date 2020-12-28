import generateRandom from '../utils.js';

const isEven = (num) => num % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const makeQuestion = generateRandom();
  const rigthAnswer = isEven(makeQuestion) ? 'yes' : 'no';

  return [makeQuestion, rigthAnswer];
};

export default () => [description, getQuestionAndAnswer];
