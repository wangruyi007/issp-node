/**
 * Created by Bjike on 2017/5/16.
 */
var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
    this.moduleList = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['type'] + '/module/v1/list',
        };
        return request(options);
    };
    this.listname = function(data){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['type'] + '/module/v1/list/'+encodeURIComponent(data.name),
        };
        return request(options);
    };
    this.addmodule = function(data){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['type'] + '/assemble/v1/add',
            form:data
        };
        return request(options);
    };
    this.delmodule = function(data){
        console.info(data);
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['type'] + '/assemble/v1/delete',
            form:data
        };
        return request(options);
    };
    this.moduleSave = function(data){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['type'] + '/module/v1/check',
            form:data
        };
        return request(options);
    };
    return this;
}