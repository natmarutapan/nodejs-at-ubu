var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World! from 5711403229 Natthapol Marutapan  update at 3/10/2017 ' );
    //res.end('update at 3/10/2017' );
}).listen(8080);
