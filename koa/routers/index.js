var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var config = require(path.resolve('plugins/read-config.js'));
module.exports = function(){
    var router = new Router();
    router.get('/index', function *(){
        yield (sendfile(this, path.resolve('public/pages/index.html')));
        if(!this.status){
            this.throw(404);
        }
    }).get('/module', function *(){
        yield (sendfile(this, path.resolve('public/pages/module.html')));
        if(!this.status){
            this.throw(404);
        }
    });
    return router;
};

