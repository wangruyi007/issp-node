var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
    //列表 其他费用
   this.expensesList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/maps?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.expensesCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/otherexpenses/v1/getTotal',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.expensesAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/save?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.expensesById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/findById/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.expensesEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/update/${argvs.id}?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //删除 
    this.expensesDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/delete/${argvs.id}?userToken=${argvs.userToken}`,
        };
        return request(options);
    };
    //地区汇总
   this.areaList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/collect/area?start=${argvs.start}&end=${argvs.end}&area=${encodeURIComponent(argvs.area)}&project=${encodeURIComponent(argvs.project)}&type=${encodeURIComponent(argvs.type)}&name=${encodeURIComponent(argvs.name)}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //项目组汇总
    this.projectgroupList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/collect/project?start=${argvs.start}&end=${argvs.end}&area=${encodeURIComponent(argvs.area)}&project=${encodeURIComponent(argvs.project)}&type=${encodeURIComponent(argvs.type)}&name=${encodeURIComponent(argvs.name)}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //类型汇总
    this.projectTypeList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/collect/type?start=${argvs.start}&end=${argvs.end}&area=${encodeURIComponent(argvs.area)}&project=${encodeURIComponent(argvs.project)}&type=${encodeURIComponent(argvs.type)}&name=${encodeURIComponent(argvs.name)}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //项目名称汇总
    this.projectNameList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherexpenses/v1/collect/name?start=${argvs.start}&end=${argvs.end}&area=${encodeURIComponent(argvs.area)}&project=${encodeURIComponent(argvs.project)}&type=${encodeURIComponent(argvs.type)}&name=${encodeURIComponent(argvs.name)}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };

    return this;
};