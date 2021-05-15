'use strict';

const inquirer = require('inquirer');
const createProjectFolder = require('./createProjectFolder');

const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What would you like to call your project?',
  },
];

inquirer.prompt(questions).then((answers) => {
  const { projectName } = answers;

  createProjectFolder(projectName);
});
