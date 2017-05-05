var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
/*******编号设计*********/
    this.numberList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/designNumberInfo/v1/maps?limit=10&page=${argvs.page}`,

        };
        return request(options);
    };
    this.numberCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + "/designNumberInfo/v1/getTotal",

        };
        return request(options);
    };
    this.numberAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + "/designNumberInfo/v1/save",
            form:argvs
        };
        return request(options);
    };
    this.numberEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/designNumberInfo/v1/update/${argvs.id}`,
            form:argvs
        };
        return request(options);
    };
    this.numberGet = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/designNumberInfo/v1/findById/${argvs.id}`,
        };
        return request(options);
    };
    this.numberDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/designNumberInfo/v1/delete/${argvs.id}`,
        };
        return request(options);
    };

    /*******体系*******/
    this.systemList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/hierarchy/v1/maps?limit=10&page=${argvs.page}`,

        };
        return request(options);
    };
    this.systemCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/hierarchy/v1/getTotal',
        };
        return request(options);
    };
    this.systemAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/hierarchy/v1/save',
            form:argvs
        };
        return request(options);
    };
    this.systemGet = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/hierarchy/v1/findById/${argvs.id}`,
        };
        return request(options);
    };
    this.systemEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/hierarchy/v1/update/${argvs.id}`,
            form:argvs
        };
        return request(options);
    };
    this.systemDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/hierarchy/v1/delete/${argvs.id}`,
        };
        return request(options);
    };
    this.systemCongeal = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/hierarchy/v1/congeal/${argvs.id}`,
        };
        return request(options);
    };
    this.systemThaw = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/hierarchy/v1/thaw/${argvs.id}`,
        };
        return request(options);
    };
    /*******部门*******/
    this.departmentList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/departmentDetail/v1/maps?limit=10&page=${argvs.page}`,

        };
        return request(options);
    };
    this.departmentCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/departmentDetail/v1/getTotal',

        };
        return request(options);
    };
    this.departGetSystem = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/hierarchy/v1/findStatus',

        };
        return request(options);
    };
    this.departmentAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/departmentDetail/v1/save',
            form:argvs
        };
        return request(options);
    };
    this.departmentGet = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/departmentDetail/v1/findById/${argvs.id}`,
        };
        return request(options);
    };
    this.departmentEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/departmentDetail/v1/update/${argvs.id}`,
            form:argvs
        };
        return request(options);
    };
    this.departmentDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/departmentDetail/v1/delete/${argvs.id}`,
        };
        return request(options);
    };
    this.departmentCongeal = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/departmentDetail/v1/congeal/${argvs.id}`,
        };
        return request(options);
    };
    this.departmentThaw = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/departmentDetail/v1/thaw/${argvs.id}`,
        };
        return request(options);
    };
    /*******岗位层级******/
    this.postlevelList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/arrangement/v1/maps?limit=10&page=${argvs.page}`,

        };
        return request(options);
    };
    this.postlevelCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/arrangement/v1/getTotal',

        };
        return request(options);
    };
    this.postlevelParent = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/arrangement/v1/findStatus',

        };
        return request(options);
    };
    this.postlevelAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/arrangement/v1/save',
            form:argvs
        };
        return request(options);
    };
    this.postlevelGet = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/arrangement/v1/findById/${argvs.id}`,
        };
        return request(options);
    };
    this.postlevelDel = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/arrangement/v1/delete/${argvs.id}`,
        };
        return request(options);
    };
    /*******岗位******/
    this.postsList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/positionDetail/v1/maps?limit=10&page=${argvs.page}`,

        };
        return request(options);
    };
    this.postsCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/positionDetail/v1/getTotal',

        };
        return request(options);
    };
    this.getDepartList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/departmentDetail/v1/maps?_includes=id&_includes=department',
        };
        return request(options);

    };
    this.getArrangement = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/arrangement/v1/findStatus?_includes=arrangement&_includes=id',

        };
        return request(options);
    };
    this.getModule = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/moduletype/v1/findThaw',
        };
        return request(options);
    };
    this.postsAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/positionDetail/v1/save',
            form:argvs
        };
        return request(options);
    };
    this.postsGet = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/positionDetail/v1/findById/${argvs.id}`,
        };
        return request(options);
    };
    this.postsEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/positionDetail/v1/update/${argvs.id}`,
            form:argvs
        };
        return request(options);
    };
    this.postsDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/positionDetail/v1/delete/${argvs.id}`,
        };
        return request(options);
    };
    this.postsCongeal = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/positionDetail/v1/congeal/${argvs.id}`,
        };
        return request(options);
    };
    this.postsThaw = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + `/positionDetail/v1/thaw/${argvs.id}`,
        };
        return request(options);
    };
    this.motypeList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/moduletype/v1/maps?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.getAngle = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/angle/v1/maps',
        };
        return request(options);
    };
    this.getDimension = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/dimension/v1/maps',
        };
        return request(options);
    };
    this.getClassify = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/instructionClassify/v1/maps',
        };
        return request(options);
    };
    this.getReflect = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/reflect/v1/maps',
        };
        return request(options);
    };
    this.getOperate = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/operate/v1/maps',
        };
        return request(options);
    };
    this.getPostId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/positionDetail/v1/findById/${argvs.id}?_includes=serialNumber&_includes=id`,
        };
        return request(options);
    };
    this.explainAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/positionInstruction/v1/save',
            form:argvs
        };
        return request(options);
    };
    return this;
};
