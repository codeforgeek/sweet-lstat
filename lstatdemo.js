var fs=require("fs");
var errno=require('slstat');
var path="Path to file";
fs.lstat(path,function(err,stats){
	if(err)
	{
		console.log(errno.getErrorFromCode('ENOENT'));
	}
	else
	{
	console.log(stats);
	}
});
