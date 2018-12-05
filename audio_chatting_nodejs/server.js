var https = require('https'),
    express = require('express'),
     fs = require('fs');

var options = {  
    key: fs.readFileSync('privatekey.pem'),
    cert: fs.readFileSync('certificate.pem')
};


var port2 = 443;

var app = express();  

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
https.createServer(options, app).listen(port2, function(){  
  console.log("Https server listening on port " + port2);
});