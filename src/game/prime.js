import generateRandom from '../utils.js';

const isPrime = (number) => {
  const result = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  const predicate = result.length === 2 ? 'yes' : 'no';
  return predicate;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const makeQuestion = generateRandom();
  const rigthAnswer = isPrime(makeQuestion);
  const makeQuestionToString = makeQuestion.toString();
  const rigthAnswerToString = rigthAnswer.toString();

  return [makeQuestionToString, rigthAnswerToString];
};

export default () => [description, getQuestionAndAnswer];
