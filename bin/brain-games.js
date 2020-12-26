#!/usr/bin/env node
// import { ESLint } from 'eslint';
import readlineSync from 'readline-sync';
import welcomeText from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('What is your name: ');
welcomeText(name);
