var should = require('should')
  , Errno = require('./lib')
  , errorCode = Errno.errorForCode
  , strerror = Errno.strerror
  , errorNum = Errno.errorForErrno;

describe('Errors', function(){
  var testError = function(code, errno) {
    var e = errorCode(code);
    e.should.have.property('errno', errno);
    var ex = errorNum(errno);
    ex.should.have.property('code', code);
  }
  it('should recognize EPERM', function() {
  	testError('EPERM', 1);
  });
  it('should recognize ENOENT', function() {
  	testError('ENOENT', 2);
  });
  it('should recognize ESRCH', function() {
  	testError('ESRCH', 3);
  });
  it('should recognize EINTR', function() {
  	testError('EINTR', 4);
  });
  it('should recognize EIO', function() {
  	testError('EIO', 5);
  });
  it('should recognize ENXIO', function() {
  	testError('ENXIO', 6);
  });
  it('should recognize E2BIG', function() {
  	testError('E2BIG', 7);
  });
  it('should recognize ENOEXEC', function() {
  	testError('ENOEXEC', 8);
  });
  it('should recognize EBADF', function() {
  	testError('EBADF', 9);
  });
  it('should recognize ECHILD', function() {
  	testError('ECHILD', 10);
  });
  it('should recognize EDEADLK', function() {
  	testError('EDEADLK', 11);
  });
  it('should recognize ENOMEM', function() {
  	testError('ENOMEM', 12);
  });
  it('should recognize EACCES', function() {
  	testError('EACCES', 13);
  });
  it('should recognize EFAULT', function() {
  	testError('EFAULT', 14);
  });
  it('should recognize ENOTBLK', function() {
  	testError('ENOTBLK', 15);
  });
  it('should recognize EBUSY', function() {
  	testError('EBUSY', 16);
  });
  it('should recognize EEXIST', function() {
  	testError('EEXIST', 17);
  });
  it('should recognize EXDEV', function() {
  	testError('EXDEV', 18);
  });
  it('should recognize ENODEV', function() {
  	testError('ENODEV', 19);
  });
  it('should recognize ENOTDIR', function() {
  	testError('ENOTDIR', 20);
  });
  it('should recognize EISDIR', function() {
  	testError('EISDIR', 21);
  });
  it('should recognize EINVAL', function() {
  	testError('EINVAL', 22);
  });
  it('should recognize ENFILE', function() {
  	testError('ENFILE', 23);
  });
  it('should recognize EMFILE', function() {
  	testError('EMFILE', 24);
  });
  it('should recognize ENOTTY', function() {
  	testError('ENOTTY', 25);
  });
  it('should recognize ETXTBSY', function() {
  	testError('ETXTBSY', 26);
  });
  it('should recognize EFBIG', function() {
  	testError('EFBIG', 27);
  });
  it('should recognize ENOSPC', function() {
  	testError('ENOSPC', 28);
  });
  it('should recognize ESPIPE', function() {
  	testError('ESPIPE', 29);
  });
  it('should recognize EROFS', function() {
  	testError('EROFS', 30);
  });
  it('should recognize EMLINK', function() {
  	testError('EMLINK', 31);
  });
  it('should recognize EPIPE', function() {
  	testError('EPIPE', 32);
  });
  it('should recognize EDOM', function() {
  	testError('EDOM', 33);
  });
  it('should recognize ERANGE', function() {
  	testError('ERANGE', 34);
  });
  it('should recognize EAGAIN', function() {
  	testError('EAGAIN', 35);
  });
  it('should recognize EINPROGRESS', function() {
  	testError('EINPROGRESS', 36);
  });
  it('should recognize EALREADY', function() {
  	testError('EALREADY', 37);
  });
  it('should recognize ENOTSOCK', function() {
  	testError('ENOTSOCK', 38);
  });
  it('should recognize EDESTADDRREQ', function() {
  	testError('EDESTADDRREQ', 39);
  });
  it('should recognize EMSGSIZE', function() {
  	testError('EMSGSIZE', 40);
  });
  it('should recognize EPROTOTYPE', function() {
  	testError('EPROTOTYPE', 41);
  });
  it('should recognize ENOPROTOOPT', function() {
  	testError('ENOPROTOOPT', 42);
  });
  it('should recognize EPROTONOSUPPORT', function() {
  	testError('EPROTONOSUPPORT', 43);
  });
  it('should recognize ESOCKTNOSUPPORT', function() {
  	testError('ESOCKTNOSUPPORT', 44);
  });
  it('should recognize ENOTSUP', function() {
  	testError('ENOTSUP', 45);
  });
  it('should recognize EPFNOSUPPORT', function() {
  	testError('EPFNOSUPPORT', 46);
  });
  it('should recognize EAFNOSUPPORT', function() {
  	testError('EAFNOSUPPORT', 47);
  });
  it('should recognize EADDRINUSE', function() {
  	testError('EADDRINUSE', 48);
  });
  it('should recognize ENETDOWN', function() {
  	testError('ENETDOWN', 50);
  });
  it('should recognize ENETUNREACH', function() {
  	testError('ENETUNREACH', 51);
  });
  it('should recognize ENETRESET', function() {
  	testError('ENETRESET', 52);
  });
  it('should recognize ECONNABORTED', function() {
  	testError('ECONNABORTED', 53);
  });
  it('should recognize ECONNRESET', function() {
  	testError('ECONNRESET', 54);
  });
  it('should recognize ENOBUFS', function() {
  	testError('ENOBUFS', 55);
  });
  it('should recognize EISCONN', function() {
  	testError('EISCONN', 56);
  });
  it('should recognize ENOTCONN', function() {
  	testError('ENOTCONN', 57);
  });
  it('should recognize ETIMEDOUT', function() {
  	testError('ETIMEDOUT', 60);
  });
  it('should recognize ECONNREFUSED', function() {
  	testError('ECONNREFUSED', 61);
  });
  it('should recognize ELOOP', function() {
  	testError('ELOOP', 62);
  });
  it('should recognize ENAMETOOLONG', function() {
  	testError('ENAMETOOLONG', 63);
  });
  it('should recognize EHOSTDOWN', function() {
  	testError('EHOSTDOWN', 64);
  });
  it('should recognize EHOSTUNREACH', function() {
  	testError('EHOSTUNREACH', 65);
  });
  it('should recognize ENOTEMPTY', function() {
  	testError('ENOTEMPTY', 66);
  });
  it('should recognize EPROCLIM', function() {
  	testError('EPROCLIM', 67);
  });
  it('should recognize EUSERS', function() {
  	testError('EUSERS', 68);
  });
  it('should recognize EDQUOT', function() {
  	testError('EDQUOT', 69);
  });
  it('should recognize ESTALE', function() {
  	testError('ESTALE', 70);
  });
  it('should recognize EREMOTE', function() {
  	testError('EREMOTE', 71);
  });
  it('should recognize EBADRPC', function() {
  	testError('EBADRPC', 72);
  });
  it('should recognize ERPCMISMATCH', function() {
  	testError('ERPCMISMATCH', 73);
  });
  it('should recognize EPROGUNAVAIL', function() {
  	testError('EPROGUNAVAIL', 74);
  });
  it('should recognize EPROGMISMATCH', function() {
  	testError('EPROGMISMATCH', 75);
  });
  it('should recognize EPROCUNAVAIL', function() {
  	testError('EPROCUNAVAIL', 76);
  });
  it('should recognize ENOLCK', function() {
  	testError('ENOLCK', 77);
  });
  it('should recognize ENOSYS', function() {
  	testError('ENOSYS', 78);
  });
  it('should recognize EFTYPE', function() {
  	testError('EFTYPE', 79);
  });
  it('should recognize EAUTH', function() {
  	testError('EAUTH', 80);
  });
  it('should recognize ENEEDAUTH', function() {
  	testError('ENEEDAUTH', 81);
  });
  it('should recognize EPWROFF', function() {
  	testError('EPWROFF', 82);
  });
  it('should recognize EDEVERR', function() {
  	testError('EDEVERR', 83);
  });
  it('should recognize EOVERFLOW', function() {
  	testError('EOVERFLOW', 84);
  });
  it('should recognize EBADEXEC', function() {
  	testError('EBADEXEC', 85);
  });
  it('should recognize EBADARCH', function() {
  	testError('EBADARCH', 86);
  });
  it('should recognize ESHLIBVERS', function() {
  	testError('ESHLIBVERS', 87);
  });
  it('should recognize EBADMACHO', function() {
  	testError('EBADMACHO', 88);
  });
  it('should recognize ECANCELED', function() {
  	testError('ECANCELED', 89);
  });
  it('should recognize EIDRM', function() {
  	testError('EIDRM', 90);
  });
  it('should recognize ENOMSG', function() {
  	testError('ENOMSG', 91);
  });
  it('should recognize EILSEQ', function() {
  	testError('EILSEQ', 92);
  });
  it('should recognize ENOATTR', function() {
  	testError('ENOATTR', 93);
  });
  it('should recognize EBADMSG', function() {
  	testError('EBADMSG', 94);
  });
  it('should recognize EMULTIHOP', function() {
  	testError('EMULTIHOP', 95);
  });
  it('should recognize ENODATA', function() {
  	testError('ENODATA', 96);
  });
  it('should recognize ENOLINK', function() {
  	testError('ENOLINK', 97);
  });
  it('should recognize ENOSR', function() {
  	testError('ENOSR', 98);
  });
  it('should recognize ENOSTR', function() {
  	testError('ENOSTR', 99);
  });
  it('should recognize EPROTO', function() {
  	testError('EPROTO', 100);
  });
  it('should recognize ETIME', function() {
  	testError('ETIME', 101);
  });
  it('should recognize EOPNOTSUPP', function() {
  	testError('EOPNOTSUPP', 102);
  });
  it('should recognize ENOPOLICY', function() {
  	testError('ENOPOLICY', 103);
  });
  it('should recognize EALLOAD', function() {
    testError('EALLOAD', 144);
  });
  it('should recognize ENOLOAD', function() {
    testError('ENOLOAD', 145);
  });
  it('should recognize ESETSEC', function() {
    testError('ESETSEC', 146);
  });
  it('should recognize ENOUNLO', function() {
    testError('ENOUNLO', 147);
  });
  it('should recognize EIVALDO', function() {
    testError('EIVALDO', 148);
  });
  it('should recognize EJNFOUN', function() {
    testError('EJNFOUN', 149);
  });
  it('should recognize EINCMD', function() {
    testError('EINCMD', 150);
  });
});

