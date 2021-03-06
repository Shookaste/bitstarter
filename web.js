var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buffer = new Buffer(2043);
    buffer.write(fs.readFileSync("index.html", "utf8"));
 response.send(buffer.toString("utf-8", 0, 2043));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
