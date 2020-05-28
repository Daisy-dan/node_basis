var events=require('events');
var fs=require('fs');

//console.log(events);

var eventEmitter=new events.EventEmitter();

eventEmitter.on('to_parent',function(data){
    console.log('接收：',data)
})
setTimeout(function(){
    eventEmitter.emit('to_parent','发送aaaaa');
},2000)



function getData(){
    fs.readFile('text.txt',function(err,data){
        if(err){
            return false;
        }else{
            // console.log(data.toString());
            // return data.toString();
            eventEmitter.emit('getData',data.toString());
        }

    })
}

//console.log('getData:',getData())
getData();
eventEmitter.on('getData',function(data){
    console.log('getData:',data)
})