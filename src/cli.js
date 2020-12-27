import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('What is your name: ');
  console.log(`Hello ${name}, your Welcome!`);
};

export default welcome;
