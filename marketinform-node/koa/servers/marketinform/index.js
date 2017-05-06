var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
   //市场信息列表
    this.marketInformBaseinfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['marketinform']['rurl'] + '/marketinfo/v1/list?limit=10&page='+argvs.page,
        };
        return request(options);
    };
    //市场信息分页
    this.informationCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['marketinform']['rurl'] + '/marketinfo/v1/count',
        };
        return request(options);
    };
    //市场信息删除
    this.informationDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['marketinform']['rurl'] + '/marketinfo/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };
    //市场信息添加
    this.projectMarketInformAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['marketinform']['rurl'] + '/marketinfo/v1/add'+'?userToken='+argvs.userToken,
            form:argvs,
        };
        return request(options);
    };
    //市场信息编辑
    this.informationEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['marketinform']['rurl'] + '/marketinfo/v1/edit'+'?userToken='+argvs.userToken,
            form : argvs,
        };
        return request(options);
    };
    //市场信息编辑id
    this.informationEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['marketinform']['rurl'] + '/marketinfo/v1/market/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //项目实施情况列表
    this.implementationBaseinfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarry/v1/list?limit=10&page='+argvs.page,
        };
        return request(options);
    };
   //实施情况总数
    this.implementationCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarry/v1/count',
        };
        return request(options);
    };
    //实施情况删除
    this.implementationDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarry/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };
   //实施情况添加
    this.projectCarryAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarry/v1/add'+'?userToken='+argvs.userToken,
            form:argvs,
        };
        return request(options);
    };
    //实施情况编辑
    this.implementationProjectEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarry/v1/edit'+'?userToken='+argvs.userToken,
            form : argvs,
        };
        return request(options);
    };
    //实施情况编辑id
    this.implementationEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarry/v1/getOneById/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //验收情况列表
    this.projectAcceptanceList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectacceptance/v1/list?limit=10&page='+argvs.page,
        };
        return request(options);
    };
    //项目验收情况分页
    this.projectAcceptanceCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectacceptance/v1/count',
        };
        return request(options);
    };
    //项目验收情况添加
    this.projectAcceptanceAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectacceptance/v1/add'+'?userToken='+argvs.userToken,
            form:argvs,
        };
        return request(options);
    };
   //项目验收情况删除
    this.acceptanceDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectacceptance/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };
    //项目验收情况编辑
    this.projectAcceptanceEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectacceptance/v1/edit'+'?userToken='+argvs.userToken,
            form : argvs,
        };
        return request(options);
    };
    //项目验收情况编辑id
    this.acceptanceEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectacceptance/v1/getOneById/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //项目结算跟进列表
    this.settlementList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsettlementfollow/v1/list?limit=10&page='+argvs.page,
        };
        return request(options);
    };
    //项目结算跟进分页
    this.projectAcceptanceCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsettlementfollow/v1/count',
        };
        return request(options);
    };
    //项目结算跟进添加
    this.settlementAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsettlementfollow/v1/add'+'?userToken='+argvs.userToken,
            form:argvs,
        };
        return request(options);
    };
    //项目结算跟进删除
    this.sttlementDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsettlementfollow/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };
    this.projectSettlementEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsettlementfollow/v1/edit'+'?userToken='+argvs.userToken,
            form : argvs,
        };
        return request(options);
    };
    this.settlementEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsettlementfollow/v1/getOneById/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //项目实施列表
    this.auditList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarryaudit/v1/listProjectCarryAudit?limit=10&page='+argvs.page,
        };
        return request(options);
    };
    //项目实施分页
    this.projectAuditCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarryaudit/v1/count',
        };
        return request(options);
    };
    //项目实施添加
    this.auditAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarryaudit/v1/add'+'?userToken='+argvs.userToken,
            form:argvs,
        };
        return request(options);
    };
    this.auditDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarryaudit/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };
    this.projectAuditEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarryaudit/v1/edit'+'?userToken='+argvs.userToken,
            form : argvs,
        };
        return request(options);
    };
    this.settlementEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsettlementfollow/v1/getOneById/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    this.auditEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarryaudit/v1/getOneById/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    this.getCollectSummary = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsettlementfollow/v1/collectSettle',
        };
        return request(options);
    };
    return this;
};