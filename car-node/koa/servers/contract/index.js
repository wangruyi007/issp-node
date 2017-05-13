var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    this.listBasicinfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractprojectinfo/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.addBasicinfo = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/contractprojectinfo/v1/add',
            form:argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };

    return this;
};