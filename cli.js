#!/usr/bin/env node

'use strict';

var meow = require('meow');
var unfollowEveryone = require('./');

var cli = meow();

var username = cli.input[0];
var password = cli.input[1];

unfollowEveryone(username, password, function(error) {
  if (error) {
    console.log('oops. an error occured:', error);
    return;
  }
  console.log('done.');
});
