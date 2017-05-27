var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();
    router.get('/basicInfoList/list', function*(){ //列表
        var $self = this;
        var page = $self.request.query;
        yield (server().listBasicInfo(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countBasicInfo/count', function*(){//总条数
        var $self = this;
        yield (server().getBasicInfoContact()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/basicInfoAdd/add', function*(){//添加
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addBasicInfo(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/basicInfoEdit/edit', function*(){//编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().editBasicInfoList(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/editBasicInfoById/id', function*(){//ID查询
        var $self = this;
        var findById = $self.request.query;
        yield (server().findContactId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/deleteBasicInfo/delete', function*(){
        var $self = this;
        var delData = this.request.query;
        delData.token = $self.cookies.get('token');
        yield (server().basicInfoDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/rewardSituationList/rewardList', function*(){ //获奖情况列表
        var $self = this;
        var page2 = $self.request.query;
        yield (server().listBasicInfoReward(page2)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/rewardBasicAdd/add', function*(){//获奖情况添加
        var $self = this;
        var rewardData = $self.request.body;
        rewardData.token = $self.cookies.get('token');
        yield (server().addewardBasic(rewardData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/deleteRewardBasic/delete', function*(){
        var $self = this;
        var delReward = this.request.query;
        delReward.token = $self.cookies.get('token');
        yield (server().rewardBasicDelete(delReward)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editRewardBasic/edit', function*(){//获奖情况编辑
        var $self = this;
        var editRewardData = $self.request.body;
        editRewardData.token = $self.cookies.get('token');
        yield (server().rewardBasicedit(editRewardData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/qualificationList/qualificationList', function*(){//id
        var $self = this;
        var qualificationById = $self.request.query;
        yield (server().findQualificationListId(qualificationById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/qualificationList/list', function*(){ //企业资质列表
        var $self = this;
        var page4 = $self.request.query;
        yield (server().listBasicInfoQualification(page4)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/qualificationAdd/add', function*(){//企业资质添加
        var $self = this;
        var qualificationAdd = $self.request.body;
        qualificationAdd.token = $self.cookies.get('token');
        yield (server().addQualificationAddBasic(qualificationAdd)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/deleteQualiBasic/delete', function*(){
        var $self = this;
        var delQuali = this.request.query;
        delQuali.token = $self.cookies.get('token');
        yield (server().eQualiBasicDelete(delQuali)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editQualiBasic/edit', function*(){//获奖情况编辑
        var $self = this;
        var editQualiData = $self.request.body;
        editQualiData.token = $self.cookies.get('token');
        yield (server().qualiBasicedit(editQualiData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/editQualiBasicById/id', function*(){//id
        var $self = this;
        var qualificationEditById = $self.request.query;
        yield (server().findQualificationEditId(qualificationEditById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/contactList/list', function*(){ //联系列表
        var $self = this;
        var page6 = $self.request.query;
        yield (server().listBasicInfoContact(page6)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/contactAdd/add', function*(){//联系添加
        var $self = this;
        var conDataAdd = $self.request.body;
        conDataAdd.token = $self.cookies.get('token');
        yield (server().addContactBasic(conDataAdd)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/deleteContact/delete', function*(){
        var $self = this;
        var delCont = this.request.query;
        delCont.token = $self.cookies.get('token');
        yield (server().eContactDelete(delCont)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editContact/edit', function*(){//联系编辑
        var $self = this;
        var editContData = $self.request.body;
        editContData.token = $self.cookies.get('token');
        yield (server().contentBasicedit(editContData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/editContactById/id', function*(){//id
        var $self = this;
        var contentEditById = $self.request.query;
        yield (server().findContentEditId(contentEditById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/cooperationList/list', function*(){ //合作列表
        var $self = this;
        var page8 = $self.request.query;
        yield (server().listBasicInfoCooperation(page8)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/cooperationAdd/add', function*(){//合作添加添加
        var $self = this;
        var coopDataAdd = $self.request.body;
        coopDataAdd.token = $self.cookies.get('token');
        yield (server().addCooperationBasic(coopDataAdd)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/deleteCooperationBasic/delete', function*(){
        var $self = this;
        var delCoop = this.request.query;
        delCoop.token = $self.cookies.get('token');
        yield (server().eCooperationDelete(delCoop)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editCooperation/edit', function*(){//合作编辑
        var $self = this;
        var editCoopData = $self.request.body;
        editCoopData.token = $self.cookies.get('token');
        yield (server().cooperationBasicedit(editCoopData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/editCooperationById/id', function*(){//id
        var $self = this;
        var cooperEditById = $self.request.query;
        yield (server().findCooperationEditId(cooperEditById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/supplier/listType/list', function*(){ //供应商类型列表
        var $self = this;
        var page = $self.request.query;
        yield (server().listType(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countType/count', function*(){//供应商类型总条数
        var $self = this;
        yield (server().getCountType()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/supplier/addType/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().addTypeBasicInfo(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/supplier/deleteType/delete', function*(){
        var $self = this;
        var delData = this.request.query;
        delData.token = $self.cookies.get('token');
        yield (server().typeDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/supplier/congealType/congeal', function*(){//冻结
        var $self = this;
        var congealData = this.request.body;
        congealData.token = $self.cookies.get('token');
        yield (server().typeCongeal(congealData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/supplier/thawType/thaw', function*(){//解冻
        var $self = this;
        var thawData = this.request.body;
        thawData.token = $self.cookies.get('token');
        yield (server().typeThaw(thawData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/supplier/editType/edit', function*(){//编辑
        var $self = this;
        var editSupp = $self.request.body;
        editSupp.token = $self.cookies.get('token');
        yield (server().supplieTyoeEdit(editSupp)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/supplier/getEditTypeById', function*(){//id
        var $self = this;
        var suppEditById = $self.request.query;
        yield (server().findEditTypeEditId(suppEditById)
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
        yield (server().logout(token)
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
