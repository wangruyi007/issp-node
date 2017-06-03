const Koa = require('koa');//koa web应用
const path = require('path');//路径
const fs = require('fs');
const router = require("koa-router")();//路由中间件
const session = require('koa-session');//cookie
const koaBody = require('koa-body');
const staticCache = require('koa-static-cache');
const routersPath = '/koa/routers/';
const sendfile = require('koa-sendfile');
const convert = require('koa-convert');
var configsCache = {};
const port = 9998;

const app = new Koa();
const config = require(path.resolve('plugins/read-config.js'));

function fileExists(path) {
    try {
        fs.accessSync(path, fs.F_OK);
    } catch (e) {
        return false;
    }
    return true;
}
app.keys = ['issp-node'];//session加密值
app.use(convert(session(app)));//使用cookie
app.use(convert(koaBody()));//必需要路由用之前使用,不然获取不到表单
router.get('/', function *(next) {//根路由
    var status = yield (sendfile(this, path.resolve('static/root/_res/html/index.html')));
    if (!status) {
        this.throw(404);
    }
});
router.get(/^\/module\/_config(?:\/.|$)/, function *(next) {
    var moduleName = this.url.substring(16).replace('.js','');
    var modules = moduleName.split('/');// 以'/'为分隔,第一个是模块名称,往后的为子模块
    if (moduleName == '') {
        this.throw(404);
    }
    var filePath = path.resolve('static/' + modules[0] + '/_res/js/' + (modules.shift(1) && modules.length > 0 ? modules.join('/') : '') + '/config.js');
    if(Object.getOwnPropertyNames(configsCache).length==1000){
        this.body = 'configsCache 对象缓存过大,请检查.';
        return
    }
    if (configsCache[moduleName] == undefined) {//缓存,下次不再判断文件是否存在
        if (fileExists(filePath)) {
            configsCache[moduleName] = true;
        } else {
            configsCache[moduleName] = false;
        }
    }
    if (configsCache[moduleName]) {
        var status = yield (sendfile(this, filePath));
        if (!status) {
            this.throw(404);
        }
    } else {
        this.body = '';
    }
});

//============路由===========

app.use(convert(require(path.join(__dirname,routersPath,'/bank/index.js'))().routes()));//出车管理

// router.post('/users', koaBody(),
//     function(){
//         console.log(this.request.body.file);
//         // => POST body
//         // this.body = JSON.stringify(this.request.body);
//     }
// );

app.use(convert(router.routes()));


//============静态文件资源===========
app.use(convert(staticCache(path.join(__dirname, '/static'), {
    // maxAge: 365 * 24 * 60 * 60
})));





app.listen(port, function () {
    console.log('koa server listening on port ' + port);
});