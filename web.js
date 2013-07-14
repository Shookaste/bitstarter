var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buffer = new Buffer(16);
    var message = fs.readFileSync("index.html");
    buffer.write(message);
 response.send(buffer.toString("utf-8", 0, 12));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
