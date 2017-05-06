var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    this.userLogin = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['user']['rurl'] + '/user/v1/login',
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };

    return this;
}