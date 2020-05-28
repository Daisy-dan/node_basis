var fs=require('fs');


//读取顺序 1 3 2 

console.log('1');

fs.readFile('text.txt',function(err,data){
    if(err){
        return false;
    }else{
        console.log('2');
    }
})

console.log('3');


//undefined
function getData(){
    fs.readFile('text.txt',function(err,data){
        if(err){
            return false;
        }else{
            console.log('5',data.toString());
            return data.toString();
        }
    })
}
getData();
console.log('4',getData());  //undefined