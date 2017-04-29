var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();

    router.get('/problemaccept/listProblemAccept', function*(){ //项目执行中的问题受理列表
        var $self = this;
        var page = $self.request.query;
        yield (server().problemList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/problemaccept/add', function*(){//项目执行中的问题受理添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = this.cookies.get('token');
        yield (server().problemAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/problemaccept/edit', function*(){//项目执行中的问题受理分析
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = this.cookies.get('token');
        yield (server().problemEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/problemaccept/delete', function*(){//删除项目执行中的问题受理
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = this.cookies.get('token');
        yield (server().problemDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/problemaccept/count', function*(){//获取项目执行中的问题受理总条数
        var $self = this;
        yield (server().getProblemTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/problemaccept/problem', function*(){//获取id
        var $self = this;
        var findIdData = $self.request.query;
        yield (server().findPrombleId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/problemhandlingresult/list', function*(){ //确认问题处理结果列表
        var $self = this;
        var page = $self.request.query;
        yield (server().confirmList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/problemhandlingresult/add', function*(){//确认问题处理结果添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = this.cookies.get('token');
        yield (server().confirmAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/problemhandlingresult/edit', function*(){//确认问题处理结果编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().confirmEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/problemhandlingresult/delete', function*(){//删除确认问题处理结果
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = this.cookies.get('token');
        yield (server().confirmDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/problemhandlingresult/count', function*(){//获取确认问题处理结果总条数
        var $self = this;
        yield (server().getConfirmTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/problemhandlingresult/result', function*(){//获取id确认问题处理结果
        var $self = this;
        var findIdData = $self.request.query;
        yield (server().findConfirmId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/involvedprocessingtask/list', function*(){ //参与处理人员的任务分配列表
        var $self = this;
        var page = $self.request.query;
        yield (server().taskList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/involvedprocessingtask/add', function*(){//参与处理人员的任务分配添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = this.cookies.get('token');
        yield (server().taskAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/involvedprocessingtask/edit', function*(){//参与处理人员的任务分配编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().taskEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/involvedprocessingtask/delete', function*(){//删除参与处理人员的任务分配
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = this.cookies.get('token');
        yield (server().taskDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/involvedprocessingtask/count', function*(){//获取参与处理人员的任务分配总条数
        var $self = this;
        yield (server().getTaskTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/involvedprocessingtask/task', function*(){//获取id参与处理人员的任务分配
        var $self = this;
        var findIdData = $self.request.query;
        yield (server().findTaskId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/collect/summary', function*(){ //汇总项目执行中的问题受理及处理结果
        var $self = this;
        var page = $self.request.query;
        yield (server().summaryList(page)
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
