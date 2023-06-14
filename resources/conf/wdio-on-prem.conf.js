var defaults = require("./wdio.conf.js");
var _ = require("lodash");

var overrides = {
  logLevel: "debug",
  specs: [
    '../../src/test/login.spec.js'
  ]
};

exports.config = _.defaultsDeep(overrides, defaults.config);
