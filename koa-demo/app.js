var Koa = require("koa");
var Router = require("koa-router");

var app = new Koa();
var router = new Router();


//ctx 上下文context，包含了request 和 response 等信息
router.get('/',async (ctx)=>{
    ctx.body='首页';        //返回数据，相当于原生里面的res.writeHead()res.end()
}).get('/news',async (ctx)=>{

    // 获取get传值
    console.log(ctx.query);  //推荐使用

    console.log(ctx.querystring);
    console.log(ctx.request.url);
    console.log(ctx.request.query);
    console.log(ctx.request.querystring);
    console.log(ctx.url);
    ctx.body='新闻页';
}).get('/newscontent/:aid',async (ctx)=>{
    console.log(ctx.params);
    ctx.body='新闻详情页';
});

app
.use(router.routes())
.use(router.allowedMethods());

app.listen(8001)