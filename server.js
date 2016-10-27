var http = require("http");
var server = http.create.Server(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.end("Hello bengaluru");
});
	server.listen(8081,function()
	{
		console.log("server listening at port 8081");

});