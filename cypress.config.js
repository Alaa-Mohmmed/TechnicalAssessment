
const { defineConfig } = require('cypress')

module.exports = defineConfig({

  'cypress-cucumber-preprocessor': {

    nonGlobalStepDefinitions: false,

    stepDefinitions: 'cypress/integrations/*/*',

  },
  e2e: {

    setupNodeEvents(on, config) {
 
      return require('./cypress/plugins/index.js')(on, config)

    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',

    specPattern: 'cypress/integration/**/*.feature',

    supportFile:false

  },
  env: {
    TAGS: '@testing'    
  },

})

