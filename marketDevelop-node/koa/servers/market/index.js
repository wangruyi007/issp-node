var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){
    //需求分析菜单功能权限
    this.demandGuidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/demandanalysis/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-19
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 需求分析列表
    this.demandList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/demandanalysis/v1/maps?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 添加
    this.demandAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/demandanalysis/v1/save`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.analysisEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/demandanalysis/v1/udpate/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.findAnalysisId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/demandanalysis/v1/findById/${argvs.demandId}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.analysisDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/demandanalysis/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数
    this.getAnalysisTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/demandanalysis/v1/getTotal',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //需求分析 上传附件
    this.analysisUploadFile = function(argvs){
        var options = {
            url: config()['market']['rurl']+`/demandanalysis/v1/uploadEnclosure/${argvs.fields.id}`,
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
    // 需求分析 查看附件
    this.listFileAnalysis = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/demandanalysis/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //需求分析 删除文件
    this.delFileAnalysis = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/demandanalysis/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //目标信息菜单功能权限
    this.targetGuidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/targetinformation/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-21
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //目标信息列表
    this.targetList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/targetinformation/v1/maps?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 添加
    this.targetAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/targetinformation/v1/save`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.targetEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/targetinformation/v1/update/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.findTargetId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/targetinformation/v1/findById/${argvs.targetId}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.targetDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/targetinformation/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数
    this.getTargetTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/targetinformation/v1/getTotal',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //目标信息 上传附件
    this.targetUploadFile = function(argvs){
        var options = {
            url: config()['market']['rurl']+`/targetinformation/v1/uploadEnclosure/${argvs.fields.id}`,
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
    // 目标信息 查看附件
    this.listFileTarget = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/targetinformation/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //目标信息 删除文件
    this.delFileTarget = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/targetinformation/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //市场挖掘菜单功能权限
    this.channelGuidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketchannel/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-21
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //市场挖掘列表
    this.marketList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketchannel/v1/maps?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 添加
    this.channelAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketchannel/v1/save`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.marketEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketchannel/v1/update/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.findMarketId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketchannel/v1/findById/${argvs.channelId}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.channelDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketchannel/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数
    this.getChannelTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/marketchannel/v1/getTotal',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //市场挖掘 上传附件
    this.targetUploadFile = function(argvs){
        var options = {
            url: config()['market']['rurl']+`/targetinformation/v1/uploadEnclosure/${argvs.fields.id}`,
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
    // 市场挖掘 查看附件
    this.listFileTarget = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/targetinformation/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //市场挖掘 删除文件
    this.delFileTarget = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/targetinformation/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //市场调研菜单功能权限
    this.researchGuidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketresearch/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-21
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //市场调研列表
    this.researchList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketresearch/v1/maps?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 添加
    this.searchAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketresearch/v1/save`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.researchEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketresearch/v1/update/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.findSearchId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketresearch/v1/findById/${argvs.channelId}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.deleteResearch = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketresearch/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取总条数
    this.getResearchTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/marketresearch/v1/getTotal',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //市场调研 上传附件
    this.ResearchUploadFile = function(argvs){
        var options = {
            url: config()['market']['rurl']+`/marketresearch/v1/uploadEnclosure/${argvs.fields.id}`,
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
    // 市场调研 查看附件
    this.listFileResearch = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketresearch/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //市场调研 删除文件
    this.delFileResearch = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketresearch/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    //市场测算菜单功能权限
    this.measureGuidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketmeasure/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-21
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //市场测算列表
    this.measureList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketmeasure/v1/maps?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 市场测算添加
    this.measureAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketmeasure/v1/save`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // 市场测算编辑
    this.measureEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketmeasure/v1/update/${argvs.id}`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //市场测算获取ID
    this.findMeasureId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketmeasure/v1/findById/${argvs.measuredId}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //市场测算删除
    this.deleteMeasure = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketmeasure/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //市场测算获取总条数
    this.getMeasureTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/marketmeasure/v1/getTotal',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //市场测算 上传附件
    this.measureUploadFile = function(argvs){
        var options = {
            url: config()['market']['rurl']+`/marketmeasure/v1/uploadEnclosure/${argvs.fields.id}`,
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
    // 市场测算 查看附件
    this.listFileMeasure = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketmeasure/v1/listFile/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //市场测算 删除文件
    this.delFileMeasure = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketmeasure/v1/deleteFile`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs.fields
        };
        return request(options);
    };
    return this;
}