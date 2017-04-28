var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();
     //列表
    router.get('/ability/abilitycompanycap/listAbilityCompanyCap', function*(){
        var $self = this;
       var page = $self.request.query;
        yield (server().abilitybaseinfoList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/abilitycompanycap/count', function*(){
        var $self = this;
        yield (server().countBaseInfo()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //添加公司能力
    }).post('/ability/addCompanyAbility/add', function*(){
            var addData = this.request.body;
            addData.userToken = this.cookies.get('token');
            var $self = this;
            yield (server().companyAbilityAdd(addData)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                    console.error(error.error);
                }));
        //删除
        }).post('/ability/deleteCompanyAbility/delete', function*(){
        var delData = this.request.body;
        var $self = this;
        yield (server().companyAbilityDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑
    }).post('/ability/editCompanyAbility/edit', function*(){
        var editData = this.request.body;
        editData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().companyAbilityEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑id
    }).post('/ability/getOneById', function*(){
        var EditId = this.request.body;
        var $self = this;
        yield (server().companyEditById(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/searchCompanyAbility', function*(){
        var searchName = this.request.body;
        var $self = this;
        yield (server().companySeachByname(searchName)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/abilitySelfCap/listAbilitySelfCap', function*(){
        var $self = this;
        var page2 = this.request.query;
        yield (server().abilitySelfCapList(page2)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/abilitySelfCap/count', function*(){
        var $self = this;
        yield (server().countSelfCapInfo()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //添加公司能力
    }).post('/ability/deleteAbilitySelf/delete', function*(){
        var delData = this.request.body;
        var $self = this;
        yield (server().deleteAbilitySelfDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑
    }).post('/ability/addSelfCapAbility/add', function*(){
        var addData = this.request.body;
        addData.userToken = this.cookies.get('token');
       var $self = this;
        yield (server().selfAbilityAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/editSelfCapAbility/edit', function*(){
        var editData = this.request.body;
        editData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().personAbilityEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑id
    }).post('/ability/getTwoById', function*(){
        var EditId = this.request.body;
        var $self = this;
        yield (server().personEditById(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/editEditSocial/editsocial', function*(){
        var editData = this.request.body;
        editData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().SocialEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //编辑id
    }).get('/ability/listAbilityCooperation/listCoop', function*(){
        var $self = this;
        var page = this.request.query;
        yield (server().abilityCooperationList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countCooperation/count', function*(){
        var $self = this;
        yield (server().CooperationInfo()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //添加公司能力
    }).post('/ability/deleteCooperationSelf/delete', function*(){
        var delData = this.request.body;
        var $self = this;
        yield (server().CooperationSelfDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/addCooperationAbility/add', function*(){
        var addData = this.request.body;
        addData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().cooperationAbilityAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //删除
    }).post('/ability/editCooperationAbility/edit', function*(){
        var editData = this.request.body;
        editData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().cooperationAbilityEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/getThreeById', function*(){
        var EditId = this.request.body;
        var $self = this;
        yield (server().threeEditById(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/editRelation/editRel', function*(){
        var editData = this.request.body;
        editData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().RelationEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
        //汇总和邮件发送
    }).get('/ability/listAbilityEmail/listEmail', function*(){
        var $self = this;
        var page = this.request.query;
        yield (server().collectemaillist(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countEmail/count', function*(){
        var $self = this;
        yield (server().emailCountInfo()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/congealEmail/congeal', function*(){//冻结
        var congealData = this.request.body;
        var $self = this;
        yield (server().EmailCongeal(congealData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/thawEmail/thaw', function*(){//解冻
        var thawData = this.request.body;
        var $self = this;
        yield (server().EmailThaw(thawData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/deleteEmail/delete', function*(){ //删除
        var delData = this.request.body;
        var $self = this;
        yield (server().emailDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/addEmail/add', function*(){ //添加邮件
        var addData = this.request.body;
        addData.userToken = '1254545676145641'
        var $self = this;
        yield (server().emailAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/listNameType/type', function*(){
        var getTyoeData = this.request.query;
        var $self = this;
        yield (server().typelistName(getTyoeData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/editEmail/edit', function*(){
        var editData = this.request.body;
        editData.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().emailEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/getFourById', function*(){
        var editId = this.request.body;
        var $self = this;
        yield (server().fourEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/ectSummaryCompany', function*(){ //汇总
        var getCollect = this.request.body;
        var $self = this;
        yield (server().getCollectCompany(getCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/getCompanyNames', function*(){   //数组
        var $self = this;
        yield (server().getCompanyName()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/ectSummaryPerson', function*(){
        var getCollect = this.request.body;
        var $self = this;
        yield (server().getCollectPerson(getCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/getPersonNames', function*(){   //数组
        var $self = this;
        yield (server().getPersonName()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/ectSummaryCooperation', function*(){
        var getCollect = this.request.body;
        var $self = this;
        yield (server().getCollectCooperation(getCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/getCooperationNames', function*(){   //数组
        var $self = this;
        yield (server().getCooperationName()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/addSocialSelf/add', function*(){
        var socialData = this.request.body;
        var $self = this;
        yield (server().socialSelfAdd(socialData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/listSocialSelf/socialList', function*(){
        var $self = this;
        var listData = this.request.query;
        yield (server().socialSelfList(listData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countSocial/count', function*(){
        var $self = this;
        yield (server().socialCount()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/deleteSocialSelf/delete', function*(){
        var delData = this.request.body;
        var $self = this;
        yield (server().socialSelfDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ability/editSocialSelf/socialEdit', function*(){
        var editSocial = this.request.body;
        editSocial.userToken = this.cookies.get('token');
        var $self = this;
        yield (server().socialSelfEdit(editSocial)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ability/getFiveById', function*(){
        var $self = this;
        var EditFiveId = $self.request.query;
        yield (server().socialEditById(EditFiveId)
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
