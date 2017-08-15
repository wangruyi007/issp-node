var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){

    //快递收发设置导航权限
    this.settingNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/courier/v1/setButtonPermission',//2017-07-28 模块设置导航权限
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //快递收发下拉导航权限
    this.dropDownNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/courier/v1/sonPermission',//2017-07-28
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //快递收发菜单功能权限
    this.guidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/courier/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-28
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
   //快递收发列表
    this.getDispatcherList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/courier/v1/list${urlEncode(argvs,true)}`,// 2017-07-28
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取快递收发总条数
    this.getDispacherTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/courier/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 快递收发添加
    this.dispatchAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/courier/v1/save`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有人的寄/收件人的联系方式
    this.getAllTel = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/courier/v1/findContact/${argvs.dormitoryAddress}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取快递添加ID
    this.findDisId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/courier/v1/courier/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //快递收发编辑
    this.dispatcherEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/courier/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    //删除快递收发
    this.dispatcherDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/courier/v1/delete/${argvs.id}`,    //2017-07-29
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有项目组
    this.dispatcherTeam = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/courier/v1/findDepartments',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有人
    this. dispatcherName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/courier/v1/findAllNames',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取寄件地和收件地
    this. dispatcherArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/courier/v1/findAllAreas',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有快递公司
    this. dispatcherCompany = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/courier/v1/allCompany',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //获取日汇总
    this. getDayList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/courier/v1/dayCount?sendTime=`+argvs.sendTime,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取weeks
    this. getWeeks = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/courier/v1/findWeek/${argvs.year}/${argvs.month}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取周汇总
    this. getWeekList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/courier/v1/weekCount`+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取weeks
    this. getWeeks = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/courier/v1/findWeek/${argvs.year}/${argvs.month}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //获取所有月份
    this.getALLMonths = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/courier/v1/allMonth`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取月汇总
    this. getMonthList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/courier/v1/monthCount`+urlEncode(argvs,true),
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有年份
    this.getAllYears = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/courier/v1/allYear`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取年汇总
    this.getYearList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/courier/v1/yearCount?year=`+argvs.year,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //公司信息菜单功能权限
    this.guideCompany = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/couriercompany/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-31
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //公司信息收发列表
    this.getCompanyList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/couriercompany/v1/list${urlEncode(argvs,true)}`,// 2017-07-31
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取公司信息总条数
    this.getCompanyTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/couriercompany/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 公司信息添加
    this.companyAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/couriercompany/v1/save`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取公司信息ID
    this.findComId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/couriercompany/v1/couriercompany/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //公司信息编辑
    this.companyEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/couriercompany/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    //删除公司信息
    this.companyDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/couriercompany/v1/delete/${argvs.id}`,    //2017-07-29
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //权限设置
    this.settingList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.settingCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/count',
        };
        return request(options);
    };
    this.getPermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getpermitList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
        };
        return request(options);
    };
    this.editSettings = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    return this;
};