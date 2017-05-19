var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
module.exports = function(){

    this.listWeek = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/week'+urlEncode(argvs,true),
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
            uri : config()['rurl'] +'/finance/v1/month'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.listArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/areacollect'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.areaAna = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/areaanalyze'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.listProject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/groupcollect'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.proAnalysis = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/groupanalyze'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.listDriver = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/drivercollect'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.driAnalysis = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/finance/v1/driveranalyze'+urlEncode(argvs,true),
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.listUsecar = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +`/dispatchcarinfo/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.countRecord = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] +'/dispatchcarinfo/v1/count',
        };
        return request(options);
    };


    return this;
};