import generateRandom from '../utils.js';

const nod = (num1, num2) => {
  const minNum = (num1 < num2) ? num1 : num2;
  let result = 0;
  for (let i = minNum; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
      return result;
    }
  }
  return result;
};

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const makeQuestion = [generateRandom(), generateRandom()];
  const makeQuestionToString = makeQuestion.join(' ');
  const rigthAnswer = nod(makeQuestion[0], makeQuestion[1]);
  const rigthAnswerToString = rigthAnswer.toString();

  return [makeQuestionToString, rigthAnswerToString];
};

export default () => [description, getQuestionAndAnswer];
