var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();
    
    //列表 税金管理  
    router.get('/check/checkindex/list', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().checkindexList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/check/checkindex/count', function*(){
        var $self = this;
        yield (server().checkindexCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //添加
    }).post('/check/checkindex/add', function*(){
            var addData = this.request.body;
            addData.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().checkindexAdd(addData)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        //编辑ID
    }).post('/check/checkindex/getOneById', function*(){
            var EditId = this.request.body;
            EditId.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().checkindexById(EditId)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
            //编辑
    }).post('/check/checkindex/editData', function*(){
                var EditData = this.request.body;
                EditData.userToken = this.cookies.get('token');
                var $self = this;
                yield (server().checkindexEidt(EditData)
                    .then((parsedBody) =>{
                        var responseText = JSON.parse(parsedBody);
                        $self.body = responseText;
                    }).catch((error) =>{
                         $self.set('Content-Type','application/json;charset=utf-8');
                         $self.body=error.error;
                    }));
        //删除
    }).post('/check/checkindex/delete', function*(){
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().checkindexDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
            //资金核算
    }).get('/check/checkincome/list', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().checkincomeList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/check/checkincome/count', function*(){
        var $self = this;
        yield (server().checkincomeCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //添加
    }).post('/check/checkincome/add', function*(){
            var addData = this.request.body;
            addData.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().checkincomeAdd(addData)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        //编辑ID
    }).post('/check/checkincome/getOneById', function*(){
            var EditId = this.request.body;
            EditId.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().checkincomeById(EditId)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
            //编辑
    }).post('/check/checkincome/editData', function*(){
                var EditData = this.request.body;
                EditData.userToken = this.cookies.get('token');
                var $self = this;
                yield (server().checkincomeEidt(EditData)
                    .then((parsedBody) =>{
                        var responseText = JSON.parse(parsedBody);
                        $self.body = responseText;
                    }).catch((error) =>{
                         $self.set('Content-Type','application/json;charset=utf-8');
                         $self.body=error.error;
                    }));
        //删除
    }).post('/check/checkincome/delete', function*(){
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().checkincomeDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
            //获取所有地区
    }).get('/check/checkincome/listArea', function*(){
        var $self = this;
        yield (server().listArea()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //地区汇总
    }).post('/check/checkincome/ctArea', function*(){
            var data = this.request.body;
            var $self = this;
            yield (server().ctArea(data)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
            //获取所有的项目组
    }).get('/check/checkincome/listGroup', function*(){
        var $self = this;
        yield (server().listGroup()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
            //项目组汇总
    }).post('/check/checkincome/ctGroup', function*(){
            var data = this.request.body;
            var $self = this;
            yield (server().ctGroup(data)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
            //获取所有的的项目名称
    }).get('/check/checkincome/listProject', function*(){
        var $self = this;
        yield (server().listProject()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
            //项目名称汇总
    }).post('/check/checkincome/ctProject', function*(){
            var data = this.request.body;
            var $self = this;
            yield (server().ctProject(data)
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
