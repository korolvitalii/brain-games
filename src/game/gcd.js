import generateRandom from '../utils.js';

const findGcd = (number1, number2) => {
  if (number2) { return findGcd(number2, number1 % number2); }
  return number1;
};

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const makeQuestion = [generateRandom(), generateRandom()];
  const makeQuestionToString = makeQuestion.join(' ');
  const rigthAnswer = findGcd(makeQuestion[0], makeQuestion[1]);
  const rigthAnswerToString = rigthAnswer.toString();

  return [makeQuestionToString, rigthAnswerToString];
};

export default () => [description, getQuestionAndAnswer];
