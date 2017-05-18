var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
module.exports = function(){

    this.listProgress = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +`/qualificationscollect/v1/maps?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.countProgress = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/qualificationscollect/v1/getTotal',
        };
        return request(options);
    };
    this.addProgress = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] +'/qualificationscollect/v1/save',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.getProgress = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +`/qualificationscollect/v1/findById/${argvs.id}`
        };
        return request(options);
    };
    this.editProgress = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] +`/qualificationscollect/v1/update/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.deleteProgress = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] +`/qualificationscollect/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    return this;
};