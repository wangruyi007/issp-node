var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
    //年检列表
    
    this.listCompeteregistered= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/businessannualinfo/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        console.log(argvs)
        return request(options);
    };
    //上传
    this.annualUpload= function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/businessannualinfo/v1/upload',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑工商年检
    this.annualEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/businessannualinfo/v1/edit',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //工商年检信息列表总条数
    this.annualNews = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/businessannualinfo/v1/count',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //一个工商年检信息
    this.annualOneId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/businessannualinfo/v1/info/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除工商年检信息
    this.annualDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/businessannualinfo/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //年检下载
    this.annualDownload = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/businessannualinfo/v1/download',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加工商年检信息
    this.annualadd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/businessannualinfo/v1/add',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //--------------------------------2-------------------------------
    //一个工商税务变更
    this.changeOneId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/businesstaxchange/v1/change/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加工商税务变更
    this.changeAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/businesstaxchange/v1/add',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑工商税务变更
    this.changeEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/businesstaxchange/v1/edit',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //上传
    this.changeUpload = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/businesstaxchange/v1/upload',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //工商税务变更列表
    this.changeList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/businesstaxchange/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //下载
    this.changeDowanload = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/businesstaxchange/v1/download',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除工商税务变更
    this.Deletechange = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/businesstaxchange/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //工商税务变更列表总条数
    this.changeAll = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/businesstaxchange/v1/count',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //---------------------------------3---------------------------
    //注册上传
    this.loginUpload= function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/businessregister/v1/upload',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
     //一个工商注册
    this.loginOneId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/businessregister/v1/register/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
   //工商注册列表
    this.loginList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/businessregister/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //注册下载
    this.loginDownload = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/businessregister/v1/download',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑工商注册
    this.loginEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/businessregister/v1/edit',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除工商注册信息
    this.DeleteLogin = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/businessregister/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //添加工商注册信息
    this.loginadd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/businessregister/v1/add',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //工商注册信息列表总条数
    this.loginNews = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/businessregister/v1/count',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //----------------------------权限修改----------------------------
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.countSetting = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/count',
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    return this;
};