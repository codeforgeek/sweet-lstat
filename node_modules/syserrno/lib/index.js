/**
 * Due to the fact that the majority of these
 * definitions come directly from errno.h on
 * OS X, I have included the license header from
 * that file
 */

/*
 * Copyright (c) 2000-2002 Apple Computer, Inc. All rights reserved.
 *
 * @APPLE_OSREFERENCE_LICENSE_HEADER_START@
 *
 * This file contains Original Code and/or Modifications of Original Code
 * as defined in and that are subject to the Apple Public Source License
 * Version 2.0 (the 'License'). You may not use this file except in
 * compliance with the License. The rights granted to you under the License
 * may not be used to create, or enable the creation or redistribution of,
 * unlawful or unlicensed copies of an Apple operating system, or to
 * circumvent, violate, or enable the circumvention or violation of, any
 * terms of an Apple operating system software license agreement.
 *
 * Please obtain a copy of the License at
 * http://www.opensource.apple.com/apsl/ and read it before using this file.
 *
 * The Original Code and all software distributed under the License are
 * distributed on an 'AS IS' basis, WITHOUT WARRANTY OF ANY KIND, EITHER
 * EXPRESS OR IMPLIED, AND APPLE HEREBY DISCLAIMS ALL SUCH WARRANTIES,
 * INCLUDING WITHOUT LIMITATION, ANY WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT OR NON-INFRINGEMENT.
 * Please see the License for the specific language governing rights and
 * limitations under the License.
 *
 * @APPLE_OSREFERENCE_LICENSE_HEADER_END@
 */
/* Copyright (c) 1995 NeXT Computer, Inc. All Rights Reserved */
/*
 * Copyright (c) 1982, 1986, 1989, 1993
 *	The Regents of the University of California.  All rights reserved.
 * (c) UNIX System Laboratories, Inc.
 * All or some portions of this file are derived from material licensed
 * to the University of California by American Telephone and Telegraph
 * Co. or Unix System Laboratories, Inc. and are reproduced herein with
 * the permission of UNIX System Laboratories, Inc.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. All advertising materials mentioning features or use of this software
 *    must display the following acknowledgement:
 *	This product includes software developed by the University of
 *	California, Berkeley and its contributors.
 * 4. Neither the name of the University nor the names of its contributors
 *    may be used to endorse or promote products derived from this software
 *    without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 *
 *	@(#)errno.h	8.5 (Berkeley) 1/21/94
 */



/**
 * These are mostly from errno.h
 * But there are some additional ones added for
 * The launchctl node module
 */
