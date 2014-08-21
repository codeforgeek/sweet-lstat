sweet-lstat
===========
An easier way to track LSTAT errors.

#Install
npm install slstat

#API
getErrorFromNum(errno)

Parameters:
{Number} errno The error number

Example: 

<code>
var errdetail = require('slstat');\n
console.log(errdetail.getErrorFromNum(13).msg);\n
</code>

Output: "Permission is denied for one of the directories in the path."

getErrorFromCode(code)

Parameter:

{String} The error code e.g 'ENOENT'

Example:
<code>
var errdetail = require('slstat');
var err = errdetail.getErrorFromCode('ENOENT');
console.log(err);
</code>

Returns: An Error object containing
<code>
{
  code: 'ENOENT',
  msg: 'A component of the path or prefix of path is not a directory.No such file or directory exists at this provided   path.',
  errno: 2
}
</code>

#Usage

You can use it in projects where logs are written and by using this package you can put error with description for understanding.
