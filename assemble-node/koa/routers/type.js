/**
 * Created by Bjike on 2017/5/16.
 */
var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/type.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();

    //获取列表页面
    router.get('/index', function *(){
        yield (sendfile(this, path.resolve('static/index.html')));
        if(!this.status){
            this.throw(404);
        }
    }).get('/module/list', function*(){
        var $self = this;
        yield (server().moduleList()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                if(responseText.code == 0){
                    $self.body = responseText;
                }

            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/module/listname', function*(){
        var $self = this;
        var name = this.request.query;
        yield (server().listname(name)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                if(responseText.code == 0){
                    $self.body = responseText;
                }
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/addmodule', function*(){
        var $self = this;
        var addData = this.request.body;
        yield (server().addmodule(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                if(responseText.code == 0){
                    $self.body = responseText;
                }
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/delmodule', function*(){
        var $self = this;
        var delId = this.request.query;
        yield (server().delmodule(delId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                if(responseText.code == 0){
                    $self.body = responseText;
                }
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/moduleSave', function*(){
        var $self = this;
        var saveData = this.request.body;
        yield (server().moduleSave(saveData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                if(responseText.code == 0){
                    $self.body = responseText;
                }
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })
    return router;
};
