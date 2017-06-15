var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
module.exports = function(){
    //查询总记录数 
    this.countRecord= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/count',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //新增资金流水
    this.moneyAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/add',
            form : argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
     //删除资金流水
    this.moneyDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/fundrecord/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //根据id查询资金流水
    this.moneyId= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/fundrecord/v1/find/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //条件汇总
    this.moneyConditionsAll= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/condition'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //编辑资金流水
    this.moneyEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/edit',
            form : argvs,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //月汇总
    this.moneyMonthAll = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/month'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
            
        };
        return request(options);
    };
    //列表分页查询 
    this.moneyList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/fundrecord/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };  
    //地区分析
    this.moneyArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/area'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //项目分析
    this.moneyProject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/project'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    }; 
    //项目组分析
    this.moneyGroup = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/group'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };  
    //地区列表
    this.areas = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/areas',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };  
    //项目组列表
    this.projectGroups= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/groups',
            headers : {
                userToken : argvs.token
            }
        };console.log(argvs)
        return request(options);
    };  
    //项目名称列表
    this.projects= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundrecord/v1/projects',
            headers : {
                userToken : argvs.token
            }
        };
        
        return request(options);
    };  
    return this;
};