var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    //列表 社会缴费
   this.socialfeeList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/socialfee/v1/listSocialFee?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.socialfeeCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/socialfee/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.socialfeeAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/socialfee/v1/add`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.socialfeeById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/socialfee/v1/listSocialFee/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.socialfeeEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/socialfee/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.socialfeeDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/socialfee/v1/delete/${argvs.id}`,
             headers : {
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
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //汇总公司
    this.companyList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/socialfee/v1/collect?startTime=${encodeURIComponent(argvs.startTime)}&endTime=${encodeURIComponent(argvs.endTime)}&payFeer=${encodeURIComponent(argvs.payFeer)}&empName=${encodeURIComponent(argvs.empName)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };

    this.allPayfeer= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/socialfee/v1/listPayfeer`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //所有姓名
    this.allName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/socialfee/v1/listEmpName`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //生成记账凭证
    this.generate = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/socialfee/v1/vGenerate?ids=${argvs.id}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //提交凭证 
    this.voucher = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/socialfee/v1/voucher`,
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