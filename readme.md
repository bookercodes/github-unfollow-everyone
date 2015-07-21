![](https://d13yacurqjgara.cloudfront.net/users/2014/screenshots/1095158/attachments/137262/octocat.svg)

#GitHub Unfollow Everyone

:fallen_leaf: _Start anew. Unfollow everyone who you currently follow on GitHub._

##CLI

```
$ npm install --global github-unfollow-everyone
```
```
$ github-unfollow-everyone <username> <password>
```

_:warning: Running this command will **irreversibly** unfollow everyone who you currently follow!_

##API

```
$ npm install --save github-unfollow-everyone
```

```javascript
var unfollowEveryone = require('github-unfollow-everyone');

unfollowEveryone('<username>', '<password>', function(error) {
  if (error) {
    console.log('oops. an error occurred:', error);
    return;
  }
  console.log('done.');
});
```

##Related

- [`github-unstar-all`](https://github.com/alexbooker/github-unstar-all)
