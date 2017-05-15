var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    this.listWeek = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/week',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.listMonth = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/month',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };


    return this;
};