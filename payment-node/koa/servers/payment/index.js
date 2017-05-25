var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
    this.detailList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.detailLists = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/collect/${argvs.id}`,
        };
        return request(options);
    };
    //获取总条数
    this.getDetailTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/receivablesubsidiary/v1/count'
        };
        return request(options);
    };
    // 添加
    this.detailAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.idByDetailAll = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/contractor/v1/list?_includes=id,name',
        };
        return request(options);
    };
    // 编辑
    this.detailEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //删除
    this.detailDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findDetailId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/receivable/${argvs.id}`
        };
        return request(options);
    };
    //汇总
    this.detailSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/collectArea?areas=${encodeURIComponent(argvs)}`,
            form:argvs
        };
        return request(options);
    };
    //查询所有地区
    this.detailAllAreaById = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/receivablesubsidiary/v1/area',
        };
        return request(options);
    };
    this.detailsSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/collectAreaDetail?areas=${encodeURIComponent(argvs)}`,
            form:argvs
        };
        return request(options);
    };
    //项目名称汇总
    this.detailsProSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/collectName?innerNames=${encodeURIComponent(argvs)}`,
            form:argvs
        };
        return request(options);
    };
    this.detailAllProById = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/receivablesubsidiary/v1/name',
        };
        return request(options);
    };
    this.proSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/collectNameDetail?innerNames=${encodeURIComponent(argvs)}`,
            form:argvs
        };
        return request(options);
    };
    this.detailsGenerialSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/collectContractor?contractors=${encodeURIComponent(argvs)}`,
            form:argvs
        };
        return request(options);
    };
    this.generalProById = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/receivablesubsidiary/v1/contractor',
        };
        return request(options);
    };
    this.generalsSummary = function(argvs){
     var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/collectContractorDetail?contractors=${encodeURIComponent(argvs)}`,
            form:argvs
        };
        return request(options);
    };
    //d
    this.contractorList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractor/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.getContractorTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/contractor/v1/count'
        };
        return request(options);
    };
    this.contractorAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/contractor/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.contractorEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/contractor/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findContractorfoId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractor/v1/contractor/${argvs.id}`
        };
        return request(options);
    };
    this.contractorDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/contractor/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.logout = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['user'] + `/v1/sign-out/${argvs.token}`,
            form:argvs
        };
        return request(options);
    };
    return this;
};