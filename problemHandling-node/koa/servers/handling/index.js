var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    this.problemList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/problemaccept/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 添加
    this.problemAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/problemaccept/v1/add?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 编辑
    this.problemEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/problemaccept/v1/edit?userToken=${argvs.userToken}`,
            form:argvs
        };
        return request(options);
    };

    //删除
    this.problemDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/problemaccept/v1/delete/${argvs.id}?userToken=${argvs.userToken}`
        };
        return request(options);
    };
    //获取总条数
    this.getProblemTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/problemaccept/v1/count'
        };
        return request(options);
    };
    //获取ID
    this.findPrombleId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/problemaccept/v1/problem/${argvs.id}`
        };
        return request(options);
    };
    //确认问题处理结果列表
    this.confirmList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/problemhandlingresult/v1/list?limit=10&page=${argvs.page}`
        };
        return request(options);
    };
    // 添加
    this.confirmAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/problemhandlingresult/v1/add?userToken=${argvs.userToken}`,
            form:argvs
        };
        return request(options);
    };
    // 编辑
    this.confirmEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/problemhandlingresult/v1/edit?userToken=${argvs.userToken}`,
            form:argvs
        };
        return request(options);
    };

    //删除
    this.confirmDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/problemhandlingresult/v1/delete/${argvs.id}?userToken=${argvs.userToken}`,
            // headers : {
            //      userToken : argvs.userToken  ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // }
        };
        return request(options);
    };
    //获取总条数
    this.getConfirmTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/problemhandlingresult/v1/count'
        };
        return request(options);
    };
    //获取ID
    this.findConfirmId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/problemhandlingresult/v1/result/${argvs.id}`
        };
        return request(options);
    };
    //参与处理人员的任务分配列表
    this.taskList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/involvedprocessingtask/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 添加
    this.taskAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/involvedprocessingtask/v1/add?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 编辑
    this.taskEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/involvedprocessingtask/v1/edit?userToken=${argvs.userToken}`,
            form:argvs
        };
        return request(options);
    };

    //删除
    this.taskDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/involvedprocessingtask/v1/delete/${argvs.id}?userToken=${argvs.userToken}`,
        };
        return request(options);
    };
    //获取总条数
    this.getTaskTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/involvedprocessingtask/v1/count'
        };
        return request(options);
    };
    //获取ID
    this.findTaskId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/involvedprocessingtask/v1/task/${argvs.id}`
        };
        return request(options);
    };
    //汇总项目执行中的问题受理及处理结果
    this.collectList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/problemhandlingresult/v1/collect?area=${encodeURIComponent(argvs)}`,
            form:argvs
        };
        return request(options);
    };
    //获取所有地区
    this.getAllArea = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/problemhandlingresult/v1/area'
        };
        return request(options);
    };
    return this;
}