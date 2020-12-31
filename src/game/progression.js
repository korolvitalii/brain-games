import random from '../utils.js';

const makeQuestionSymbols = (num, k) => {
  const result = [];
  for (let i = num; i <= num + (k * 10); i += k) {
    result.push(i);
  }
  return result;
};

const description = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  const questionSymbols = makeQuestionSymbols(random(), random(2, 4));
  const secretSymbol = random(1, 10);
  const makeQuestionWithSecretSymbol = (array) => array.reduce((acc, elem, index) => {
    if (index === secretSymbol) {
      acc.push('..');
    } else {
      acc.push(elem);
    }
    return acc;
  }, []);
  const makeQuestion = makeQuestionWithSecretSymbol(questionSymbols).join(' ');
  const rigthAnswer = questionSymbols[secretSymbol].toString();

  return [makeQuestion, rigthAnswer];
};

export default () => [description, getQuestionAndAnswer];
