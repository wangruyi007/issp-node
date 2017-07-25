var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){

    //设置导航权限
    this.settingNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/materialbuy/v1/setButtonPermission',//2017-07-24 模块设置导航权限
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //下拉导航权限
    this.dropDownNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/materialbuy/v1/sonPermission',//2017-07-24
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //设备类型菜单功能权限
    this.guidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/devicetype/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-24
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
   //列表
    this.devicetypeList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/devicetype/v1/list${urlEncode(argvs,true)}`,// 2017-07-24
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取设备类型总条数
    this.getdeviceTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/devicetype/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加设备类型
    this.deviceAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/devicetype/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID设备类型
    this.findDevId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/devicetype/v1/devicetype/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //设备类型编辑
    this.deviceEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/devicetype/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    //临时物资需求菜单功能权限
    this.guideDemand = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/tempmatterdemand/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-24
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取临时物资需求总记录数
    this.getdemandTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/tempmatterdemand/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //列表
    this.getDemandList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/tempmatterdemand/v1/list${urlEncode(argvs,true)}`,// 2017-07-24
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除设备类型
    this.deviceDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/devicetype/v1/delete/${argvs.id}`,    //2017-07-25
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加临时物资需求
    this.demandAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/tempmatterdemand/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID临时物资需求
    this.findMatId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/tempmatterdemand/v1/tempmatterdemand/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //临时物资需求编辑
    this.demandEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/tempmatterdemand/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    // 物资需求审核
    this.demandAudit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/tempmatterdemand/v1/audit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            },
        };
        return request(options);
    };
    //删除临时物资需求
    this.deviceDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/tempmatterdemand/v1/delete/${argvs.id}`,    //2017-07-25
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
 /*   //获取查找总记录数
    this.getInventoryTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventory/v1/count`,// 2017-07-15
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取盘点
    this.getInventory = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/inventory/v1/inventory`,// 2017-07-19
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取盘点id
    this.findInventId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventory/v1/inventoryOne/${argvs.id}`,// 2017-07-19
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //盘点记录菜单功能权限
    this.reGuidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventoryrecord/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-20
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //盘点记录列表
    this.recordList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/inventoryrecord/v1/list${urlEncode(argvs,true)}`,// 2017-07-21
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };*/
    return this;
};