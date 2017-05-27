var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
    this.basicInfoList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/paytax/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    //获取总条数
    this.getBasicInfoTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projecttax/v1/count'
        };
        return request(options);
    };
    // 添加
    this.basicInfoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/paytax/v1/add`,
            form:argvs,
            headers : {
                userToken : argvs.token
            },
        };
        return request(options);
    };
    // 编辑
    this.basicInfoEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/paytax/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.token
            },
        };
        return request(options);
    };
    //删除
    this.basicInfoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/paytax/v1/delete/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.token
            },
        };
        return request(options);
    };
    //获取ID
    this.findBasicInfoId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/paytax/v1/getOne/${argvs.id}`
        };
        return request(options);
    };
    this.basicInfoShare = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/paytax/v1/split`,
            headers : {
                userToken : argvs.token
            },
        };
        return request(options);
    };
    //汇总
    this.collectSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + "/paytax/v1/ctCompany?startTime="+(argvs.startTime==undefined?'':argvs.startTime)+"&endTime="+(argvs.endTime==undefined?'':encodeURIComponent(argvs.endTime))+
            "&company="+(argvs.company==undefined?'':encodeURIComponent(argvs.company)),
            headers : {
                userToken : argvs.token
            },
        };
        return request(options);
    };
    //查询所有公司名
    this.projectsAllCompanyById = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/paytax/v1/listCompany',
        };
        return request(options);
    };
    this.taxSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + "/paytax/v1/ctTaxType?startTime="+(argvs.startTime==undefined?'':argvs.startTime)+"&endTime="+(argvs.endTime==undefined?'':encodeURIComponent(argvs.endTime))+
            "&taxType="+(argvs.taxType==undefined?'':encodeURIComponent(argvs.taxType)),
            headers : {
                userToken : argvs.token
            },
        };
        return request(options);
    };
    this.projectsAllTaxById = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/paytax/v1/listTaxType',
        };
        return request(options);
    };

    /*项目税金*/
    this.taxList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projecttax/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    //获取总条数
    this.getTaxTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projecttax/v1/count'
        };
        return request(options);
    };
    // 添加
    this.taxAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/projecttax/v1/add`,
            form:argvs,
            headers : {
                userToken : argvs.token
            },
        };
        return request(options);
    };
    this.taxInfoEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/projecttax/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.token
            },
        };
        return request(options);
    };
    this.findTaxId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projecttax/v1/getOne/${argvs.id}`
        };
        return request(options);
    };
    this.taxInfoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/projecttax/v1/delete/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.token
            },
        };
        return request(options);
    };
    //汇总项目
    this.projectSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + "/projecttax/v1/ctProject?startTime="+(argvs.startTime==undefined?'':argvs.startTime)+"&endTime="+(argvs.endTime==undefined?'':encodeURIComponent(argvs.endTime))+
            "&project="+(argvs.project==undefined?'':encodeURIComponent(argvs.project)),
            headers : {
                userToken : argvs.token
            },
        };
        return request(options);
    };
    this.projectsAllProById = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/projecttax/v1/listProject',
        };
        return request(options);
    };
    this.projectTaxSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + "/projecttax/v1/ctTaxType?startTime="+(argvs.startTime==undefined?'':argvs.startTime)+"&endTime="+(argvs.endTime==undefined?'':encodeURIComponent(argvs.endTime))+
            "&taxType="+(argvs.taxType==undefined?'':encodeURIComponent(argvs.taxType)),
            headers : {
                userToken : argvs.token
            },
        };
        return request(options);
    };
    this.listAllProById = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/projecttax/v1/listTaxType',
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
}