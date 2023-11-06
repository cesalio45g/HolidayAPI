const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  chromeWebSecurity: false,
  pageLoadTimeout: 10000,
  defaultCommandTimeout: 5000,
  numTestsKeptInMemory: 1,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  env: {
    ...process.env,
    HOLIDAY: "Halloween",
  },
  e2e: {
    baseUrl: "https://calendarific.com",
    viewportHeight: 720,
    viewportWidth: 1280,
    specPattern: "./cypress/e2e/**/*.cy.js",
    screenshotsFolder: "./cypress/screenshots",
    video: true,
    videoUploadOnPasses: false,
    videosFolder: "./cypress/videos",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
