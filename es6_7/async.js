/**
 * es7
 * async 是异步方法
 * await 是等待异步方法执行完成，可以获取异步方法里面的数据，但是必须得在异步方法里面
 */

async function a(){
    console.log(2)
    return 'aaa'
}

console.log(a())  //Promise { 'aaa' }

async function b(){
    console.log(1)
    var c = await a();
    console.log(c)     //aaa
    console.log(3)
}
b();


function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var name='zhangsan';
            resolve(name);
        },1000)
    })
}
//方法一
// getData().then((data)=>{
//     console.log(data);
// })

//方法二
async function text(){
    var data=await getData();
    console.log(data);
}
text();
