var http=require('http');
var url=require('url');
var fs=require('fs');
var path=require('path');
var mime=require('./common/js/getmime');
var mimeAll=require('./common/js/getmimefromjson');




http.createServer(function(req,res){


    //http://localhost:8001/index.html      获取index.html
   //var pathname = req.url;   //index.html?ad=dsdfsd
    var pathname = url.parse(req.url).pathname;   //过滤参数
    //console.log(pathname)



    if(pathname == '/'){
        pathname='/index.html'
    }

    //node自带获取文件后缀名 eg:.html
    var extname = path.extname(pathname);
    //console.log('getmime(extname):',mime.getMime(extname))
    //console.log(extname);
    //console.log('aaaa',mimeAll.getMime(extname));
    
    if(pathname != '/favicon.ico'){
        //console.log(pathname);

        fs.readFile('static/'+pathname,function(err,data){
            if(err){
                console.log('404');
                
                fs.readFile('static/404.html',function(err,data404){
                    //res.writeHead(404,{'Content-Type':''+ mime.getMime(extname) +';charset=utf-8'});
                    res.writeHead(404,{'Content-Type':''+ mimeAll.getMime(extname) +';charset=utf-8'});
                    res.write(data404);
                    res.end();
        
                })
            }else{
                //res.writeHead(200,{'Content-Type':''+ mime.getMime(extname) +';charset=utf-8'});
                res.writeHead(200,{'Content-Type':''+ mimeAll.getMime(extname) +';charset=utf-8'});
                //console.log(data.toString());
                res.write(data);
                res.end();

            }

        })
    }

    

    //res.write('hello world!');

}).listen(8001)















