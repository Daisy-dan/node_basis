/**
 * cookie session 都是在同一个域下，不同页面之间的数据共享
 * session 数据保存在服务器上，更安全
 */
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

  /**
   * koa中没法设置中文的value
   */
  // ctx.cookies.set('user','lisi',{
  //   maxAge:1000,
  //   path:'',   //配置可以访问的页面
  //   domain:'', //默认当前域下面的页面都可以访问
  //   httpOnly:false  //true 表示只有服务器端可以访问，false 表示客户端（js），服务器端都可以访问
  // })
  var name = new Buffer('张三').toString('base64');
  ctx.cookies.set('user',name,{});
  var user = ctx.cookies.get('user');
  var userinfo = new Buffer(user,'base64').toString();
  console.log(userinfo);

    let data={
        name:'zhangsan'
    }
    await ctx.render('arttemplate',{data:data});
})

app
.use(router.routes())
.use(router.allowedMethods());

app.listen(8001);