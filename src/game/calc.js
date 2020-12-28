import generateRandom from '../utils.js';

const operators = ['+', '-', '*'];
const generateRandomOperator = operators[Math.floor(Math.random() * operators.length)];
const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};
const description = 'What is the result of the expression?';

const getQuestionAndAnswer () => {
  const num1 = generateRandom();
  const num2 = generateRandom();
  const operator = generateRandomOperator;
  const makeQuestion = `${num1}${operator}${num2}`;
  const rigthAnswer = calculate(num1, num2, operator);

  return [makeQuestion, rigthAnswer];
};

export default [description, getQuestionAndAnswer];