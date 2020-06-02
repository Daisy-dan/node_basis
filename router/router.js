var ejs=require('ejs');

var app = {
    login:function(req,res){
        console.log('login');
        // ejs.renderFile('filename',data,function(data){
        //     res.end(data)
        // })
        res.end('login');
    },
    register:function(req,res){
        console.log('register');
        res.end('register');
    },
    home:function(req,res){
        console.log('home');
        res.end('home');
    },
}

module.exports=app;
