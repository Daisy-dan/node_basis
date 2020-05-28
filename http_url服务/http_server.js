const http = require("http");

http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    response.end("第一个服务");

}).listen(8888);
console.log("'Server running at http://localhost:8888/")

// const hostname = '127.0.0.1';
// const port = 8000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
//   });
//   server.listen(port, hostname, () => {
//     console.log(`server running at http://${hostname}:${port}/`);
//   });