var fs=require('fs');
exports.getMime=function(extname){

    //异步--server.js获取为undefined
    //此文件路径为server.js读取路径
    // fs.readFile('./common/json/mime.json',function(err,data){
    //     if(err){
    //         console.log('文件不存在!!!');
    //         return false;
    //     }else{
         
    //         var MIME=JSON.parse(data.toString());
    //         console.log('extname:',extname);
    //         console.log('extname2:',MIME[extname]);
    //         return MIME[extname];
            
    //     }
    // })

    //把数据改为同步 1/readFileSync 2/回调函数callback 3/事件驱动EventEmitter
    var data=fs.readFileSync('./common/json/mime.json');
    var MIME=JSON.parse(data.toString());
    return MIME[extname] || 'text/html';

    
}