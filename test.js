#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const assert = require('assert')

const config = require('.')

assert.ok(config.rules)
