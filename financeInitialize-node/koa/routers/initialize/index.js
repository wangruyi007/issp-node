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
    router.get('/setting/currency/list', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().currencyList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/setting/currency/count', function*(){
        var $self = this;
        yield (server().currencyCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //添加
    }).post('/setting/currency/add', function*(){
            var addData = this.request.body;
            addData.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().currencyAdd(addData)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        //编辑ID
    }).post('/setting/currency/getOneById', function*(){
            var EditId = this.request.body;
            EditId.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().currencyById(EditId)
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
    }).post('/setting/currency/edit', function*(){
                var Edit = this.request.body;
                Edit.userToken = this.cookies.get('token');
                var $self = this;
                yield (server().currencyEidt(Edit)
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
    }).post('/setting/currency/delete', function*(){
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().currencyDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
                            //一级科目 
    }).get('/setting/firstsubject/list', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().firstsubjectList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/setting/firstsubject/count', function*(){
        var $self = this;
        yield (server().firstsubjectCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //添加
    }).post('/setting/firstsubject/add', function*(){
            var addData = this.request.body;
            addData.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().firstsubjectAdd(addData)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        //编辑ID
    }).post('/setting/firstsubject/getOneById', function*(){
            var EditId = this.request.body;
            EditId.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().firstsubjectById(EditId)
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
    }).post('/setting/firstsubject/edit', function*(){
                var Edit = this.request.body;
                Edit.userToken = this.cookies.get('token');
                var $self = this;
                yield (server().firstsubjectEidt(Edit)
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
    }).post('/setting/firstsubject/delete', function*(){
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().firstsubjectDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
                            // 类别  -> 
    }).get('/sort/common/list', function*(){
       var $self = this;
       var pageData = this.request.query;
        yield (server().sortList(pageData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/sort/common/count', function*(){
        var $self = this;
        var countData = this.request.query;
        yield (server().sortCount(countData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //添加  
    }).get('/sort/common/firstList', function*(){
        var $self = this;
        var firstListData = this.request.query;
        yield (server().firstList(firstListData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //添加   
    }).post('/sort/common/add', function*(){
            var addData = this.request.body;
            addData.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().sortAdd(addData)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        //编辑ID
    }).post('/sort/common/getOneById', function*(){
            var EditId = this.request.body;
            EditId.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().sortById(EditId)
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
    }).post('/sort/common/edit', function*(){
                var Edit = this.request.body;
                Edit.userToken = this.cookies.get('token');
                var $self = this;
                yield (server().sortEidt(Edit)
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
    }).post('/sort/common/delete', function*(){
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().sortDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
                            //账户 
    }).get('/sort/account/list', function*(){
       var $self = this;
       var pageData = this.request.query;
        yield (server().accountList(pageData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/sort/account/count', function*(){
        var $self = this;
        var countData = this.request.query;
        yield (server().accountCount(countData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //获取 二级
    }).get('/sort/account/SecondList', function*(){
        var $self = this;
        var SecondListData = this.request.query;
        yield (server().SecondList(SecondListData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //获取 三级  
    }).get('/sort/account/ThirdList', function*(){
        var $self = this;
        var ThirdListData = this.request.query;
        yield (server().ThirdList(ThirdListData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //添加   
    }).post('/sort/account/add', function*(){
            var addData = this.request.body;
            addData.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().accountAdd(addData)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        //编辑ID
    }).post('/sort/account/getOneById', function*(){
            var EditId = this.request.body;
            EditId.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().accountById(EditId)
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
    }).post('/sort/account/edit', function*(){
                var Edit = this.request.body;
                Edit.userToken = this.cookies.get('token');
                var $self = this;
                yield (server().accountEidt(Edit)
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
    }).post('/sort/account/delete', function*(){
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().accountDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
    }).get('/sort/account/allFirstsubject', function*(){
        var $self = this;
        yield (server().allFirstsubject()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //获取 二级
    })

    return router;
};
