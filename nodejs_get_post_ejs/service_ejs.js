var http=require('http');
var url=require('url');
var router=require('./model/router');

var ejs=require('ejs');

http.createServer(function(req,res){

    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"})
    var pathName=url.parse(req.url).pathname;

    if(pathName=='/'){
        pathName='/index'
    }
    if(pathName=='/index'){

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
