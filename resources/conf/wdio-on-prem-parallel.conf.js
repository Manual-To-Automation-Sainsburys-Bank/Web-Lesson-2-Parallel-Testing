var defaults = require("./wdio.conf.js");
var _ = require("lodash");

var overrides = {
  logLevel: "debug",
  specs: [
    '../../src/test/login.spec.js'
  ],

  services: [
    [
        'geckodriver',
        // service options
        {
            // The path where the output of the Geckodriver server should
            // be stored (uses the config.outputDir by default when not set).
            outputDir: './logs',

            // pass in custom options for Geckodriver, for more information see
            // https://github.com/webdriverio-community/node-geckodriver#options
            geckodriverOptions: {
                log: 'debug' // set log level of driver
            }
        }
    ]
],

  capabilities: [{
    browserName: 'firefox'
}, {
    // maxInstances can get overwritten per capability. So if you have an in-house WebDriver
    // grid with only 5 firefox instance available you can make sure that not more than
    // 5 instance gets started at a time.
    browserName: 'chrome'
}],
};

exports.config = _.defaultsDeep(overrides, defaults.config);
