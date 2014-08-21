var fs=require("fs");
var errno=require('slstat');
var path="/home/unixroot/Desktop/zookeeper1";
fs.lstat(path,function(err,stats){
	if(err)
	{
		console.log(errno.getErrorFromCode('ENOENT'));
		/*if(err.code==="ENOENT")
		{
			fs.exists(path,function(exist) {
		        if(!exist)
		        	console.log("Path does not exists");
			});
		}
		console.log(err);
		*/
	}
	else
	{
	console.log(stats);
	}
});
