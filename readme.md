#GitHub Unfollow Everyone

_What it says on the tin._

## Command-line Interface

Installation:

```
$ npm install --global github-unfollow-everyone
```

Usage:

```
$ github-unfollow-everyone <username> <password>
```

This module uses [Basic Authentication](https://developer.github.com/v3/auth/#basic-authentication), which requires that you enter your credentials. The beautiful thing about Node is that, you can look at the code to make sure nothing dubious is happening :wink:.

##  Application Programming Interface

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
