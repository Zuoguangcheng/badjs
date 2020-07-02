const Koa = require('koa');
const app = new Koa();
const staticFiles = require('koa-static')
const path = require('path');

var router = require('koa-router')()
var views = require('koa-views');
 
app.use(async (ctx, next) => {
    await next();
})
app.use(staticFiles(path.join(__dirname + '/static')))

// Must be used before any router is used
app.use(views(__dirname + '/views'));

router.get('/', async (ctx, next) => {
 await ctx.render('index', {
    user: 'John'
  });
})


app.use(router.routes());  
app.use(router.allowedMethods());


app.listen(3005).on('clientError', (err, socket) => {
    handleErr(err, 'caught_by_koa_on_client_error');
    socket.end('HTTP/1.1 400 Bad Request Request invalid\r\n\r\n');
});

console.log('当前服务端口-3005')
