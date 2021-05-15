'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const createFolder = function (root, folderName) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path.join(root, folderName), (err) => {
      if (err) reject(err);

      console.log(
        `Creating ${chalk.yellow(folderName)} folder in ...${root.slice(-30)}`
      );
      resolve();
    });
  });
};

module.exports = createFolder;
