/**
 * 1. let 块作用域  const定义后不可修改
 *  */ 
if(true){

    let a=123;
    }
    //console.log(a); //a is not defined

/**
 * 2. 箭头函数
 *  */ 

setTimeout(()=>{

    console.log('执行');
},1000)

/**
 * 3. 对象、属性的简写 
 *  */ 
var name='zhangsan';
// var app={
//     name:name
//     }
    //简写 
    var app={
        name,
        run(){
            console.log(`${this.name}在跑步`);
        }
        }
console.log(app.name);
app.run();

/**
 * 4. 模板字符串
 */

var name='张三';
var age=20;
console.log(`${name}的年龄是${age}`)

/**
 * 5. Promise
 *  resolve 成功的回调韩红素
 *  reject失败的回调函数
 *  */ 
var p=new Promise(function(resolve,reject){
    setTimeout(()=>{
        var num=Math.random();
        if(num<0.5){
            resolve(num);
        }else{
            reject('大于0.5');
        }
    },1000)
})
p.then((data)=>{
    console.log(data)
});

var k=function(resolve,reject){
    setTimeout(function(){
        var name='李四';
        resolve(name);

    },1000);
}
var l=new Promise(k);
l.then((data)=>{
console.log(data)
})
    


