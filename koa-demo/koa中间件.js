var Koa = require("koa");
var Router = require("koa-router");

var app = new Koa();
var router = new Router();
app.use( async (ctx,next)=>{
    console.log('01这是一个中间件')
    await next();
    console.log('05匹配路由完以后又会返回来执行中间件')

})
app.use( async (ctx,next)=>{
    console.log('02这是一个中间件')
    await next();
    console.log('04匹配路由完以后又会返回来执行中间件')

})
router.get('/', async (ctx)=>{
    ctx.body='首页';
})
router.get('/news', async (ctx)=>{
    console.log('03匹配路由')

    ctx.body='新闻';
});

app
.use(router.routes())
.use(router.allowedMethods());

app.listen(8001)