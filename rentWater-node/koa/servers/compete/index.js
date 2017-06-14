var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
module.exports = function(){
    //添加房租缴费
    this.rentAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/rentpay/v1/add',
            form : argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //上传附件
    this.rentUpload = function(argvs) {
        var options = {
            method: 'POST',
            timeout: 3000,
            uri: config()['rurl'] + '/rentpay/v1/uploadAttachments',
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    }
    //获取地区
    this.rentArea= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/rentpay/v1/area',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //一个房租缴费
    this.rentId= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/rentpay/v1/rent/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //编辑房租缴费
    this.rentEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/rentpay/v1/edit',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }

        };
        return request(options);
    };
    //房租总条数
    this.rentCount= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/rentpay/v1/count',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除房租缴费
    this.rentDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/rentpay/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //汇总
    this.rentSummary= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/rentpay/v1/collect'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };console.log(argvs)
        return request(options);
    };
    //获取房租缴费
    this.rentList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/rentpay/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
//-------------------------------------员工住宿水电费-------------------------------------
    //编辑员工住宿水电费
    this.waterEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/stayutilities/v1/edit',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取名字
    this.waterName= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/stayutilities/v1/name',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //新增员工住宿水电费
    this.waterAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/stayutilities/v1/add',
            form : argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //一个员工住宿水电费
    this.waterId= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/stayutilities/v1/stay/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //员工住宿水电费列表总条数
    this.waterCount= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/stayutilities/v1/count',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //汇总
    this.waterSummary= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/stayutilities/v1/collect'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        // console.log(argvs)
        return request(options);
    };
    //获取员工住宿水电费
    this.waterList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/stayutilities/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除员工住宿水电费
    this.waterDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/stayutilities/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //--------------------------------------------------
    //项目分析
    this.moneyProject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/project'+urlEncode(argvs,true)
        };
        return request(options);
    }; 
    //项目组分析
    this.moneyGroup = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/group'+urlEncode(argvs,true)
        };
        return request(options);
    };
    return this;
};