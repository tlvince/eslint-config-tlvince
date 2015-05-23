'use strict';

var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');

var config = path.join(__dirname, 'eslintrc.yml');

module.exports = yaml.safeLoad(fs.readFileSync(config, 'utf-8'));
