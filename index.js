/* global module, require */
'use strict';
var fs = require('fs');

module.exports = {
  name: 'ember-cli-app-version',
  config: function(env, baseConfig) {
    var config = this._super.config.apply(this, arguments);

    var version = require('git-repo-version')(7, this.project.root) || (process.env.SOURCE_VERSION || '').slice(0, 7);
    if (version && baseConfig.APP) {
      baseConfig.APP.name = this.project.pkg.name;
      baseConfig.APP.version = version;
    }

    return config;
  }
};
