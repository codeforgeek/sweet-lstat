sweet-lstat
===========
An easier way to track LSTAT errors.

Install
--------------------
npm install slstat

API
--------------------------
- getErrorFromNum(errno)

Parameters:
{Number} errno The error number

Example: 

```javascript
var errdetail = require('slstat');
console.log(errdetail.getErrorFromNum(13).msg);
```

Output: "Permission is denied for one of the directories in the path."

- getErrorFromCode(code)

Parameter:

{String} The error code e.g 'ENOENT'

Example:
```javascript
var errdetail = require('slstat');
var err = errdetail.getErrorFromCode('ENOENT');
console.log(err);
```

Returns: An Error object containing
```json
{
  code: 'ENOENT',
  msg: 'A component of the path or prefix of path is not a directory.No such file or directory exists at this provided   path.',
  errno: 2
}
```

Usage
--------------------

You can use it in projects where logs are written and by using this package you can put error with description for understanding.
