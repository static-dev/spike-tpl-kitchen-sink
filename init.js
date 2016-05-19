exports.configure = [
  {
    name: 'name',
    message: 'What is the name of your project?'
  }, {
    name: 'description',
    message: 'Describe your project'
  }, {
    name: 'github_username',
    message: 'What is your github username?'
  }
]

// before hook
exports.before = function (utils) {
  console.log('fire off a message before everything begins')
}

// beforeRender hook
exports.beforeRender = function (utils, config) {
  // use this to update your `config` values before the EJS templates are processed
}

// after hook
exports.after = function (utils, config) {
  // do something after the template has been run
}
