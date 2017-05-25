var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();

    router.get('/login', function *(next) {//根路由
        var status = yield (sendfile(this, path.resolve('static/login.html')));
        if (!status) {
            this.throw(404);
        }
    }).post('/user/login', function*(){
        var $self = this;
        var loginData = this.request.body;
        yield (server().userLogin(loginData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                console.info(responseText);
                if(responseText.code==0){
                    $self.cookies.set('token', responseText.data, {maxAge : 1000 * 60 * 60 * 24 * 7});
                    $self.body = responseText;
                }

            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    })
    return router;
};
