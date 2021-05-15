'use strict';

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const progressBar = require('./progressBar');

const { MY_PROJECTS_FOLDER_PATH } = process.env;

const createProjectFolder = function (project) {
  fs.mkdir(path.join(MY_PROJECTS_FOLDER_PATH, project), (err) => {
    if (err) console.error(err);
    console.log(`Setting up ${chalk.yellow(project)} for you...`);
    progressBar(20, 40);
  });
};

module.exports = createProjectFolder;
