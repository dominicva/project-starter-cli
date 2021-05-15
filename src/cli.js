'use strict';

require('dotenv').config();
const path = require('path');
const inquirer = require('inquirer');

const questions = require('./prompts');
const createFolder = require('./createFolder');
const progressBar = require('./progressBar');

const { MY_PROJECTS_FOLDER_PATH } = process.env;

inquirer.prompt(questions).then(async (answers) => {
  const { projectName } = answers;
  const projectRoot = path.join(MY_PROJECTS_FOLDER_PATH, projectName);

  await createFolder(MY_PROJECTS_FOLDER_PATH, projectName);
  await createFolder(projectRoot, 'src');
  progressBar(50, 15);
});
