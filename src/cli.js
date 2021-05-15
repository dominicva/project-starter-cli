#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const inquirer = require('inquirer');
// const { program } = require('commander');
// program.version('0.0.1');
// const args = require('minimist')(process.argv.slice(2));
// const [projectName] = args;
// console.log(chalk.yellow(args['projectName']));
// console.log('args', );
const progressBar = require('./progressBar');

const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What would you like to call your project?',
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(`Setting up ${chalk.yellow(answers['projectName'])} for you...`);
  progressBar(20, 100);
});
