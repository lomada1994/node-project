var express = require('express');
var math = require('./math');
var fs = require('fs');
var app = express();

var port = 3000;
app.listen(port);
app.get('/',function(request,response){
	response.sendFile(__dirname+'/main.html');
});

app.post('/add',function(request,response){
	var a= request.body.a;
	console.log(a);
	var b= request.body.b;
	console.log(b);
	response.end('Result is '+math.addOperation(parseInt(a),parseInt(b)));
});

app.get('/mul',function(request,response){
	response.end('Result is '+math.mulOperation(1,2));
});
console.log('Server started at http://localhost:3000');