var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if(req.url.length < 2) {
    req.url = "/index.html";
  }
  fs.readFile(__dirname + "/demo" + req.url, function (err,data) {
    res.writeHead(200);
    res.end(data);
  });
}).listen(process.env.PORT || 3000, function() {
  console.log("Serving at http://localhost:" + 3000);
});