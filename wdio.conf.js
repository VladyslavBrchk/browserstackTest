exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'vladyslavshapova_eFvVCT',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'MzfZfCS4AxbC2fsPyvc8',
    
    updateJob: false,
    specs: [
      './test/specs/**.spec.js'
    ],
    exclude: [],
  
    capabilities: [{
      project: "First Webdriverio Android Project",
      build: 'Webdriverio Android',
      name: 'first_test',
      device: 'Google Pixel 3',
      os_version: "9.0",
      app: process.env.BROWSERSTACK_APP_ID || 'SampleApp',
      'browserstack.debug': true
    }],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
  };