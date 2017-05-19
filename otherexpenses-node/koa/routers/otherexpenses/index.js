var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();
                          //
    //列表
    router.get('/expenses/message/list', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().expensesList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/expenses/message/count', function*(){
        var $self = this;
        yield (server().expensesCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //添加
    }).post('/expenses/message/add', function*(){
            var addData = this.request.body;
            addData.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().expensesAdd(addData)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        //编辑ID
    }).post('/expenses/message/getOneById', function*(){
            var EditId = this.request.body;
            EditId.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().expensesById(EditId)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                        $self.body = {'msg' : '请求错误！', errno : 3};
                        $self.status = 408;marketserveapplyDelete
                    }
                }));
            //编辑
    }).post('/expenses/message/edit', function*(){
                var Edit = this.request.body;
                Edit.userToken = this.cookies.get('token');
                var $self = this;
                yield (server().expensesEidt(Edit)
                    .then((parsedBody) =>{
                        var responseText = JSON.parse(parsedBody);
                        $self.body = responseText;
                    }).catch((error) =>{
                        if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                            $self.body = {'msg' : '请求错误！', errno : 3};
                            $self.status = 408;
                        }
                    }));
        //删除
    }).post('/expenses/message/delete', function*(){
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().expensesDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
         //地区汇总
    }).get('/expenses/message/arealist', function*(){
       var $self = this;
       var page = this.request.query;
       console.log(page)
        yield (server().areaList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
            //项目组汇总
    }).get('/expenses/message/projectgrouplist', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().projectgroupList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //类型汇总
    }).get('/expenses/message/projectTypeList', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().projectTypeList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
            //项目名称汇总
    }).get('/expenses/message/projectNameList', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().projectNameList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/user/logout', function*(){//退出用户
        var $self = this;
        var token = {token:$self.cookies.get('token')};
        yield (server().logout(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                if(responseText.code==0){
                    $self.cookies.set('token','');
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
