const Koa = require('koa');
const render = require('koa-art-template');
var path = require('path');
var Router = require("koa-router");

const app = new Koa();
var router = new Router();
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
});
router.get('/',async (ctx)=>{
    let data={
        name:'zhangsan'
    }
    await ctx.render('arttemplate',{data:data});
})

app
.use(router.routes())
.use(router.allowedMethods());

app.listen(8001);