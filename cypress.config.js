
const { defineConfig } = require('cypress')

module.exports = defineConfig({

  'cypress-cucumber-preprocessor': {

    nonGlobalStepDefinitions: true,
    stepDefinitions: 'cypress/integration',
    waitForAnimations: false,
    animationDistanceThreshold: 50,  },
  e2e: {

    setupNodeEvents(on, config) {

      return require('./cypress/plugins/index.js')(on, config)

    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',

    specPattern: 'cypress/integration/**/*.feature',

    supportFile: "cypress/support/e2e.js",
  },
  env: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    TAGS: '@testing'
  },


})

