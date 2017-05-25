var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();
    //查询总记录数
    router.get('/moneyAll/all', function*(){
        var $self = this;
        var page = $self.request.query;
        yield (server().moneyAll(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //新增资金流水
    }).post('/moneyAdd/add', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().moneyAdd(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //删除资金流水
    }).get('/moneyDelete/delete', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        var $self = $self;
        yield (server().moneyDelete(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
        }));
    //根据id查询资金流水
     }).get('/moneyId/id', function*(){
         var $self = this;
         var page = $self.request.query;
         yield (server().moneyId(page)
             .then((parsedBody) =>{
             var responseText = JSON.parse(parsedBody);
             $self.body = responseText;
     }).catch((error) =>{
             $self.set('Content-Type','application/json;charset=utf-8');
         $self.body=error.error;
         console.error(error.error);
     }));
        //条件汇总
     }).post('/moneyConditionsAll/conditions', function*(){
         var $self = this;
         var EditId = this.request.body;
         yield (server().moneyConditionsAll(EditId)
             .then((parsedBody) =>{
             var responseText = JSON.parse(parsedBody);
         $self.body = responseText;
     }).catch((error) =>{
             $self.set('Content-Type','application/json;charset=utf-8');
         $self.body=error.error;
         console.error(error.error);
     }));
    //编辑资金流水
    }).post('/moneyEdit/edit', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().moneyEdit(EditId)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //月汇总
    }).post('/moneyMonthAll/month', function*(){
        var $self = this;
        var monthCollect = $self.request.body;
        yield (server().moneyMonthAll(monthCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //列表分页查询
     }).get('/moneyList/list', function*(){
       var $self = this;
       var page = $self.request.query;
        yield (server().moneyList(page)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
    //地区分析
    }).post('/moneyArea/Area', function*(){
        var $self = this;
        var EditId = this.request.body;
        yield (server().moneyArea(EditId)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //项目分析
    }).post('/moneyProject/Project', function*(){
        var $self = this;
        var EditId = this.request.body;
        yield (server().moneyProject(EditId)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //项目组分析
    }).post('/moneyGroup/Group', function*(){
        var $self = this;
        var EditId = this.request.body;
        yield (server().moneyGroup(EditId)
            .then((parsedBody) =>{
            var responseText = JSON.parse(parsedBody);
            $self.body = responseText;
        }).catch((error) =>{
            $self.set('Content-Type','application/json;charset=utf-8');
            $self.body=error.error;
            console.error(error.error);
        }));
        //分页
    }).get('/countRecord', function*(){
        var $self = this;
        var page = $self.request.query;
        yield (server().moneyAll(page)
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