describe('strerror', function(){
  var testStr = function(errno, str) {
    str.should.equal(strerror(errno));
  }
  it('should recognize 1', function() {
  	testStr(1, 'Operation not permitted');
  });
  it('should recognize 2', function() {
  	testStr(2, 'No such file or directory');
  });
  it('should recognize 3', function() {
  	testStr(3, 'No such process');
  });
  it('should recognize 4', function() {
  	testStr(4, 'Interrupted system call');
  });
  it('should recognize 5', function() {
  	testStr(5, 'Input/output error');
  });
  it('should recognize 6', function() {
  	testStr(6, 'Device not configured');
  });
  it('should recognize 7', function() {
  	testStr(7, 'Argument list too long');
  });
  it('should recognize 8', function() {
  	testStr(8, 'Exec format error');
  });
  it('should recognize 9', function() {
  	testStr(9, 'Bad file descriptor');
  });
  it('should recognize 10', function() {
  	testStr(10, 'No child processes');
  });
  it('should recognize 11', function() {
  	testStr(11, 'Resource deadlock avoided');
  });
  it('should recognize 12', function() {
  	testStr(12, 'Cannot allocate memory');
  });
  it('should recognize 13', function() {
  	testStr(13, 'Permission denied');
  });
  it('should recognize 14', function() {
  	testStr(14, 'Bad address');
  });
  it('should recognize 15', function() {
  	testStr(15, 'Block device required');
  });
  it('should recognize 16', function() {
  	testStr(16, 'Device / Resource busy');
  });
  it('should recognize 17', function() {
  	testStr(17, 'File exists');
  });
  it('should recognize 18', function() {
  	testStr(18, 'Cross-device link');
  });
  it('should recognize 19', function() {
  	testStr(19, 'Operation not supported by device');
  });
  it('should recognize 20', function() {
  	testStr(20, 'Not a directory');
  });
  it('should recognize 21', function() {
  	testStr(21, 'Is a directory');
  });
  it('should recognize 22', function() {
  	testStr(22, 'Invalid argument');
  });
  it('should recognize 23', function() {
  	testStr(23, 'Too many open files in system');
  });
  it('should recognize 24', function() {
  	testStr(24, 'Too many open files');
  });
  it('should recognize 25', function() {
  	testStr(25, 'Inappropriate ioctl for device');
  });
  it('should recognize 26', function() {
  	testStr(26, 'Text file busy');
  });
  it('should recognize 27', function() {
  	testStr(27, 'File too large');
  });
  it('should recognize 28', function() {
  	testStr(28, 'No space left on device');
  });
  it('should recognize 29', function() {
  	testStr(29, 'Illegal seek');
  });
  it('should recognize 30', function() {
  	testStr(30, 'Read-only file system');
  });
  it('should recognize 31', function() {
  	testStr(31, 'Too many links');
  });
  it('should recognize 32', function() {
  	testStr(32, 'Broken pipe');
  });
  it('should recognize 33', function() {
  	testStr(33, 'Numerical argument out of domain');
  });
  it('should recognize 34', function() {
  	testStr(34, 'Result too large');
  });
  it('should recognize 35', function() {
  	testStr(35, 'Resource temporarily unavailable');
  });
  it('should recognize 36', function() {
  	testStr(36, 'Operation now in progress');
  });
  it('should recognize 37', function() {
  	testStr(37, 'Operation already in progress');
  });
  it('should recognize 38', function() {
  	testStr(38, 'Socket operation on non-socket');
  });
  it('should recognize 39', function() {
  	testStr(39, 'Destination address required');
  });
  it('should recognize 40', function() {
  	testStr(40, 'Message too long');
  });
  it('should recognize 41', function() {
  	testStr(41, 'Protocol wrong type for socket');
  });
  it('should recognize 42', function() {
  	testStr(42, 'Protocol not available');
  });
  it('should recognize 43', function() {
  	testStr(43, 'Protocol not supported');
  });
  it('should recognize 44', function() {
  	testStr(44, 'Socket type not supported');
  });
  it('should recognize 45', function() {
  	testStr(45, 'Operation not supported');
  });
  it('should recognize 46', function() {
  	testStr(46, 'Protocol family not supported');
  });
  it('should recognize 47', function() {
  	testStr(47, 'Address family not supported by protocol family');
  });
  it('should recognize 48', function() {
  	testStr(48, 'Address already in use');
  });
  it('should recognize 50', function() {
  	testStr(50, 'Network is down');
  });
  it('should recognize 51', function() {
  	testStr(51, 'Network is unreachable');
  });
  it('should recognize 52', function() {
  	testStr(52, 'Network dropped connection on reset');
  });
  it('should recognize 53', function() {
  	testStr(53, 'Software caused connection abort');
  });
  it('should recognize 54', function() {
  	testStr(54, 'Connection reset by peer');
  });
  it('should recognize 55', function() {
  	testStr(55, 'No buffer space available');
  });
  it('should recognize 56', function() {
  	testStr(56, 'Socket is already connected');
  });
  it('should recognize 57', function() {
  	testStr(57, 'Socket is not connected');
  });
  it('should recognize 60', function() {
  	testStr(60, 'Operation timed out');
  });
  it('should recognize 61', function() {
  	testStr(61, 'Connection refused');
  });
  it('should recognize 62', function() {
  	testStr(62, 'Too many levels of symbolic links');
  });
  it('should recognize 63', function() {
  	testStr(63, 'File name too long');
  });
  it('should recognize 64', function() {
  	testStr(64, 'Host is down');
  });
  it('should recognize 65', function() {
  	testStr(65, 'No route to host');
  });
  it('should recognize 66', function() {
  	testStr(66, 'Directory not empty');
  });
  it('should recognize 67', function() {
  	testStr(67, 'Too many processes');
  });
  it('should recognize 68', function() {
  	testStr(68, 'Too many users');
  });
  it('should recognize 69', function() {
  	testStr(69, 'Disc quota exceeded');
  });
  it('should recognize 70', function() {
  	testStr(70, 'Stale NFS file handle');
  });
  it('should recognize 71', function() {
  	testStr(71, 'Too many levels of remote in path');
  });
  it('should recognize 72', function() {
  	testStr(72, 'RPC struct is bad');
  });
  it('should recognize 73', function() {
  	testStr(73, 'RPC version wrong');
  });
  it('should recognize 74', function() {
  	testStr(74, 'RPC prog. not avail');
  });
  it('should recognize 75', function() {
  	testStr(75, 'Program version wrong');
  });
  it('should recognize 76', function() {
  	testStr(76, 'Bad procedure for program');
  });
  it('should recognize 77', function() {
  	testStr(77, 'No locks available');
  });
  it('should recognize 78', function() {
  	testStr(78, 'Function not implemented');
  });
  it('should recognize 79', function() {
  	testStr(79, 'Inappropriate file type or format');
  });
  it('should recognize 80', function() {
  	testStr(80, 'Authentication error');
  });
  it('should recognize 81', function() {
  	testStr(81, 'Need authenticator');
  });
  it('should recognize 82', function() {
  	testStr(82, 'Device power is off');
  });
  it('should recognize 83', function() {
  	testStr(83, 'Device error, e.g. paper out');
  });
  it('should recognize 84', function() {
  	testStr(84, 'Value too large to be stored in data type');
  });
  it('should recognize 85', function() {
  	testStr(85, 'Bad executable');
  });
  it('should recognize 86', function() {
  	testStr(86, 'Bad CPU type in executable');
  });
  it('should recognize 87', function() {
  	testStr(87, 'Shared library version mismatch');
  });
  it('should recognize 88', function() {
  	testStr(88, 'Malformed Macho file');
  });
  it('should recognize 89', function() {
  	testStr(89, 'Operation canceled');
  });
  it('should recognize 90', function() {
  	testStr(90, 'Identifier removed');
  });
  it('should recognize 91', function() {
  	testStr(91, 'No message of desired type');
  });
  it('should recognize 92', function() {
  	testStr(92, 'Illegal byte sequence');
  });
  it('should recognize 93', function() {
  	testStr(93, 'Attribute not found');
  });
  it('should recognize 94', function() {
  	testStr(94, 'Bad message');
  });
  it('should recognize 95', function() {
  	testStr(95, 'Reserved');
  });
  it('should recognize 96', function() {
  	testStr(96, 'No message available on STREAM');
  });
  it('should recognize 97', function() {
  	testStr(97, 'Reserved');
  });
  it('should recognize 98', function() {
  	testStr(98, 'No STREAM resources');
  });
  it('should recognize 99', function() {
  	testStr(99, 'Not a STREAM');
  });
  it('should recognize 100', function() {
  	testStr(100, 'Protocol error');
  });
  it('should recognize 101', function() {
  	testStr(101, 'STREAM ioctl timeout');
  });
  it('should recognize 102', function() {
  	testStr(102, 'Operation not supported on socket');
  });
  it('should recognize 103', function() {
  	testStr(103, 'No such policy registered');
  });
  it('should recognize 144', function() {
    testStr(144, 'Job already loaded');
  });
  it('should recognize 145', function() {
    testStr(145, 'Job not loaded');
  });
  it('should recognize 146', function() {
    testStr(146, 'Unable to set security session');
  });
  it('should recognize 147', function() {
    testStr(147, 'Job not unloaded');
  });
  it('should recognize 148', function() {
    testStr(148, 'Invalid domain');
  });
  it('should recognize 149', function() {
    testStr(149, 'Job not found');
  });
  it('should recognize 150', function() {
    testStr(150, 'Invalid command');
  });
});