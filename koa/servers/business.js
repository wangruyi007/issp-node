var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
console.info(config()['customer']['rurl']);
module.exports = function(){
    //获取客户级别列表
    this.customerlevel = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerlevel/v1/listCustomerLevel',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //编辑
    this.customerlevelEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerlevel/v1/edit',
            form : argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加
    this.customerlevelAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerlevel/v1/add',
            form : argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //删除
    this.customerlevelDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerlevel/v1/delete/'+argvs.id,

        };
        return request(options);
    };
    //冻结
    this.customerlevelCongeal = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerlevel/v1/congeal/'+argvs.id,

        };
        return request(options);
    };
    //解冻
    this.customerlevelThaw = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerlevel/v1/thaw/'+argvs.id,

        };
        return request(options);
    };


    //客户基本信息
    this.listCustomerBaseInfo = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/listCustomerBaseInfo',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.customerbaseinfoEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/edit',
            form:argvs,
        };
        return request(options);
    };
    this.customerbaseinfoNumber = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/generateNumber',
            form:argvs,
        };
        return request(options);
    };
    this.customerbaseinfoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/add',
            form:argvs,
        };
        return request(options);
    };
    //删除
    this.customerbaseinfoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/delete/'+argvs.id,

        };
        return request(options);
    };

    //冻结
    this.customerbaseinfoCongeal = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/congeal/'+argvs.id,

        };
        return request(options);
    };
    //解冻
    this.customerbaseinfoThaw = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/thaw/'+argvs.id,

        };
        return request(options);
    };


    //客户详细信息
    this.listCustomerDetail = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerdetail/v1/listCustomerDetail',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.customerdetailEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerdetail/v1/edit',
            form:argvs,
            headers : {
                // token : token
            }
        };
        console.info(argvs);
        return request(options);
    };
    this.customerdetailAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerdetail/v1/add',
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.customerdetailDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerdetail/v1/delete/'+argvs.id,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.getInfoByCustomerNum = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerdetail/v1/getInfoByCustomerNum?customerNum='+argvs.customerNum,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.getCustomer = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/getCustomer?customerNum='+argvs.customerNum,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.getCusNum = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/getCusNum',
            headers : {
                // token : token
            }
        };
        return request(options);
    };

    //客户邮箱
    this.listCusEmail = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/cusemail/v1/listCusEmail',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.getWorks = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/customerbaseinfo/v1/getWorks',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.cusemailAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/cusemail/v1/add',
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.cusemailEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/cusemail/v1/edit',
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.cusemailDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/cusemail/v1/delete/'+argvs.id,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.cusemailCongeal = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/cusemail/v1/congeal/'+argvs.id,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.cusemailThaw = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/cusemail/v1/thaw/'+argvs.id,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.cusemailCollect = function(argvs){

        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customer/cusemail/v1/Collect/?works='+argvs.works,
            headers : {
                // token : token
            }

        };
        return request(options);
    };

    //获取图片流
    this.captcha = function(argvs){
        var options = {
            method : 'get',
            timeout : 3000,
            uri : config()['rurl'] + 'project/' + argvs + '/logo',
            headers : {}
        };
        return request(options);
    };


    return this;
}