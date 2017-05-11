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
    this.countBasicinfo = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/contractprojectinfo/v1/count',
        };
        return request(options);
    };
    this.addBasicinfo = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/contractprojectinfo/v1/add',
            form:argvs
        };
        return request(options);
    };
    this.getBasicinfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractprojectinfo/v1/contractprojectinfo/${argvs.id}`,
        };
        return request(options);
    };
    this.editBasicinfo = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/contractprojectinfo/v1/edit',
            form:argvs
        };
        return request(options);
    };
    this.deleteBasicinfo = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/contractprojectinfo/v1/delete/${argvs.id}`,
        };
        return request(options);
    };
    this.listMaterial = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractquotedata/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.countMaterial = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/contractquotedata/v1/count',
        };
        return request(options);
    };
    this.addMaterial = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/contractquotedata/v1/add',
            form:argvs
        };
        return request(options);
    };
    this.getMaterial = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractquotedata/v1/contractquotedata/${argvs.id}`
        };
        return request(options);
    };
    this.editMaterial = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/contractquotedata/v1/edit',
            form:argvs
        };
        return request(options);
    };
    this.deleteMaterial = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/contractquotedata/v1/delete/${argvs.id}`,
        };
        return request(options);
    };
    this.congealMaterial = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/contractquotedata/v1/congeal/${argvs.id}`,
        };
        return request(options);
    };
    this.thawMaterial = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/contractquotedata/v1/thaw/${argvs.id}`,
        };
        return request(options);
    };
    this.collectMaterial = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractquotedata/v1/collects?area=${encodeURIComponent(argvs.area)}&customerName=${encodeURIComponent(argvs.customerName)}&startDate=${argvs.startDate}&endDate=${argvs.endDate}`,
        };
        return request(options);
    };
    this.listStandard = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractnodestandard/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.countStandard = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/contractnodestandard/v1/count',
        };
        return request(options);
    };
    this.addStandard = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/contractnodestandard/v1/add',
            form:argvs
        };
        return request(options);
    };
    this.getStandard = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractnodestandard/v1/contractnodestandard/${argvs.id}`,
        };
        return request(options);
    };
    this.editStandard = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/contractnodestandard/v1/edit',
            form:argvs
        };
        return request(options);
    };
    this.deleteStandard = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/contractnodestandard/v1/delete/${argvs.id}`,
            form:argvs
        };
        return request(options);
    };
    this.collectStandard = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + "/contractnodestandard/v1/collect?date="+
            (argvs.date==undefined?'':argvs.date)+"&area="+(argvs.area==undefined?'':encodeURIComponent(argvs.area))+
            "&project="+(argvs.project==undefined?'':encodeURIComponent(argvs.project))+
            "&node="+(argvs.node==undefined?'':encodeURIComponent(argvs.node))
        };
        return request(options);
    };


    return this;
};