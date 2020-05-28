var fs=require('fs');

//undefined
function getData(callback){

    fs.readFile('text.txt',function(err,data){
        if(err){
            return false;
        }else{
            callback(data);
        }
    })
}
getData(function(result){
    console.log(result.toString());
})

