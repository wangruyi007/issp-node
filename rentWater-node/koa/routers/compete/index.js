var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();
    //添加房租缴费
    router.post('/rentAdd/add', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().rentAdd(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //上传附件
    }).post('/rentUpload/upload', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().rentUpload(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //获取地区
    }).get('/rentArea/area', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().rentArea(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //一个房租缴费
    }).get('/rentId/id', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().rentId(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑房租缴费
    }).post('/rentEdit/edit', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().rentEdit(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //房租总条数
    }).get('/rentCount/count', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().rentCount(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //删除房租缴费
    }).get('/rentDelete/delete', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        var $self = $self;
        yield (server().rentDelete(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
        //汇总
    }).get('/rentSummary/summary', function*(){
        var $self = this;
        var monthCollect = $self.request.query;
        monthCollect.userToken = $self.cookies.get('token');
        yield (server().rentSummary(monthCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //获取房租缴费列表
    }).get('/rentList/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().rentList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
//-----------------------------------员工住宿水电费-----------------------------------
    //编辑员工住宿水电费
    }).post('/waterEdit/edit', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().waterEdit(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //获取名字
    }).get('/waterName/name', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().waterName(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //添加员工住宿水电费
    }).post('/waterAdd/add', function*(){
        var $self = this;
        var EditId = this.request.body;
        EditId.userToken = $self.cookies.get('token');
        yield (server().waterAdd(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //一个员工水电费
    }).get('/waterId/id', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().waterId(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //水电费总条数
    }).get('/waterCount/count', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().waterCount(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //汇总
    }).get('/waterSummary/summary', function*(){
        var $self = this;
        var monthCollect = $self.request.query;
        monthCollect.userToken = $self.cookies.get('token');
        yield (server().waterSummary(monthCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //获取员工住宿水电费
    }).get('/waterList/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().waterList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    //删除员工住宿水电费
    }).get('/waterDelete/delete', function*(){
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        var $self = $self;
        yield (server().waterDelete(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
        //------------------------------------------------------
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
    }).get('/user/logout', function*(next){
        var url = this.request.query;
        this.cookies.set("absUrl",url.absurl);
        this.body = {
            code:0,
            msg:"重定向"
        };
    })
    return router;
};
