var url=require('url');
var fs=require('fs');
var path=require('path');

function getMime(extname,callback){
    fs.readFile('./static/json/mime.json',function(err,data){
        if(err){
            console.log(err);
            return false;
        }else{
            var mimeJson = JSON.parse(data.toString());
            var result = mimeJson[extname] || 'text/html';
            callback(result);
        }
    })
}

exports.statics=function(req,res,staticPath){


    var pathname = url.parse(req.url).pathname;

    if(pathname == '/'){
        pathname=staticPath+'/index.html'
    }

    var extname = path.extname(pathname);

    getMime(extname,function(result){
        console.log(result)
    })
    
    if(pathname != '/favicon.ico'){

        fs.readFile(staticPath+'/'+pathname,function(err,data){
            if(err){
                console.log('404');
                
                getMime(extname,function(mime){
                    fs.readFile(staticPath+'/404.html',function(err,data404){
                        res.writeHead(404,{'Content-Type':''+ mime +';charset=utf-8'});
                        res.write(data404);
                        res.end();         
                    })
                })
                
            }else{

                getMime(extname,function(mime){
                    res.writeHead(200,{'Content-Type':''+ mime +';charset=utf-8'});
                    res.write(data);
                    res.end();
                })           

            }

        })
    }


}












