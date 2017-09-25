var express = require('express');
var app = express();
app.get('/',function(req,res){
	res.end('ok');
});
app.listen(8080,function(){
	console.log('Listing localhost:8080....');
})