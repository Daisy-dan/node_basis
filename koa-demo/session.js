/**
 * cookie session 都是在同一个域下，不同页面之间的数据共享
 * session 数据保存在服务器上，更安全
 */

 /*
1.npm install koa-session  --save


2、const session = require('koa-session');


3、
 app.keys = ['some secret hurr'];

 const CONFIG = {
 key: 'koa:sess',
maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
};

app.use(session(CONFIG, app));


设置 session
ctx.session.username = "张三"

获取 session
 ctx.session.username
* */


const Koa = require('koa');
const render = require('koa-art-template');
var path = require('path');
var Router = require("koa-router");
const session = require('koa-session');

const app = new Koa();
var router = new Router();
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
});

app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess', /** 默认 */
  maxAge: 10000,  /*  cookie的过期时间        【需要修改】  */
  overwrite: true, /** (boolean) can overwrite or not (default true)    没有效果，默认 */
  httpOnly: true, /**  true表示只有服务器端可以获取cookie */
  signed: true, /** 默认 签名 */
  rolling: true, /** 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false） 【需要修改】 */
  renew: false, /** (boolean) renew session when session is nearly expired      【需要修改】*/
};
app.use(session(CONFIG, app));



router.get('/',async (ctx)=>{
  console.log(ctx.session.username)
    let data={
        name:'zhangsan'
    }
    await ctx.render('arttemplate',{data:data});
})
router.get('/login',async (ctx)=>{
  ctx.session.username="李四";
  ctx.body="登录成功"
})

app
.use(router.routes())
.use(router.allowedMethods());

app.listen(8001);