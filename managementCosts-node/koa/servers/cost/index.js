var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
module.exports = function(){

    //管理费列表
    this.feeList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/managefee/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取管理费所有年份
    this.getFeeYear = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/managefee/v1/listYear'
        };
        return request(options);
    };
    // 添加管理费
    this.feeAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/managefee/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑管理费
    this.feeEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/managefee/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID管理费
    this.findFeeId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/managefee/v1/getOneById/${argvs.id}`
        };
        return request(options);
    };
    //删除管理费
    this.feeDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/managefee/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数管理费
    this.getFeeTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/managefee/v1/count'
        };
        return request(options);
    };
    //管理费地区汇总
    this.feeAreaSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/managefee/v1/ctArea'+urlEncode(argvs,true)
        };

        return request(options);
    };
    //获取管理费所有地区
    this.getFeeArea = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/managefee/v1/listArea'
        };
        return request(options);
    };
    //管理费项目组汇总
    this.feeGroupSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/managefee/v1/ctGroup'+urlEncode(argvs,true)
        };

        return request(options);
    };
    //获取管理费所有项目组
    this.getFeeGroup = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/managefee/v1/listGroup'
        };
        return request(options);
    };
    //管理费类别汇总
    this.feeTypeSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/managefee/v1/ctType'+urlEncode(argvs,true)
        };

        return request(options);
    };
    //管理费根据项目名称汇总
    this.feeProjectSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/managefee/v1/ctProject'+urlEncode(argvs,true)
        };

        return request(options);
    };
    //获取管理费所有汇总项目名称
    this.getFeeProject = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/managefee/v1/listProject'
        };
        return request(options);
    };
    //外包费列表
    this.outFeeList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/outfee/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取外包费所有年份
    this.getOutFeeYear = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/outfee/v1/listYear'
        };
        return request(options);
    };
    // 添加外包费
    this.outFeeAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/outfee/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑外包费
    this.outFeeEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/outfee/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID外包费
    this.findOutFeeId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/outfee/v1/getOneById/${argvs.id}`
        };
        return request(options);
    };
    //删除外包费
    this.outFeeDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/outfee/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数外包费
    this.getOutFeeTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/outfee/v1/count'
        };
        return request(options);
    };
    //外包费地区汇总
    this.outFeeAreaSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/outfee/v1/ctArea'+urlEncode(argvs,true)
        };

        return request(options);
    };
    //获取外包费所有地区
    this.getOutFeeArea = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/outfee/v1/listArea'
        };
        return request(options);
    };
    //外包费项目组汇总
    this.outFeeGroupSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/outfee/v1/ctGroup'+urlEncode(argvs,true)
        };

        return request(options);
    };
    //获取外包费所有项目组
    this.getOutFeeGroup = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/outfee/v1/listGroup'
        };
        return request(options);
    };
    //外包费类别汇总
    this.outFeeTypeSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/outfee/v1/ctType'+urlEncode(argvs,true)
        };

        return request(options);
    };
    //外包费根据项目名称汇总
    this.outFeeProjectSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/outfee/v1/ctProject'+urlEncode(argvs,true)
        };

        return request(options);
    };
    //获取外包费所有汇总项目名称
    this.getOutFeeProject = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/outfee/v1/listProject'
        };
        return request(options);
    };
    return this;
}