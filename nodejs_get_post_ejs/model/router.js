var http=require('http');
var url=require('url');
var fs=require('fs');
var path=require('path');
var mimeAll=require('./getmimefromjson');


http.createServer(function(req,res){

    var pathname = url.parse(req.url).pathname;

    if(pathname == '/'){
        pathname='/index.html'
    }

    var extname = path.extname(pathname);
    
    if(pathname != '/favicon.ico'){

        fs.readFile('static/'+pathname,function(err,data){
            if(err){
                console.log('404');
                
                fs.readFile('static/404.html',function(err,data404){
                    res.writeHead(404,{'Content-Type':''+ mimeAll.getMime(extname) +';charset=utf-8'});
                    res.write(data404);
                    res.end();
        
                })
            }else{
                res.writeHead(200,{'Content-Type':''+ mimeAll.getMime(extname) +';charset=utf-8'});
                res.write(data);
                res.end();

            }

        })
    }

    
}).listen(8001)















