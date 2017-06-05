var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();
    //列表
    router.post('/business/contract/list', function*(){
       var $self = this;
       var pageData = $self.request.body;
       pageData.userToken = $self.cookies.get('token');
        yield (server().contractList(pageData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/business/contract/count', function*(){
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().contractCount(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
        //添加
    }).post('/business/ssui/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().contractAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
        //编辑ID
    }).post('/business/ssui/getOneById', function*(){
        var $self = this;
        var EditId = $self.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().contractById(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
            //编辑
    }).post('/business/ssui/edit', function*(){
        var Edit = this.request.body;
        Edit.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().contractEidt(Edit)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
        //删除
    }).post('/business/ssui/delete', function*(){
        var $self = this;
        var delData = $self.request.body;
        delData.userToken = $self.cookies.get('token');
        yield (server().contractDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
                            //汇总
    }).post('/business/contract/collect', function*(){
       var $self = this;
       var collectData = $self.request.body;
       collectData.userToken = $self.cookies.get('token');
        yield (server().contractCollect(collectData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
            //外包
    }).post('/business/outsource/list', function*(){
       var $self = this;
       var pageData = this.request.body;
       pageData.userToken = this.cookies.get('token');
        yield (server().outsourceList(pageData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/business/outsource/count', function*(){
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().outsourceCount(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
        //添加
    }).post('/business/outsource/add', function*(){
            var addData = this.request.body;
            addData.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().outsourceAdd(addData)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type', 'application/json;charset=utf-8');
                    $self.body = error.error;
                    console.error(error.error);
                }));
        //编辑ID
    }).post('/business/outsource/getOneById', function*(){
            var EditId = this.request.body;
            EditId.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().outsourceById(EditId)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type', 'application/json;charset=utf-8');
                    $self.body = error.error;
                    console.error(error.error);
                }));
            //编辑
    }).post('/business/outsource/edit', function*(){
        var Edit = this.request.body;
        Edit.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().outsourceEidt(Edit)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
        //删除
    }).post('/business/outsource/delete', function*(){
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().outsourceDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
                            //外包汇总
    }).post('/business/outsource/collect', function*(){
       var $self = this;
       var collectData = this.request.body;
       collectData.userToken = this.cookies.get('token');
        yield (server().outsourceCollect(collectData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/listSetting', function*(){
        var $self = this;
        var setting = this.request.query;
        setting.userToken = $self.cookies.get('token');
        yield (server().listSetting(setting)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countSetting', function*(){
        var $self = this;
        yield (server().countSetting()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getpermit', function*(){
        var $self = this;
        var getId = $self.request.query;
        yield (server().getpermit(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getListpermit', function*(){
        var $self = this;
        var listPermit = $self.request.query;
        yield (server().getListpermit(listPermit)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editSetting', function*(){
        var $self = this;
        var editSet = $self.request.body;
        editSet.userToken = $self.cookies.get("token");
        yield (server().editSetting(editSet)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })

    

    return router;
};
