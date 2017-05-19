var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
    //列表 
   this.contractList= function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/contract/v1/list?limit=10&page=${argvs.page}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目  
    this.contractCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/contract/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加
    this.contractAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/contract/v1/add`,
            form:argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.contractById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contract/v1/find/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.contractEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/contract/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.contractDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/contract/v1/delete/${argvs.id}`,
            headers: {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //汇总
    this.contractCollect= function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/contract/v1/collect`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    
    //项 
    //列表    
   this.outsourceList= function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/outsource/v1/list?limit=10&page=${argvs.page}&userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目  
    this.outsourceCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/outsource/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加
    this.outsourceAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/outsource/v1/add`,
            form:argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.outsourceById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/outsource/v1/find/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.outsourceEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/outsource/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.outsourceDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/outsource/v1/delete/${argvs.id}`,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //汇总
    this.outsourceCollect= function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/outsource/v1/collect`,
            form:argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //用户退出
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