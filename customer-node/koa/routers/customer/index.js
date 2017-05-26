var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename, '../')) + '/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();

    router.post('/customer/customerbaseinfo/listCustomerBaseInfo', function*(){
        var $self = this;
        var page = this.request.body;
        page.token = this.cookies.get('token');
        yield (server().customerbaseinfoList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/customerbaseinfo/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().countBaseInfo(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/customer/customerlevel/listCustomerLevel', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().customerLevel(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/customer/customerbaseinfo/generateNumber', function*(){//自动编号
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().generateNumber(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerbaseinfo/add', function*(){//添加客户基本信息
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        var $self = this;
        yield (server().cusBaseinfoAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/customer/customerbaseinfo/delete', function*(){//删除客户基本信息
        var delData = this.request.body;
        delData.token = this.cookies.get('token');
        var $self = this;
        yield (server().cusBaseinfoDel(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/customer/customerbaseinfo/congeal', function*(){//冻结客户基本信息
        var congealData = this.request.body;
        congealData.token = this.cookies.get('token');
        var $self = this;
        yield (server().cusBaseinfoCongeal(congealData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/customer/customerbaseinfo/thaw', function*(){//冻结客户基本信息
        var thawData = this.request.body;
        thawData.token = this.cookies.get('token')
        var $self = this;
        yield (server().cusBaseinfoThaw(thawData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/customer/customerbaseinfo/getCustomer', function*(){//h=获取单个客户编号信息
        var cusNum = this.request.body;
        var $self = this;
        cusNum.token = $self.cookies.get('token');
        yield (server().getCustomer(cusNum)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/customer/customerbaseinfo/edit', function*(){//编辑客户信息

        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        var $self = this;
        yield (server().cusBaseinfoEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/customer/customerlevel/listCustomerLevel', function*(){//客户级别列表
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().customerlevel()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/customer/customerlevel/add', function*(){ //添加客户列表
        var addData = this.request.body;
        var $self = this;
        addData.token = this.cookies.get('token');
        yield (server().customerlevelAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/customerlevel/delete', function*(){
        var deleteData = this.request.body;
        deleteData.token = this.cookies.get('token');
        var $self = this;
        yield (server().customerlevelDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/customerlevel/getCustomerLevel', function*(){
        var getCustomerLevelData = this.request.body;
        getCustomerLevelData.token = this.cookies.get('token');
        var $self = this;
        yield (server().getCustomerLevelinfo(getCustomerLevelData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/customer/customerlevel/edit', function*(){
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        var $self = this;
        yield (server().customerlevelEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/customerdetail/listCustomerDetail', function*(){//客户详细信息
        var $self = this;
        var listDetail = this.request.body;
        listDetail.token=$self.cookies.get('token');
        yield (server().listCustomerDetail(listDetail)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/customerdetail/count', function*(){//获取客户条数
        var $self = this;
        var token={token:$self.request.body};
        yield (server().getDetailCount(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/customerbaseinfo/getCusNum', function*(){//获取客户编号
        var $self = this;
        var token={token:$self.request.body};
        yield (server().getCusNum(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/customerbaseinfo/getCusNum', function*(){//添加客户详情
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().addCusDetail(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/customerdetail/getInfoByCustomerNum', function*(){//获取客户详情信息
        var $self = this;
        var getCusData = this.request.body;
        getCusData.token=$self.cookies.get('token');
        yield (server().getCusDetail(getCusData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/customerdetail/editDetail', function*(){//编辑客户详情信息
        var $self = this;
        var editData = $self.request.body;
        editData.token = this.cookies.get('token');
        yield (server().editDetail(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/customerdetail/detail', function*(){//删除客户详情信息
        var $self = this;
        var deteleData = $self.request.body;
        deteleData.token = $self.cookies.get('token');
        yield (server().deteleDetail(deteleData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/cusemail/listCusEmail', function*(){   //客户邮箱列表
        var $self = this;
        var listEmail = $self.request.body;
        listEmail.token = $self.cookies.get('token');
        yield (server().listCusEmail(listEmail)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/cusemail/count', function*(){   //客户邮箱列表
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().emailCount(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/customerbaseinfo/getWorks', function*(){   //行业数组
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().getWork(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/cusemail/add', function*(){ //添加邮件
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        var $self = this;
        yield (server().cusemailAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/cusemail/delete', function*(){ //删除邮件
        var delData = this.request.body;
        delData.token = this.cookies.get('token');
        var $self = this;
        yield (server().cusemailDel(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/cusemail/congeal', function*(){ //删除邮件
        var congealData = this.request.body;
        congealData.token = this.cookies.get('token');
        var $self = this;
        yield (server().cusemailCongeal(congealData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/cusemail/thaw', function*(){ //冻结邮件
        var thawData = this.request.body;
        thawData.token = this.cookies.get('token');
        var $self = this;
        yield (server().cusemailThaw(thawData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/cusemail/getCusEmailById', function*(){ //冻结邮件
        var cusEmailId = this.request.body;
        cusEmailId.token = this.cookies.get('token')
        var $self = this;
        yield (server().getCusEmailId(cusEmailId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/cusemail/edit', function*(){ //编辑邮件
        var editEmail = this.request.body;
        editEmail.token = this.cookies.get('token');
        var $self = this;
        yield (server().editEmail(editEmail)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/cusemail/collect', function*(){ //汇总
        var getCollect = this.request.body;
        getCollect.token=this.cookies.get('token');
        var $self = this;
        yield (server().getCollect(getCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/user/logout', function*(){
        var $self = this;
        var token = {token:$self.cookies.get('token')};
        console.info(token);
        yield (server().logout(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
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