var errors = {
  EPERM: { errno: 1, msg: 'Operation not permitted' },
  ENOENT: { errno: 2, msg: 'No such file or directory' },
  ESRCH: { errno: 3, msg: 'No such process' },
  EINTR: { errno: 4, msg: 'Interrupted system call' },
  EIO: { errno: 5, msg: 'Input/output error' },
  ENXIO: { errno: 6, msg: 'Device not configured' },
  E2BIG: { errno: 7, msg: 'Argument list too long' },
  ENOEXEC: { errno: 8, msg: 'Exec format error' },
  EBADF: { errno: 9, msg: 'Bad file descriptor' },
  ECHILD: { errno: 10, msg: 'No child processes' },
  EDEADLK: { errno: 11, msg: 'Resource deadlock avoided' },
  ENOMEM: { errno: 12, msg: 'Cannot allocate memory' },
  EACCES: { errno: 13, msg: 'Permission denied' },
  EFAULT: { errno: 14, msg: 'Bad address' },
  ENOTBLK: { errno: 15, msg: 'Block device required' },
  EBUSY: { errno: 16, msg: 'Device / Resource busy' },
  EEXIST: { errno: 17, msg: 'File exists' },
  EXDEV: { errno: 18, msg: 'Cross-device link' },
  ENODEV: { errno: 19, msg: 'Operation not supported by device' },
  ENOTDIR: { errno: 20, msg: 'Not a directory' },
  EISDIR: { errno: 21, msg: 'Is a directory' },
  EINVAL: { errno: 22, msg: 'Invalid argument' },
  ENFILE: { errno: 23, msg: 'Too many open files in system' },
  EMFILE: { errno: 24, msg: 'Too many open files' },
  ENOTTY: { errno: 25, msg: 'Inappropriate ioctl for device' },
  ETXTBSY: { errno: 26, msg: 'Text file busy' },
  EFBIG: { errno: 27, msg: 'File too large' },
  ENOSPC: { errno: 28, msg: 'No space left on device' },
  ESPIPE: { errno: 29, msg: 'Illegal seek' },
  EROFS: { errno: 30, msg: 'Read-only file system' },
  EMLINK: { errno: 31, msg: 'Too many links' },
  EPIPE: { errno: 32, msg: 'Broken pipe' },
  EDOM: { errno: 33, msg: 'Numerical argument out of domain' },
  ERANGE: { errno: 34, msg: 'Result too large' },
  EAGAIN: { errno: 35, msg: 'Resource temporarily unavailable' },
  EINPROGRESS: { errno: 36, msg: 'Operation now in progress' },
  EALREADY: { errno: 37, msg: 'Operation already in progress' },
  ENOTSOCK: { errno: 38, msg: 'Socket operation on non-socket' },
  EDESTADDRREQ: { errno: 39, msg: 'Destination address required' },
  EMSGSIZE: { errno: 40, msg: 'Message too long' },
  EPROTOTYPE: { errno: 41, msg: 'Protocol wrong type for socket' },
  ENOPROTOOPT: { errno: 42, msg: 'Protocol not available' },
  EPROTONOSUPPORT: { errno: 43, msg: 'Protocol not supported' },
  ESOCKTNOSUPPORT: { errno: 44, msg: 'Socket type not supported' },
  ENOTSUP: { errno: 45, msg: 'Operation not supported' },
  EPFNOSUPPORT: { errno: 46, msg: 'Protocol family not supported' },
  EAFNOSUPPORT: { errno: 47, msg: 'Address family not supported by protocol family' },
  EADDRINUSE: { errno: 48, msg: 'Address already in use' },
  ENETDOWN: { errno: 50, msg: 'Network is down' },
  ENETUNREACH: { errno: 51, msg: 'Network is unreachable' },
  ENETRESET: { errno: 52, msg: 'Network dropped connection on reset' },
  ECONNABORTED: { errno: 53, msg: 'Software caused connection abort' },
  ECONNRESET: { errno: 54, msg: 'Connection reset by peer' },
  ENOBUFS: { errno: 55, msg: 'No buffer space available' },
  EISCONN: { errno: 56, msg: 'Socket is already connected' },
  ENOTCONN: { errno: 57, msg: 'Socket is not connected' },
  ETIMEDOUT: { errno: 60, msg: 'Operation timed out' },
  ECONNREFUSED: { errno: 61, msg: 'Connection refused' },
  ELOOP: { errno: 62, msg: 'Too many levels of symbolic links' },
  ENAMETOOLONG: { errno: 63, msg: 'File name too long' },
  EHOSTDOWN: { errno: 64, msg: 'Host is down' },
  EHOSTUNREACH: { errno: 65, msg: 'No route to host' },
  ENOTEMPTY: { errno: 66, msg: 'Directory not empty' },
  EPROCLIM: { errno: 67, msg: 'Too many processes' },
  EUSERS: { errno: 68, msg: 'Too many users' },
  EDQUOT: { errno: 69, msg: 'Disc quota exceeded' },
  ESTALE: { errno: 70, msg: 'Stale NFS file handle' },
  EREMOTE: { errno: 71, msg: 'Too many levels of remote in path' },
  EBADRPC: { errno: 72, msg: 'RPC struct is bad' },
  ERPCMISMATCH: { errno: 73, msg: 'RPC version wrong' },
  EPROGUNAVAIL: { errno: 74, msg: 'RPC prog. not avail' },
  EPROGMISMATCH: { errno: 75, msg: 'Program version wrong' },
  EPROCUNAVAIL: { errno: 76, msg: 'Bad procedure for program' },
  ENOLCK: { errno: 77, msg: 'No locks available' },
  ENOSYS: { errno: 78, msg: 'Function not implemented' },
  EFTYPE: { errno: 79, msg: 'Inappropriate file type or format' },
  EAUTH: { errno: 80, msg: 'Authentication error' },
  ENEEDAUTH: { errno: 81, msg: 'Need authenticator' },
  EPWROFF: { errno: 82, msg: 'Device power is off' },
  EDEVERR: { errno: 83, msg: 'Device error, e.g. paper out' },
  EOVERFLOW: { errno: 84, msg: 'Value too large to be stored in data type' },
  EBADEXEC: { errno: 85, msg: 'Bad executable' },
  EBADARCH: { errno: 86, msg: 'Bad CPU type in executable' },
  ESHLIBVERS: { errno: 87, msg: 'Shared library version mismatch' },
  EBADMACHO: { errno: 88, msg: 'Malformed Macho file' },
  ECANCELED: { errno: 89, msg: 'Operation canceled' },
  EIDRM: { errno: 90, msg: 'Identifier removed' },
  ENOMSG: { errno: 91, msg: 'No message of desired type' },
  EILSEQ: { errno: 92, msg: 'Illegal byte sequence' },
  ENOATTR: { errno: 93, msg: 'Attribute not found' },
  EBADMSG: { errno: 94, msg: 'Bad message' },
  EMULTIHOP: { errno: 95, msg: 'Reserved' },
  ENODATA: { errno: 96, msg: 'No message available on STREAM' },
  ENOLINK: { errno: 97, msg: 'Reserved' },
  ENOSR: { errno: 98, msg: 'No STREAM resources' },
  ENOSTR: { errno: 99, msg: 'Not a STREAM' },
  EPROTO: { errno: 100, msg: 'Protocol error' },
  ETIME: { errno: 101, msg: 'STREAM ioctl timeout' },
  EOPNOTSUPP: { errno: 102, msg: 'Operation not supported on socket' },
  ENOPOLICY: { errno: 103, msg: 'No such policy registered' },
  
  
  EALLOAD: { errno: 144, msg: 'Job already loaded' },
  ENOLOAD: { errno: 145, msg: 'Job not loaded' },
  ESETSEC: { errno: 146, msg: 'Unable to set security session' },
  ENOUNLO: { errno: 147, msg: 'Job not unloaded' },
  EIVALDO: { errno: 148, msg: 'Invalid domain' },
  EJNFOUN: { errno: 149, msg: 'Job not found' },
  EINCMD: { errno: 150, msg: 'Invalid command'},
  EINVARG: { errno: 151, msg: 'Invalid arguments'},
  EINVLIM: { errno: 152, msg: 'Invalid limit'},
  EUNKRES: { errno: 153, msg: 'Unknown response from launchd'},
  EINVMAS: { errno: 154, msg: 'Invalid umask'}
};


