# node-errno

An easier way to track errno's

This is mainly for use with [node-launchctl](http://github.com/evanlucas/node-launchctl)

## Install

    npm install syserrno


## API

### #strerror(errno)

Params:

- {Number} errno The error number

Example:

    var errno = require('errno')
    console.log(errno.strerror(148));
    // outputs "Invalid domain"

### #errorForCode(code)

Params:

- {String} code The error code

Example:

    var errno = require('errno')
    var err = errno.errorForCode('EIVALDO');
    console.log(err);

Returns: An Error object containing

    {
      code: 'EIVALDO',
      msg: 'Invalid domain',
      errno: 148
    }

### #errorForErrno(errno)

Params:

- {Number} errno The error number

