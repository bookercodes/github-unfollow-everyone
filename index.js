'use strict';

var GitHub = require('github');
var async = require('async');

var github = new GitHub({
  version: '3.0.0'
});

function fetchAllFollowings(done) {
  (function fetch(page, result) {
    var PER_PAGE = 100;
    github.user.getFollowing({
      page: page,
      per_page: PER_PAGE
    }, function(error, users) {
      if (error) {
        done(error);
        return;
      }
      // aggregate followings
      result = result.concat(users);
      var next = users.length === PER_PAGE;
      if (next) {
        fetch(page + 1, result);
        return;
      }
      done(null, result);
    });
  })(1, []);
}

function unfollowEveryone(users, done) {
  async.each(
    users,
    function(user, done) {
      github.user.unFollowUser({
        user: user.login
      }, function(error, response) {
        done(error, response);
      });
    },
    done
  );
}

module.exports = function(username, password, done) {
  github.authenticate({
    type: 'basic',
    username: username,
    password: password
  });
  fetchAllFollowings(function(error, users) {
    if (error) {
      done(error);
      return;
    }
    unfollowEveryone(users, done);
  });
};
