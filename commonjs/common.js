var http=require("http");

var config=require("./config");
//省略.js
//var config=require("./config.js");

var text=require("text");

var nav=require("nav/nav");

var nav2=require("nav");
//直接引用node_modules/nav/nav.js
//npm init --yes  生成package.json文件
//入口---- "main": "nav.js",


var httpServer=http.createServer(function(req,rep){
   
    rep.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    rep.end("common.js");
    
    console.log("config.str:"+config.str);
    console.log(config.add(1,2));
    console.log(config.show());
    console.log('text:',text);
    console.log('nav:',nav);
    console.log('nav2:',nav2);
})

httpServer.listen("8001",'127.0.0.1')