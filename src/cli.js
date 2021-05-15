#!/usr/bin/env node

'use strict';

require('dotenv').config();
const fs = require('fs');
const path = require('path');

const chalk = require('chalk');
const inquirer = require('inquirer');
const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');

// const args = require('minimist')(process.argv.slice(2));
// const [projectName] = args;
// console.log(chalk.yellow(args['projectName']));
// console.log('args', );
const progressBar = require('./progressBar');

const MY_PROJECTS_DIR_PATH = process.env.MY_PROJECTS_FOLDER_PATH;

const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What would you like to call your project?',
  },
];

const createProjectFolder = function (project) {
  fs.mkdir(path.join(MY_PROJECTS_DIR_PATH, project), (err) => {
    if (err) console.error(err);
    console.log(`Setting up ${chalk.yellow(project)} for you...`);
    progressBar(20, 40);
  });
};

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
