var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    // 业务类型列表
    this.typeList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesstype/v1/maps?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 添加
    this.TypeAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesstype/v1/save',
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 编辑
    this.TypeEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesstype/v1/update/' + argvs.id,
            form:argvs
        };
        return request(options);
    };
    //获取ID
    this.findTypeId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesstype/v1/findById/' + argvs.typeId
        };
        return request(options);
    };
    //删除
    this.TypeDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesstype/v1/delete/' + argvs.id
        };
        return request(options);
    };
    //冻结
    this.TypeCongeal = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesstype/v1/congeal/' + argvs.id
        };
        return request(options);
    };
    //解冻
    this.TypeThaw = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesstype/v1/thaw/' + argvs.id
        };
        return request(options);
    };
    //获取总条数
    this.getTypeTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesstype/v1/getTotal'
        };
        return request(options);
    };
    // 业务方向科目列表
    this.CourseList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesscourse/v1/maps?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 添加
    this.CourseAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesscourse/v1/save',
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 编辑
    this.CourseEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesscourse/v1/update/' + argvs.id,
            form:argvs
        };
        return request(options);
    };
    //获取ID
        this.findIdCourse = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesscourse/v1/findById/' + argvs.courseId
        };
        return request(options);
    };
    //删除
    this.CourseDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesscourse/v1/delete/' + argvs.id
        };
        return request(options);
    };
    //冻结
    this.CourseCongeal = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesscourse/v1/congeal/' + argvs.id
        };
        return request(options);
    };
    //解冻
    this.CourseThaw = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesscourse/v1/thaw/' + argvs.id
        };
        return request(options);
    };
    //获取总条数
    this.getCourseTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesscourse/v1/getTotal'
        };
        return request(options);
    };
    // 获取业务类型的数据
    this.CourseFindType = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/businesstype/v1/findThaw',
        };
        return request(options);
    };
    return this;
}