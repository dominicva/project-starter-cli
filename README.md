## Project template CLI tool

### Motivation

- Practice node basics
- Timesaver when setting up new projects

### Functionality

Right now can only

- Take user input for project name
- Create a new directory in the directory where I keep my code projects

To be added

- Build out folder structure to include things like:

  - src folder with html/css/js files populated with starter content
  - git init including .gitignore essentials
  - npm init with linting, bundler, testing, ..., dependencies and configs set up

- Provide different template options, eg:

  - Vanilla JS with parcel
  - Custom React
  - Front-end plus node server
  - ...

### Run on your local machine

It's not (yet) very useful... but to run on your machine you'd need to

1. Get the code
2. Run `npm install`
3. In **src/cli.js** change the MY_PROJECTS_FOLDER_PATH constant to point to the directory where you'd like to create the new project
