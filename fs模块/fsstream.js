var fs=require('fs');

var readStream=fs.createReadStream('html/text2.txt');

var data='写入成功！\n';

var writerStream=fs.createWriteStream('html/text3.txt');

var str='';
var count=0;

//创建文件
// fs.writeFile('html/text2.txt','创建写入文件\n',function(err){
//     if(err){
//         console.log(err);
//         return false;
//     }else{
//         console.log('写入成功！')
//     }

// })

//写入数据
// (function appendCon(i){
//     if(i>5000){
//         return false;
//     }

//     fs.appendFile('html/text2.txt','创建写入文件\n',function(err){
//         if(err){
//             console.log(err);
//             return false;
//         }else{
//             console.log('写入成功！')
//         }
    
//     })
//     appendCon(i+1)
// })(0)

//从文件流中读取数据
// readStream.on('data',(chunk)=>{
//     str+=chunk;
//     count++;
// })
// readStream.on('end',(chunk)=>{
//     console.log(count);
//     //console.log(str);
// })

//写入流
// writerStream.write(data,'utf-8');
// writerStream.end();   //标记写入完成
// writerStream.on('finish',function(){
//     console.log('ok');
// })
// writerStream.on('error',function(){
//     console.log('err');
// })



//管道流，将text2.txt的内容写入到文件text3.txt中
readStream.pipe(writerStream);
console.log('okk')
