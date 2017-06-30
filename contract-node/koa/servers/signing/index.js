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
            uri : config()['rurl'] + '/siginmanage/v1/setButtonPermission',//2017-06-12
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //导航权限
    this.siginNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/siginmanage/v1/sonPermission',//2017-06-10
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //菜单功能权限
    this.guidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/siginmanage/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //列表
    this.signList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/siginmanage/v1/list${urlEncode(argvs,true)}`,//2017-06-07
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加
    this.signAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/siginmanage/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.signEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/siginmanage/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 审核
    this.signAudit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/siginmanage/v1/audit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.findSignId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/siginmanage/v1/getOneById/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.signDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/siginmanage/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //获取总条数
    this.getSignTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/siginmanage/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目签订与立项 上传附件
    this.siginmanageUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/siginmanage/v1/uploadFile/${argvs.fields.id}`,
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目签订与立项 导入
    this.siginmanageImport = function(argvs){
        var options = {
            url: config()['rurl']+'/siginmanage/v1/importExcel',
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有的内部项目名称
    this.siginmanageProject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/siginmanage/v1/listInnerProject',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 项目签订与立项 查看附件
    this.signEnclosure = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/siginmanage/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目签订与立项 删除文件
    this.delFile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/siginmanage/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //项目合同基本信息菜单权限
    this.baseInfoPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfomanage/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目合同基本信息列表
    this.infoList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfomanage/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加项目合同基本信息
    this.infoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfomanage/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑项目合同基本信息
    this.infoEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfomanage/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.findInfoId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfomanage/v1/getOneById/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除项目合同基本信息
    this.infoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfomanage/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取项目合同基本信息总条数
    this.getInfoTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfomanage/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目合同基本信息 上传附件
    this.basicInfoUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/baseinfomanage/v1/uploadFile/${argvs.fields.id}`,
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目合同基本信息 导入
    this.basicInfoImport = function(argvs){
        var options = {
            url: config()['rurl']+'/baseinfomanage/v1/leadExcel',
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有的内部项目名称
    this.basicInfoProject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/baseinfomanage/v1/allInnerProjects',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 项目合同基本信息 查看附件
    this.infoEnclosure = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfomanage/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目合同基本信息 删除文件
    this.delFileInfo = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfomanage/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //项目派工单菜单权限
    this.sheetPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dispatchsheet/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目派工单列表
    this.sheetList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dispatchsheet/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加项目派工单
    this.sheetAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/dispatchsheet/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑项目派工单
    this.sheetEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/dispatchsheet/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID项目派工单
    this.findSheetId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dispatchsheet/v1/getOneById/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除项目派工单
    this.sheetDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/dispatchsheet/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取项目派工单总条数
    this.getSheetTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dispatchsheet/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取内部项目编号
    this.getNum = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/baseinfomanage/v1/getInnerNum',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取项目合同
    this.getSheetProjectNum = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfomanage/v1/getByInnerProjectNum${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    }
    //项目派工单 上传附件
    this.sheetUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/dispatchsheet/v1/uploadFile/${argvs.fields.id}`,
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目派工单 导入
    this.sheetImport = function(argvs){
        var options = {
            url: config()['rurl']+'/dispatchsheet/v1/leadExcel',
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有的内部项目名称
    this.sheetProject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/dispatchsheet/v1/allInnerProjects',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    // 项目派工单 查看附件
    this.listFileSheet = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dispatchsheet/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目派工单 删除文件
    this.delFileSheet = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/dispatchsheet/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //合同类型菜单权限
    this.categoryPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractcategory/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-09
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //合同类型列表
    this.categoryList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractcategory/v1/list?limit=10&page${argvs.page}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加合同类型
    this.categoryAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/contractcategory/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑合同类型
    this.categoryEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/contractcategory/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID合同类型
    this.findCategoryId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractcategory/v1/getOneById/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除合同类型
    this.categoryDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/contractcategory/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取合同类型总条数
    this.getCategoryTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/contractcategory/v1/count',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //合同类型 上传附件
    this.typeUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/contractcategory/v1/uploadFile/${argvs.fields.id}`,
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 合同类型 查看附件
    this.listFileType = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractcategory/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //合同类型 删除文件
    this.delFileType = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/contractcategory/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //邮件汇总菜单权限
    this.mailPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //邮件汇总列表
    this.MailList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/list?limit=10&page=${argvs.page}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加邮件汇总
    this.MailAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑邮件汇总
    this.MailEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID邮件汇总
    this.findMailId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/getOneById/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除邮件汇总
    this.mailDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数邮件汇总
    this.getMailTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/collectemail/v1/count',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //冻结邮件汇总
    this.MailCongeal = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/congeal/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //解冻邮件汇总
    this.MailThaw = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/thaw/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //合同签订与立项汇总
    this.SignSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/collectSign?areas=${encodeURIComponent(argvs.areas)}`,
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //获取合同签订与立项汇总所有地区
    this.getManageArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/siginmanage/v1/listArea',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目基本信息合同汇总
    this.InformationSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/collectBaseInfo?firstCompany=${encodeURIComponent(argvs.firstCompany)}`,
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //获取项目基本信息合同所有甲方公司
    this.getInformationArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/baseinfomanage/v1/listCompany',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //派工单信息合同汇总
    this.sheetSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collectemail/v1/collectDispatch?areas=${encodeURIComponent(argvs.areas)}`,
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
    //获取派工单信息合同所有地区
    this.getSheetArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/dispatchsheet/v1/listArea',
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
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }

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
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    return this;
}