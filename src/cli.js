#!/usr/bin/env node

'use strict';

// const fs = require('fs');
// const path = require('path');
// const chalk = require('chalk');
const inquirer = require('inquirer');
const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');

const createProjectFolder = require('./createProjectFolder');

// const args = require('minimist')(process.argv.slice(2));
// const [projectName] = args;

const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What would you like to call your project?',
  },
];

inquirer.prompt(questions).then((answers) => {
  const projectName = answers['projectName'];

  createProjectFolder(projectName);
});

// fs.appendFile(path.join(__dirname, 'hello.txt'), 'hello world', (err) => {
//   if (err) console.error(err);
// });

// fs.writeFile(
//   path.join(__dirname, 'hello.txt'),
//   content,
//   { flag: 'a+' },
//   (err) => {
//     if (err) console.error(err);
//   }
// );
