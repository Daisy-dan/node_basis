
var config = {

    str : "我是模块",

    add:function(x,y){
        return x+y;
    },

    show:function(){
        return "show";
    }
}




// exports.config=config;  config赋给config，获取时config.config.str
module.exports=config;