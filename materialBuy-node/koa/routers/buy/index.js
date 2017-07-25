var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
var koaBody = require('koa-body');
var request = require('request-promise');
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var fileType = require(path.resolve('plugins/fileType.js'));
module.exports = function(){
    var router = new Router();
    /*盘点*/
    router.get('/materialbuy/setButtonPermission', function*(){ //模块设置导航权限
        var $self = this;
        var navToken = {userToken:$self.cookies.get('token')};
        yield (server().settingNav(navToken) //1
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/materialbuy/sonPermission', function*(){ //下拉导航权限
        var $self = this;
        var navToken = {userToken:$self.cookies.get('token')};
        yield (server().dropDownNav(navToken)  //1
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/devicetype/guidePermission/:guideAddrStatus', function*(){ //设备类型功能导航权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().guidePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/devicetype/list', function*() { //设备类型列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().devicetypeList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/devicetype/count', function*(){//获取设备类型总记录数
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getdeviceTotal(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/devicetype/add', function*(){//设备类型添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().deviceAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/devicetype/devicetype', function*(){//ID查询设备类型
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().findDevId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/devicetype/edit', function*(){//设备类型编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().deviceEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/tempmatterdemand/guidePermission/:guideAddrStatus', function*(){ //临时物资需求功能导航权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().guideDemand(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/tempmatterdemand/count', function*(){//获取设备类型总记录数
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getdemandTotal(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/tempmatterdemand/list', function*() { //临时物资需求列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().getDemandList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/devicetype/delete', function*(){//删除设备类型
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().deviceDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/tempmatterdemand/add', function*(){//临时物资需求添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().demandAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/tempmatterdemand/tempmatterdemand', function*(){//ID查询物资需求
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().findMatId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/tempmatterdemand/edit', function*(){//临时物资需求编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().demandEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/tempmatterdemand/audit', function*(){//临时物资需求审核
        var $self = this;
        var auditData = $self.request.body;
        auditData.userToken = $self.cookies.get('token');
        yield (server().demandAudit(auditData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/tempmatterdemand/delete/', function*(){//删除临时物资需求
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().deviceDelete(deleteData)
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
