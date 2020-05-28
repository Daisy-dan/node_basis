var fs=require("fs");

//判断服务器上面有没有upload目录，没有创建这个目录（图片上传）
fs.stat("upload",function(err,stats){
    if(err){
        console.log(err);
        fs.mkdir('upload',function(err){
            if(err){
                //console.log(err);
                return false;
            }
            console.log("创建upload目录");
        })
    }else{
        console.log(stats.isDirectory(),'目录已经存在！')
    }
})

var statFile = function(fileName){
    fs.stat(fileName,function(err,stats){
        if(err){
            //console.log(err);
            return false;
        } 
        //console.log(stats.isFile())
        console.log(stats.isFile(),'文件存在！')
    })
}
statFile("upload/file01.txt");


//找出html目录下的所有目录，然后打印出来
var dirArr=[];
var fileArr=[];
fs.readdir('html',function(err,files){
    if(err){
        //console.log(err);
        return false;
    }else{
        console.log('files:',files);

        (function getFiles(i){

            if(i == files.length){
                console.log('fileArr:',fileArr);
                console.log('dirArr',dirArr);
                return false
            }
            fs.stat('html/'+files[i],function(err,stats){              
                //console.log(stats)
                if(stats.isFile()){
                    fileArr.push(files[i])
                }
                if(stats.isDirectory()){
                    dirArr.push(files[i])
                }

                getFiles(i+1)
            })
            
        })(0)

        (function aa(i){
            if(i<10){
                return false;
            }

            aa(i++)
            console.log(i)

        })(0)
        

        
    }
    
    
})
