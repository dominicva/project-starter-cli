const ProgressBar = require('progress');

const progressBar = function (size, intervalDuration) {
  const bar = new ProgressBar(':bar', { total: size });
  const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
      clearInterval(timer);
    }
  }, intervalDuration);
};

module.exports = progressBar;
