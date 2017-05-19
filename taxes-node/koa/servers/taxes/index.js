var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    //列表 税金管理
   this.taxesList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.taxesCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/taxmanagement/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.taxesAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/add`,
            form:argvs,
            headers : {
                 userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.taxesById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/tax/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.taxesEidt = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/edit`,
            form:argvs,
            headers : {
                 userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.taxesDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/delete/${argvs.id}`,
            headers: {
                 userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //查看功能 
    this.viewList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/view?company=${encodeURIComponent(argvs.company)}&month=${argvs.month}&taxType=${encodeURIComponent(argvs.taxType)}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //汇总公司
    this.companyList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/taxmanagement/v1/collect?company=${encodeURIComponent(argvs.company)}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };

    //列表 对外
   this.accountList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfomanagement/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.accountCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/accountinfomanagement/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.accountAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfomanagement/v1/add`,
            form:argvs,
            headers : {
                 userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.accountById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfomanagement/v1/account/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.accountEidt = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfomanagement/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.accountDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/accountinfomanagement/v1/delete/${argvs.id}`,
            headers:{
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