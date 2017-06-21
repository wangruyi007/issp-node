var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
    this.basicInfoList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfo/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    //获取总条数
    this.getBasicInfoTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/accountinfo/v1/count'
        };
        return request(options);
    };
    // 添加
    this.basicInfoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfo/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 编辑
    this.basicInfoEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfo/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //删除
    this.basicInfoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfo/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findBasicInfoId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfo/v1/account/${argvs.id}`
        };
        return request(options);
    };


    //汇总
    this.basicInfoSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfo/v1/collect?areas=${encodeURIComponent(argvs)}`,
            form:argvs
        };
        return request(options);
    };
    //查询所有地区
    this.projectsAllAreaById = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/accountinfo/v1/areas',
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