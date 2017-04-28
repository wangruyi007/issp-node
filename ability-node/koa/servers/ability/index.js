var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    this.abilitybaseinfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/companycapability/v1/listCompanyCapability?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //分页
    this.countBaseInfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/companycapability/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加公司能力
    this.companyAbilityAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/companycapability/v1/add'+'?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //删除
    this.companyAbilityDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/companycapability/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };
    //编辑
    this.companyAbilityEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/companycapability/v1/edit'+'?userToken='+argvs.userToken,
            form : argvs,
        };
        return request(options);
    };
   //编辑id
    this.companyEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/companycapability/v1/getOne/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
   //搜索
    this.companySeachByname= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/companycapability/v1/listCapabilityByCompanyName',
            form : argvs,
        };
        return request(options);
    };

    this.abilitySelfCapList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfcapability/v1/listSelf?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //分页
    this.countSelfCapInfo = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfcapability/v1/count',
        };
        return request(options);
    };
    this.deleteAbilitySelfDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfcapability/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };
    this.selfAbilityAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfcapability/v1/add'+'?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //编辑
    this.personAbilityEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfcapability/v1/edit'+'?userToken='+argvs.userToken,
            form : argvs,
        };
        return request(options);
    };
    //编辑
    this.SocialEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfcapability/v1/editSocial'+'?userToken='+argvs.userToken,
            form : argvs,
        };
        return request(options);
    };
    //编辑id
    this.personEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfcapability/v1/getOne/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };

    this.abilityCooperationList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/coopercapability/v1/list?limit=10&page='+argvs.page,
            form : argvs,
        };
        return request(options);
    };

    //分页
    this.CooperationInfo = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/coopercapability/v1/count',
        };
        return request(options);
    };

    this.CooperationSelfDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/coopercapability/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };

    this.cooperationAbilityAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/coopercapability/v1/add'+'?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.cooperationAbilityEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/coopercapability/v1/edit'+'?userToken='+argvs.userToken,
            form : argvs,
        };
        return request(options);
    };
    this.threeEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/coopercapability/v1/getOne/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    this.RelationEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/coopercapability/v1/editRelation'+'?userToken='+argvs.userToken,
            form : argvs,
        };
        return request(options);
    };
  //邮件发送
    this.collectemaillist= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/listCollectEmail?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.emailCountInfo = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/count',
        };
        return request(options);
    };
    this.EmailCongeal = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/congeal/' + argvs.id + '?userToken=' + argvs.userToken,
        };
        return request(options);
    };
    this.EmailThaw = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/thaw/' + argvs.id + '?userToken=' + argvs.userToken,
        };
        return request(options);
    };
    //删除
    this.emailDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };
    //添加邮件
    this.emailAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/add?userToken='+argvs.userToken,
            form:argvs,
        };
        return request(options);
    };

    this.typelistName= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/listName?type='+argvs.type,

        };
        return request(options);
    };
    this.emailEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/edit'+'?userToken='+argvs.userToken,
            form : argvs,
        };
        return request(options);
    };
    this.fourEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/getOne/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    this.getCollectCompany = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/collectCompanyCapability?companys='+encodeURIComponent(argvs.join(','))
        };
        return request(options);
    };
    //数组
    this.getCompanyName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/companycapability/v1/listAllCompanyName',
            form:argvs
        };
        return request(options);
    };
    this.getCollectPerson = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/collectSelfCapability?names='+encodeURIComponent(argvs.join(','))
        };
        return request(options);
    };
//个人数组
    this.getPersonName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfcapability/v1/listAllSelfName',
            form:argvs
        };
        return request(options);
    };

    this.getCollectCooperation = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/cusemail/v1/collectCooperCapability?companys='+encodeURIComponent(argvs.join(','))
        };
        return request(options);
    };
    this.getCooperationName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/coopercapability/v1/listCompany',
            form:argvs
        };
        return request(options);
    };

    //添加个人社交
    this.socialSelfAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfsocial/v1/add'+'?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.socialSelfList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfsocial/v1/listSelf?limit=10&page='+argvs.page+'&selfCapabilityId='+argvs.id,
        };
        return request(options);
    };

    //分页
    this.socialCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfsocial/v1/count',
        };
        return request(options);
    };

    //删除
    this.socialSelfDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfsocial/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };

    this.socialSelfEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfsocial/v1/edit/'+argvs.id+'?userToken='+argvs.userToken,
            form : argvs,
        };
        return request(options);
    };
    //编辑id
    this.socialEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['ability']['rurl'] + '/selfsocial/v1/getOne/'+argvs.id,
        };
        return request(options);
    };
    return this;
};