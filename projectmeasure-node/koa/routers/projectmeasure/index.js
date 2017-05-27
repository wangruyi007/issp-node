var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename, '../')) + '/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function () {
    var router = new Router();
    //项目费用
    //列表
    router.get('/projectmeasure/coststatus/list', function* () {
        var $self = this;
        var page = this.request.query;
        page.userToken = this.cookies.get('token');
        yield (server().coststatusList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
    }).get('/projectmeasure/coststatus/count', function* () {
        var $self = this;
        var count = this.request.query;
        count.userToken = this.cookies.get('token');
        yield (server().coststatusCount(count)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
        //添加
    }).post('/projectmeasure/coststatus/add', function* () {
        var addData = this.request.body;
        addData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().coststatusAdd(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
        //编辑ID
    }).post('/projectmeasure/coststatus/getOneById', function* () {
        var EditId = this.request.body;
        EditId.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().coststatusById(EditId)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408; marketserveapplyDelete
                }
            }));
        //编辑
    }).post('/projectmeasure/coststatus/edit', function* () {
        var Edit = this.request.body;
        Edit.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().coststatusEidt(Edit)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //删除
    }).post('/projectmeasure/coststatus/delete', function* () {
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().coststatusDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //项目基本信息 
    }).get('/projectmeasure/basicinfo/list', function* () {
        var $self = this;
        var page = this.request.query;
        page.userToken = this.cookies.get('token');
        yield (server().basicinfoList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;

            }));
    }).get('/projectmeasure/basicinfo/count', function* () {
        var $self = this;
        var count = this.request.query;
        count.userToken = this.cookies.get('token');
        yield (server().basicinfoCount(count)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
        //添加
    }).post('/projectmeasure/basicinfo/add', function* () {
        var addData1 = this.request.body;
        addData1.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().basicinfoAdd(addData1)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error
            }));
        //编辑ID
    }).post('/projectmeasure/basicinfo/getOneById', function* () {
        var EditId = this.request.body;
        EditId.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().basicinfoById(EditId)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408; marketserveapplyDelete
                }
            }));
        //编辑
    }).post('/projectmeasure/basicinfo/edit', function* () {
        var Edit = this.request.body;
        Edit.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().basicinfoEidt(Edit)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //删除
    }).post('/projectmeasure/basicinfo/delete', function* () {
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().basicinfoDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //多项目单个界面
    }).get('/projectmeasure/msui/list', function* () {
        var $self = this;
        var page = this.request.query;
        page.userToken = this.cookies.get('token');
        yield (server().msuiList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
    }).get('/projectmeasure/msui/count', function* () {
        var $self = this;
        var count = this.request.query;
        count.userToken = this.cookies.get('token');
        yield (server().msuiCount(count)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
        //添加
    }).post('/projectmeasure/msui/add', function* () {
        var addData = this.request.body;
        addData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().msuiAdd(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
        //编辑ID
    }).post('/projectmeasure/msui/getOneById', function* () {
        var EditId = this.request.body;
        EditId.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().msuiById(EditId)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408; marketserveapplyDelete
                }
            }));
        //编辑
    }).post('/projectmeasure/msui/edit', function* () {
        var Edit = this.request.body;
        Edit.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().msuiEidt(Edit)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //删除
    }).post('/projectmeasure/msui/delete', function* () {
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().msuiDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //单个项目单个界面
    }).get('/projectmeasure/ssui/list', function* () {
        var $self = this;
        var page = this.request.query;
        page.userToken = this.cookies.get('token');
        yield (server().ssuiList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
    }).get('/projectmeasure/ssui/count', function* () {
        var $self = this;
        var count = this.request.query;
        count.userToken = this.cookies.get('token');
        yield (server().ssuiCount(count)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
        //添加
    }).post('/projectmeasure/ssui/add', function* () {
        var addData = this.request.body;
        addData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().ssuiAdd(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
        //编辑ID
    }).post('/projectmeasure/ssui/getOneById', function* () {
        var EditId = this.request.body;
        EditId.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().ssuiById(EditId)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408; marketserveapplyDelete
                }
            }));
        //编辑
    }).post('/projectmeasure/ssui/edit', function* () {
        var Edit = this.request.body;
        Edit.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().ssuiEidt(Edit)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //删除
    }).post('/projectmeasure/ssui/delete', function* () {
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().ssuiDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //单个项目多个界面
    }).get('/projectmeasure/smui/list', function* () {
        var $self = this;
        var page = this.request.query;
        page.userToken = this.cookies.get('token');
        yield (server().smuiList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
    }).get('/projectmeasure/smui/count', function* () {
        var $self = this;
        var count = this.request.query;
        count.userToken = this.cookies.get('token');
        yield (server().smuiCount(count)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
        //添加
    }).post('/projectmeasure/smui/add', function* () {
        var addData = this.request.body;
        addData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().smuiAdd(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
        //编辑ID
    }).post('/projectmeasure/smui/getOneById', function* () {
        var EditId = this.request.body;
        EditId.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().smuiById(EditId)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408; marketserveapplyDelete
                }
            }));
        //编辑
    }).post('/projectmeasure/smui/edit', function* () {
        var Edit = this.request.body;
        Edit.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().smuiEidt(Edit)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //删除
    }).post('/projectmeasure/smui/delete', function* () {
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().smuiDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //多个项目多个界面mmui
    }).get('/projectmeasure/mmui/list', function* () {
        var $self = this;
        var page = this.request.query;
        page.userToken = this.cookies.get('token');
        yield (server().mmuiList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
    }).get('/projectmeasure/mmui/count', function* () {
        var $self = this;
        var count = this.request.query;
        count.userToken = this.cookies.get('token');
        yield (server().mmuiCount(count)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
        //添加
    }).post('/projectmeasure/mmui/add', function* () {
        var addData = this.request.body;
        addData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().mmuiAdd(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
        //编辑ID
    }).post('/projectmeasure/mmui/getOneById', function* () {
        var EditId = this.request.body;
        EditId.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().mmuiById(EditId)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408; marketserveapplyDelete
                }
            }));
        //编辑
    }).post('/projectmeasure/mmui/edit', function* () {
        var Edit = this.request.body;
        Edit.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().mmuiEidt(Edit)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //删除
    }).post('/projectmeasure/mmui/delete', function* () {
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().mmuiDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //项目人员需求
    }).get('/projectmeasure/personDemand/list', function* () {
        var $self = this;
        var page = this.request.query;
        page.userToken = this.cookies.get('token');
        yield (server().personDemandList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
    }).get('/projectmeasure/personDemand/count', function* () {
        var $self = this;
        var count = this.request.query;
        count.userToken = this.cookies.get('token');
        yield (server().personDemandCount(count)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
        //添加
    }).post('/projectmeasure/personDemand/add', function* () {
        var addData = this.request.body;
        addData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().personDemandAdd(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
        //编辑ID
    }).post('/projectmeasure/personDemand/getOneById', function* () {
        var EditId = this.request.body;
        EditId.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().personDemandById(EditId)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408; marketserveapplyDelete
                }
            }));
        //编辑
    }).post('/projectmeasure/personDemand/edit', function* () {
        var Edit = this.request.body;
        Edit.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().personDemandEidt(Edit)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //删除
    }).post('/projectmeasure/personDemand/delete', function* () {
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().personDemandDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //项目测算邮件发送
    }).get('/projectmeasure/measuresummary/list', function* () {
        var $self = this;
        var page = this.request.query;
        page.userToken = this.cookies.get('token');
        yield (server().measuresummaryList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
    }).get('/projectmeasure/measuresummary/count', function* () {
        var $self = this;
        var count = this.request.query;
        count.userToken = this.cookies.get('token');
        yield (server().measuresummaryCount(count)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
        //添加
    }).post('/projectmeasure/measuresummary/add', function* () {
        var addData = this.request.body;
        addData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().measuresummaryAdd(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
        //编辑ID
    }).post('/projectmeasure/measuresummary/getOneById', function* () {
        var EditId = this.request.body;
        EditId.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().measuresummaryById(EditId)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408; marketserveapplyDelete
                }
            }));
        //编辑
    }).post('/projectmeasure/measuresummary/edit', function* () {
        var Edit = this.request.body;
        Edit.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().measuresummaryEidt(Edit)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //删除
    }).post('/projectmeasure/measuresummary/delete', function* () {
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().measuresummaryDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //冻结
    }).post('/projectmeasure/measuresummary/congeal', function* () {//冻结
        var congealData = this.request.body;
        congealData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().measuresummaryCongeal(congealData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
        //解冻
    }).post('/projectmeasure/measuresummary/thaw', function* () {
        var thawData = this.request.body;
        thawData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().measuresummaryUnfreeze(thawData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
            }));
    }).get('/user/logout', function*(next){
        var url = this.request.query;
        this.cookies.set("absUrl",url.absurl);
        this.body = {
            code:0,
            msg:"重定向"
        };
    }).get('/listSetting', function* () {
        var $self = this;
        var setting = this.request.query;
        setting.token = $self.cookies.get('token');
        yield (server().listSetting(setting)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/countSetting', function* () {
        var $self = this;
        yield (server().countSetting()
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/getpermit', function* () {
        var $self = this;
        var getId = $self.request.query;
        yield (server().getpermit(getId)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/getListpermit', function* () {
        var $self = this;
        var listPermit = $self.request.query;
        yield (server().getListpermit(listPermit)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/editSetting', function* () {
        var $self = this;
        var editSet = $self.request.body;
        editSet.token = $self.cookies.get("token");
        yield (server().editSetting(editSet)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    })

    return router;
};
