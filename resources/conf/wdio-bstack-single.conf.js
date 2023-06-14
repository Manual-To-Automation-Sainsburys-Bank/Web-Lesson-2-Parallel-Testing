var defaults = require("./wdio.conf.js");
var _ = require("lodash");

var overrides = {
  user: process.env.BROWSERSTACK_USERNAME || 'garybehan_phbeWu',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'GkgLZSk6qKLNrBjcZChb',
  specs: [
    '../../src/test/login.spec.js'
  ],
  services: [['browserstack']],
  capabilities: [{
    maxInstances: 1,
    'browserstack.maskCommands':'setValues, getValues, setCookies, getCookies',
    'browserstack.debug': true,
    'browserstack.video': true,
    'browserstack.networkLogs': true,
    os: "OS X",
    os_version: "Catalina",
    browserName: 'Chrome',
    browser_version: "latest",
    acceptInsecureCerts: true,
    // name: (require('minimist')(process.argv.slice(2)))['bstack-session-name'] || 'default_name', //To set a custom test name
    build: process.env.BROWSERSTACK_BUILD_NAME || 'browserstack-examples-webdriverio' + " - " + new Date().getTime()
  }],
};

exports.config = _.defaultsDeep(overrides, defaults.config);
