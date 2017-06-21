var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();

    //列表 节日礼品
    router.get('/legalholiday/gift/list', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().giftList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/legalholiday/gift/count', function*(){
        var $self = this;
        yield (server().giftCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //添加
    }).post('/legalholiday/gift/add', function*(){
            var addData = this.request.body;
            addData.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().giftAdd(addData)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        //编辑ID
    }).post('/legalholiday/gift/getOneById', function*(){
            var EditId = this.request.body;
            EditId.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().giftById(EditId)
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
    }).post('/legalholiday/gift/edit', function*(){
                var Edit = this.request.body;
                Edit.userToken = this.cookies.get('token');
                var $self = this;
                yield (server().giftEidt(Edit)
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
    }).post('/legalholiday/gift/delete', function*(){
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().giftDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    //节假日时间安排
    }).get('/legalholiday/festivaltime/list', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().festivaltimeList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/legalholiday/festivaltime/count', function*(){
        var $self = this;
        yield (server().festivaltimeCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //添加
    }).post('/legalholiday/festivaltime/add', function*(){
            var addData = this.request.body;
            addData.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().festivaltimeAdd(addData)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        //编辑ID
    }).post('/legalholiday/festivaltime/getOneById', function*(){
            var EditId = this.request.body;
            EditId.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().festivaltimeById(EditId)
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
    }).post('/legalholiday/festivaltime/edit', function*(){
                var Edit = this.request.body;
                Edit.userToken = this.cookies.get('token');
                var $self = this;
                yield (server().festivaltimeEidt(Edit)
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
    }).post('/legalholiday/festivaltime/delete', function*(){
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().festivaltimeDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                 $self.set('Content-Type','application/json;charset=utf-8');
                 $self.body=error.error;
            }));
        //放假方案
    }).get('/legalholiday/project/list', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().projectList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/legalholiday/project/count', function*(){
        var $self = this;
        yield (server().projectCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
        //添加
    }).post('/legalholiday/project/add', function*(){
            var addData = this.request.body;
            addData.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().projectAdd(addData)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        //编辑ID
    }).post('/legalholiday/project/getOneById', function*(){
            var EditId = this.request.body;
            EditId.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().projectById(EditId)
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
    }).post('/legalholiday/project/edit', function*(){
                var Edit = this.request.body;
                Edit.userToken = this.cookies.get('token');
                var $self = this;
                yield (server().projectEidt(Edit)
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
    }).post('/legalholiday/project/delete', function*(){
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().projectDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                 $self.set('Content-Type','application/json;charset=utf-8');
                 $self.body=error.error;
            }));
            //获取所有节假日
    }).get('/legalholiday/allFestival/list', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().allFestivalList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/legalholiday/checkTime/list', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().checkTimeList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/legalholiday/checkTime/count', function*(){
        var $self = this;
         var page = this.request.query;
        yield (server().checkTimeCount(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/legalholiday/checkPro/list', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().checkProList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/legalholiday/checkPro/count', function*(){
        var $self = this;
        var page = this.request.query;
        yield (server().checkProCount(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/legalholiday/checkPeo/list', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().checkPeoList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/legalholiday/checkPeo/count', function*(){
        var $self = this;
        var page = this.request.query;
        yield (server().checkPeoCount(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/legalholiday/checkGift/list', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().checkGiftList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/legalholiday/checkGift/count', function*(){
        var $self = this;
        var page = this.request.query;
        yield (server().checkGiftCount(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/legalholiday/checkNotice/list', function*(){
       var $self = this;
       var page = this.request.query;
        yield (server().checkNoticeList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/legalholiday/checkNotice/count', function*(){
        var $self = this;
        var page = this.request.query;
        yield (server().checkNoticeCount(page)
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
