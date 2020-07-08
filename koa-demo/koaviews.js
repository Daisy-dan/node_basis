/**
 * 中间件
 * koa-views 渲染模板
 * koa-bodyparser 获取数据
 * koa-static 处理静态资源
 * 
 */

var Koa = require("koa");
var router = require("koa-router")();
//中间件koa-views 渲染模板
var views = require('koa-views');
//原生node获取post数据
var common = require('./module/common');
//中间件koa-bodyparser 获取数据
var bodyParser = require('koa-bodyparser');
//中间件koa-static 处理静态资源
const serve = require('koa-static');

var app = new Koa();


// 配置第三方中间件，模板引擎中间件  2种方法
//app.use(views('views',{map:{html:'ejs'}}))     //模板后缀名必须.html
app.use(views('views', {
    extension:'ejs'
}))


/**
 * 配置bodyParser中间件
 */
app.use(bodyParser());
// app.use(async (ctx,next)=>{
//     ctx.body=ctx.request.body;
//     await next();
// })

/**
 * 配置koa-static中间件,可以配置多个
 */
app.use(serve(__dirname + '/static'));

//中间件配置公共数据信息 state
app.use(async (ctx,next)=>{
    ctx.state.username='zhangsan';
    await next();
})


router.get('/',async (ctx)=>{

    var data={
        a:'hello world',
        b:"<h2>绑定html数据</h2>",
        c:false,
        list:[{
            name:'zhangsan',
            age:13
        },{
            name:'lisi',
            age:13
        }]
    };

    await ctx.render('index',{data:data});
   
    
}).get('/news',async (ctx)=>{

    // 获取get传值
    console.log(ctx.query);
    ctx.body='新闻页';
})

/**
 * 原生nodejs在koa中获取post数据
 * 配置好bodyParser中间件，bodyParser在koa中获取post数据
 */
 router.post('/doAdd',async (ctx)=>{
//     var data=await common.getPostData(ctx);
//     //input的name属性必须写上，不然获取不到值
//     console.log('sss',data);
//     ctx.body=data;

    ctx.body=ctx.request.body;
 })





app
.use(router.routes())
.use(router.allowedMethods());

app.listen(8001)