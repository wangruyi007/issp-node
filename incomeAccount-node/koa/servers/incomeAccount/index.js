var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    //列表 资金回笼
   this.checkindexList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/checkindex/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.checkindexCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/checkindex/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.checkindexAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/checkindex/v1/add`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.checkindexById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/checkindex/v1/getIndexById/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.checkindexEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/checkindex/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.checkindexDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/checkindex/v1/delete/${argvs.id}`,
             headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    
     //列表 收入核算
   this.checkincomeList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/checkincome/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.checkincomeCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/checkincome/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.checkincomeAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/checkincome/v1/add`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.checkincomeById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/checkincome/v1/getIndexById/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.checkincomeEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/checkincome/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.checkincomeDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/checkincome/v1/delete/${argvs.id}`,
             headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有的地区 
    this.listArea = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/checkincome/v1/listArea',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //地区汇总
    this.ctArea= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/checkincome/v1/ctArea?startTime=${encodeURIComponent(argvs.startTime)}&endTime=${encodeURIComponent(argvs.endTime)}&area=${encodeURIComponent(argvs.area)}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取所有的项目组 
    this.listGroup = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/checkincome/v1/listGroup',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //项目组汇总
    this.ctGroup= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/checkincome/v1/ctGroup?startTime=${encodeURIComponent(argvs.startTime)}&endTime=${encodeURIComponent(argvs.endTime)}&projectGroup=${encodeURIComponent(argvs.projectGroup)}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
     //获取所有的项目名 
    this.listProject = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/checkincome/v1/listProject',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //项目名汇总
    this.ctProject= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/checkincome/v1/ctProject?startTime=${encodeURIComponent(argvs.startTime)}&endTime=${encodeURIComponent(argvs.endTime)}&projectName=${encodeURIComponent(argvs.projectName)}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };

    return this;
};