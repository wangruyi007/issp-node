var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();

    router.get('/managefee/list', function*(){ //管理费列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().feeList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/managefee/listYear', function*(){//获取所有年份
        var $self = this;
        var countToken = {userToken:$self.cookies.get('token')};
        yield (server().getFeeYear(countToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/managefee/add', function*(){//管理费添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().feeAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/managefee/edit', function*(){//管理费编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().feeEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/managefee/getOneById', function*(){//ID查询管理费数据
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().findFeeId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/managefee/delete', function*(){//删除管理费
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().feeDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/managefee/count', function*(){//获取管理费总条数
        var $self = this;
        var countToken = {userToken:$self.cookies.get('token')};
        yield (server().getFeeTotal(countToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/managefee/ctArea', function*(){//管理费地区汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.userToken = $self.cookies.get('token');
        yield (server().feeAreaSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/managefee/listArea', function*(){//获取管理费所有地区
        var $self = this;
        var areaToken = {userToken:$self.cookies.get('token')};
        yield (server().getFeeArea(areaToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/managefee/ctGroup', function*(){//管理费项目组汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.userToken = $self.cookies.get('token');
        yield (server().feeGroupSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/managefee/listGroup', function*(){//获取管理费所有项目组
        var $self = this;
        var groupToken = {userToken:$self.cookies.get('token')};
        yield (server().getFeeGroup(groupToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/managefee/ctType', function*(){//管理费类别汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.userToken = $self.cookies.get('token');
        yield (server().feeTypeSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/managefee/ctProject', function*(){//根据项目汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.userToken = $self.cookies.get('token');
        yield (server().feeProjectSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/managefee/listProject', function*(){//获取所有汇总项目
        var $self = this;
        var projectToken = {userToken:$self.cookies.get('token')};
        yield (server().getFeeProject(projectToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/outfee/list', function*(){ //外包费列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().outFeeList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/outfee/listYear', function*(){//获取所有年份
        var $self = this;
        var yearToken = {userToken:$self.cookies.get('token')};
        yield (server().getOutFeeYear(yearToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/outfee/add', function*(){//外包费添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().outFeeAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/outfee/edit', function*(){//外包费编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().outFeeEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/outfee/getOneById', function*(){//ID查询外包费数据
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().findOutFeeId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/outfee/delete', function*(){//删除外包费
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().outFeeDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/outfee/count', function*(){//获取外包费总条数
        var $self = this;
        var countToken = {userToken:$self.cookies.get('token')};
        yield (server().getOutFeeTotal(countToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/outfee/ctArea', function*(){//外包费地区汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.userToken = $self.cookies.get('token');
        yield (server().outFeeAreaSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/outfee/listArea', function*(){//获取外包费所有地区
        var $self = this;
        var areaToken = {userToken:$self.cookies.get('token')};
        yield (server().getOutFeeArea(areaToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/outfee/ctGroup', function*(){//外包费项目组汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.userToken = $self.cookies.get('token');
        yield (server().outFeeGroupSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/outfee/listGroup', function*(){//获取外包费所有项目组
        var $self = this;
        var groupToken = {userToken:$self.cookies.get('token')};
        yield (server().getOutFeeGroup(groupToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/outfee/ctType', function*(){//外包费类别汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.userToken = $self.cookies.get('token');
        yield (server().outFeeTypeSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/outfee/ctProject', function*(){//根据项目汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.userToken = $self.cookies.get('token');
        yield (server().outFeeProjectSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/outfee/listProject', function*(){//获取所有汇总项目
        var $self = this;
        var projectToken = {userToken:$self.cookies.get('token')};
        yield (server().getOutFeeProject(projectToken)
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
