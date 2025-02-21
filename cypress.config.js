const { defineConfig } = require("cypress");

module.exports = defineConfig({

 env:{
    url: 'https://rahulshettyacademy.com/angularAppdemo/',
    grep: '', // Default empty, can be overridden via CLI
    grepTags: '', // For filtering tests by @tag
    grepFilterSpecs: true, // Runs only matching spec files
  },

  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 4000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require('cypress-grep/src/plugin')(on, config);
      return config;
     
    },
  },


});




