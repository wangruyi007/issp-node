var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
    //列表
    this.companycapbaseinfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/competitor/v1/list?limit=10&page='+argvs.page,
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
            uri : config()['rurl'] + '/competitor/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加竞争对手
    this.companyAbilityAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/competitor/v1/add'+'?userToken='+argvs.userToken,
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
            uri : config()['rurl'] + '/competitor/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };
    //编辑竞争对手
    this.putCompetitor = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/competitor/v1/edit'+'?userToken='+argvs.userToken,
            form : argvs,
        };
        return request(options);
    };
   //编辑id
    this.companyEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/competitor/v1/find/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //竞争对手结构信息
    this.organizeAdd = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/competitor/v1/edit'+'?userToken='+argvs.userToken,
            form : argvs,
        };
        return request(options);
    };
  //邮件发送
    this.collectemaillist= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/list?limit=10&page='+argvs.page,
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
            uri : config()['rurl'] + '/collect/v1/count',
        };
        return request(options);
    };
    //冻结
    this.EmailCongeal = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/freeze/' + argvs.id + '?userToken=' + argvs.userToken,
        };
        return request(options);
    };
    //解冻
    this.competitorBreakfreeze = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/breakfreeze/' + argvs.id + '?userToken=' + argvs.userToken,
        };
        return request(options);
    };
    //删除
    this.emailDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };
    //添加邮件
    this.emailAdd = function(argvs){//
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/add?userToken='+argvs.userToken,
            form:argvs,
        };
        return request(options);
    };

    this.typelistName= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/cusemail/v1/listName?type='+argvs.type,

        };
        return request(options);
    };
    this.emailEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/edit'+'?userToken='+argvs.userToken,
            form : argvs,
        };
        return request(options);
    };
    this.fourEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/find/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    return this;
};