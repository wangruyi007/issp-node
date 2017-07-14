var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    //业务类型菜单功能权限
    this.typeGuidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/businesstype/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-21
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 业务类型列表
    this.typeList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/businesstype/v1/maps?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 添加
    this.TypeAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/businesstype/v1/save`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.TypeEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/businesstype/v1/update/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.findTypeId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/businesstype/v1/findById/${argvs.typeId}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.TypeDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/businesstype/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //冻结
    this.TypeCongeal = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/businesstype/v1/congeal/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //解冻
    this.TypeThaw = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/businesstype/v1/thaw/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数
    this.getTypeTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['other']['rurl'] + '/businesstype/v1/getTotal',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //业务类型菜单功能权限
    this.courseGuidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/businesscourse/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-21
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 业务方向科目列表
    this.CourseList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/businesscourse/v1/maps?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 添加
    this.CourseAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/businesscourse/v1/save?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.CourseEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/businesscourse/v1/update/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
        this.findIdCourse = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/businesscourse/v1/findById/${argvs.courseId}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.CourseDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/businesscourse/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //冻结
    this.CourseCongeal = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/businesscourse/v1/congeal/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //解冻
    this.CourseThaw = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/businesscourse/v1/thaw/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数
    this.getCourseTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['other']['rurl'] + '/businesscourse/v1/getTotal',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 获取业务类型的数据
    this.CourseFindType = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['other']['rurl'] + '/businesstype/v1/findThaw',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //权限设置
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/marpermission/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.countSetting = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['other']['rurl'] + '/marpermission/v1/count',
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/marpermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/marpermission/v1/listOperateById/${argvs.id}`,
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['other']['rurl'] + `/marpermission/v1/edit/${argvs.id}`,
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    return this;
}