const url=require('url');
const http=require('http');

http.createServer(function(req,resp){
    resp.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    resp.end("hello");

    if(req.url != '/favicon.ico'){
        console.log(req.url);
        console.log(url.parse(req.url,true));  //true--把传值转换成对象
        var query = url.parse(req.url,true).query.aid;
        console.log(query);
    }


}).listen(8001)