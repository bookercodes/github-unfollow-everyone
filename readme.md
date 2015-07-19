#GitHub Unfollow Everyone

_Start fresh. Unfollow everyone who you currently follow on GitHub._

## Command-line Interface

Installation:

```
npm install --global github-unfollow-everyone
```

Usage:

```
github-unfollow-everyone <username> <password>
```

This module uses [_basic Authentication_](https://developer.github.com/v3/auth/#basic-authentication), which requires that you enter your credentials. The beautiful thing about Node is that, you can look at the code to make sure nothing dubious is happening :wink:.

##  Application Programming Interface

Installation:

```
npm install --save github-unfollow-everyone
```

Usage:

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
