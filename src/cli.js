'use strict';

const inquirer = require('inquirer');

const questions = require('./prompts');
const createProjectFolder = require('./createProjectFolder');

inquirer.prompt(questions).then((answers) => {
  const { projectName } = answers;

  createProjectFolder(projectName);
});
