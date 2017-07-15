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
            uri : config()['rurl'] + '/moneyready/v1/setButtonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //导航权限
    this.siginNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/moneyready/v1/sonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.baseInfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/staffrecords/v1/maps?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.countBaseInfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/staffrecords/v1/getTotal',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.manUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/staffrecords/v1/uploadEnclosure/${argvs.fields.id}`,
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.quaList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/personnelqualification/v1/maps?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.countQua = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/personnelqualification/v1/getTotal',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.quaDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/personnelqualification/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.quaAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/personnelqualification/v1/save',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.quaEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/personnelqualification/v1/findById/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.quaEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/personnelqualification/v1/update/${argvs.id}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };





















    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.countSetting = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/count',
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.monCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/moneyready/v1/count/${argvs.month}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.costPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/moneyready/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.waitList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/waitpay/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.countWait = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/waitpay/v1/waitCountSum',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.payAdd = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/waitpay/v1/pay?isPay='+argvs.isPay+'&id='+argvs.id,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.payById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitpay/v1/waitpay/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.waitPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitpay/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.hasList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/waitpay/v1/pays?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.countAlready = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/waitpay/v1/payCountSum',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.hasCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitpay/v1/driverCount`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.areaCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitpay/v1/arrivalCount`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.useCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/waitpay/v1/carUserCount`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    return this;
};