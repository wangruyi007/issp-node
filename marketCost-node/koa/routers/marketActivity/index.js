var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename, '../')) + '/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function () {
    var router = new Router();
    //市场招待申请  
    //列表
    router.get('/marketActivity/marketserve/list', function* () {
        var $self = this;
        var page = this.request.query;
        page.userToken = this.cookies.get('token');
        yield (server().marketserveBaseinfoList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/marketserve/count', function* () {
        var $self = this;
        var countData = {userToken:$self.cookies.get('token')}
        yield (server().countBaseInfo(countData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
        //添加
    }).post('/marketActivity/marketserve/add', function* () {
        var addData = this.request.body;
        addData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().addMarketserveapply(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
        //添加客户信息
    }).post('/marketActivity/customerinfo/add', function* () {
        var addData = this.request.body;
        addData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().addCustomerinfo(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
        //编辑id
    }).get('/marketActivity/marketserve/getOneById', function* () {
        var EditId = this.request.query;
        EditId.userToken = this.cookies.get('token');
        var $self = this;
        console.log(78977979797)
        yield (server().marketserveEditById(EditId)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408; marketserveapplyDelete
                }
            }));
    }).post('/marketActivity/marketserve/edit', function* () {
        var Edit = this.request.body;
        Edit.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().marketserveEdit(Edit)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
    }).post('/marketActivity/marketserveApply/delete', function* () {
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().marketserveapplyDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //编辑 资金模块意见 
    }).post('/marketActivity/marketserve/OpinionEidt', function* () {
        var OpinionEidt = this.request.body;
        OpinionEidt.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().marketserveOpinionEidt1(OpinionEidt)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //编辑 决策层意见
    }).post('/marketActivity/marketserve/executiveEidt', function* () {
        var Eidt = this.request.body;
        Eidt.userToken = this.cookies.get('token');
        var $self = this;
        console.log(131)
        yield (server().executiveEidt(Eidt)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                if (error.error && error.error.code && error.error.code == 'ETIMEDOUT') {
                    $self.body = { 'msg': '请求错误！', errno: 3 };
                    $self.status = 408;
                }
            }));
        //市场招待汇总
    }).get('/marketActivity/summary/list', function* () {
        var $self = this;
        var page = this.request.query;
        page.userToken = this.cookies.get('token');
        yield (server().summarylist(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/marketActivity/summary/count', function* () {
        var $self = this;
        yield (server().summaryCount()
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/marketActivity/congealSummary/congeal', function* () {//冻结
        var congealData = this.request.body;
        congealData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().summaryCongeal(congealData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/marketActivity/thawEmail/thaw', function* () {//解冻
        var $self = this;
        var thawData = $self.request.body;
        thawData.userToken = $self.cookies.get('token');
        console.log(thawData)
        yield (server().summaryBreakfreeze(thawData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/marketActivity/summary/delete', function* () { //删除
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().summaryDelete(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/marketActivity/addSummery/add', function* () { 
        var addData = this.request.body;
        addData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().summarylAdd(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/marketActivity/summary/EditId', function* () { //编辑id
        var EditId = this.request.body;
        EditId.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().getSummaryId(EditId)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).post('/marketActivity/summery/Edit', function* () { //编辑
        var Edit = this.request.body;
        Edit.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().PutSummarylEdit(Edit)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/marketActivity/servereCord/list', function* () {
        var $self = this;
        var page = this.request.query;
        page.userToken = this.cookies.get('token');
        yield (server().servereCordBaseinfoList(page)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
    }).get('/servereCord/count', function* () {
        var $self = this;
        yield (server().servereCordCount()
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
        //添加 市场招待记录
    }).post('/marketActivity/servereCord/add', function* () {
        var addData = this.request.body;
        addData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().addserverecordinfo(addData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
        // 添加客户信息
    }).post('/servereCord/customerinfo/add', function* () {
        var addcustomer = this.request.body;
        addcustomer.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().servereCordAddCustomer(addcustomer)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type', 'application/json;charset=utf-8');
                $self.body = error.error;
                console.error(error.error);
            }));
        // 
    }).post('/marketActivity/servereCord/getOneById', function* () {
        var Eidt = this.request.body;
        Eidt.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().serverecordEidtId(Eidt)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑 
    }).post('/marketActivity/serverecord/Edit', function* () { //编辑
        var Edit = this.request.body;
        Edit.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().serverecordEidt(Edit)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/marketActivity/servereCord/OpinionEidt', function* () { //资金模块意见
        var Edit = this.request.body;
        Edit.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().serverecordOpinionEidt(Edit)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/marketActivity/servereCord/executiveEidt', function* () { //编辑审核层意见
        var executiveEidt = this.request.body;
        executiveEidt.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().servereCordExecutive(executiveEidt)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/marketActivity/servereCordApply/delete', function* () { //编辑审核层意见
        var delData = this.request.body;
        delData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().servereCordDele(delData)
            .then((parsedBody) => {
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) => {
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
    }).get('/listSetting', function*(){
        var $self = this;
        var setting = this.request.query;
        setting.token = $self.cookies.get('token');
        yield (server().listSetting(setting)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countSetting', function*(){
        var $self = this;
        yield (server().countSetting()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getpermit', function*(){
        var $self = this;
        var getId = $self.request.query;
        yield (server().getpermit(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getListpermit', function*(){
        var $self = this;
        var listPermit = $self.request.query;
        yield (server().getListpermit(listPermit)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editSetting', function*(){
        var $self = this;
        var editSet = $self.request.body;
        editSet.token = $self.cookies.get("token");
        yield (server().editSetting(editSet)
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
