var fs=require('fs');
var http=require('http');
var url=require('url');
var router=require('./router');

http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname.replace('/','');

    if(pathname != 'favicon.ico'){
        try{
            router[pathname](req,res);
        }catch(err){
            router['home'](req,res);
        }
    }
}).listen(8001)