var errorForErrno = function(errno) {
  var e = new Error();
  var keys = Object.keys(errors);
  var len = keys.length;
  for (var i=0; i<len; i++) {
    var key = keys[i];
    var o = errors[key];
    if (o.errno === errno) {
      e.code = key;
      e.msg = e.message = o.msg;
      e.errno = o.errno;
      break;
    }
  }
  if (!e.code) {
    e.code = 'EUNKN';
    e.msg = e.message = 'Unknown Error';
    e.errno = errno;
  }
  return e;
}

var errorForCode = function(code) {
  var e = new Error();
  if (!errors[code]) {
    e.code = 'EUNKN';
    e.msg = 'Unknown Error Code';
    e.errno = -1;
    return e;
  }
  e.code = code;
  e.msg = e.message = errors[code].msg;
  e.errno = errors[code].errno;
  return e;
}

var strerror = function(errno) {
  var keys = Object.keys(errors);
  var len = keys.length;
  for (var i=0; i<len; i++) {
    var key = keys[i];
    var e = errors[key];
    if (e.errno == errno) {
      return e.msg;
    }
  }
  return 'Unknown Error';
}

exports.strerror = strerror;
exports.errorForCode = errorForCode;
exports.errorForErrno = errorForErrno;
exports.errors = errors;