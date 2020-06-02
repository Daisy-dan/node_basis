var http=require('http');
var fs=require('fs');
var url=require('url');

var ejs=require('ejs');

http.createServer(function(req,res){

    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"})
    var pathName=url.parse(req.url).pathname;

    if(pathName=='/'){
        pathName='/index'
    }
    if(pathName=='/login'){
       var data='';
        ejs.renderFile('./views/login.ejs',{msg:data},function(err,data){
            res.end(data)
        })
    }else if(pathName=='/dologin'){

        //console.log(req.method.toLowerCase())
        if(req.method.toLowerCase() == 'get'){
            //get获取数据
            var reqJson=url.parse(req.url,true).query;
            console.log(reqJson.username);
        }else if(req.method.toLowerCase() == 'post'){
            var postStr='';
            req.on('data',function(chunk){
                postStr += chunk;
            })
            req.on('end',function(err,chunk){
                //res.end(postStr);history.back();
                console.log(postStr);

                fs.appendFile('log.txt',postStr+'\n',function(err){
                    if(err){
                        console.log(err);
                        return false;

                    }else{
                        console.log('写入log成功！')
                    }
                })

                res.end("<script>alert('登录成功');</script>")
                
                
            })
        }
        

        
        res.end('dologin')

    }else{
        var data = {
            name:'后台数据',
            html:'<h2>后台html</h2>',
            list:[
                {
                    aid:1,
                    aname:'aa',
                },
                {
                    aid:2,
                    aname:'bb',
                }
            ]
        };
        ejs.renderFile('./views/index.ejs',{msg:data},function(err,data){
            res.end(data)
        })
    }


}).listen(8001);
