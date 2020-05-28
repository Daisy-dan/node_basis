var fs=require("fs");

//1、检测是文件还是目录
// fs.stat("html",function(err,stats){
//     if(err){
//         console.log(err);
//         return false;

//     }    
//     console.log(stats.isFile());      //false
//     console.log(stats.isDirectory());     //true
// })

//2、创建目录
// fs.mkdir('css',function(err){
//     if(err){
//         console.log(err);
//         return false;

//     }    
//     console.log("创建目录成功")
// })
//3、写入文件
// fs.writeFile('text.txt','hello world!!!',function(err){
//     if(err){
//         console.log(err);
//         return false;

//     }    
//     console.log("写入成功")

// })
//4、追加文件内容
// fs.appendFile('text.txt','\n追加成功追加成功!!!',function(err){
//     if(err){
//         console.log(err);
//         return false;

//     }    
//     console.log("追加成功")
// })

//5、读取文件
// fs.readFile('text.txt',function(err,data){
//     if(err){
//         console.log(err);
//         return false;

//     }    
//     console.log(data.toString());
// })

//6、读取目录  读取文件及文件夹  ---[ 'css', 'fs01.js', 'html', 'text.txt' ]
// fs.readdir('../fs模块',function(err,data){
//     if(err){
//         console.log(err);
//         return false;

//     }    
//     console.log(data);
// })


//7、文件重命名
// fs.rename('text2.txt','html/text.txt',function(err){
//     if(err){
//         console.log(err);
//         return false;

//     }    
//     console.log('修改成功');
// })

//8、删除目录
// fs.rmdir('css',function(err){
//     if(err){
//         console.log(err);
//         return false;

//     }    
//     console.log('删除目录成功');
// })

//8、删除文件
// fs.unlink('text.txt',function(err){
//     if(err){
//         console.log(err);
//         return false;

//     }    
//     console.log('删除文件成功');
// })









