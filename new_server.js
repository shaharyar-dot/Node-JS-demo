var http=require('http');
var fs=require('fs');
global.r;
exports.area=function(r){
return r;
};

function onRequest(request,response){
response.writeHead(200,{'Content-Type':'text/php'});
fs.readFile('./loop.php',null,function(error,data){
	if (error) {
		response.writeHead(404);
		response.write('File not found');

	}
	else{
		response.write(data);
		response.write(r);
	}
	response.end();
});
}
http.createServer(onRequest).listen(8000);
