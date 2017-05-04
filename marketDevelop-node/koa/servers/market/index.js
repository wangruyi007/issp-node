var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    this.demandList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/demandanalysis/v1/maps?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 添加
    this.demandAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/demandanalysis/v1/save?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 编辑
    this.analysisEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/demandanalysis/v1/udpate/${argvs.id}?userToken=${argvs.userToken}`,
            form:argvs
        };
        return request(options);
    };
    //获取ID
    this.findAnalysisId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/demandanalysis/v1/findById/${argvs.demandId}`
        };
        return request(options);
    };
    //删除
    this.analysisDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/demandanalysis/v1/delete/${argvs.id}?userToken=${argvs.userToken}`
        };
        return request(options);
    };
    //获取总条数
    this.getAnalysisTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/demandanalysis/v1/getTotal'
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
                // token : token
            }
        };
        return request(options);
    };
    // 添加
    this.targetAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/targetinformation/v1/save?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 编辑
    this.targetEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/targetinformation/v1/update/${argvs.id}?userToken=${argvs.userToken}`,
            form:argvs
        };
        return request(options);
    };
    //获取ID
    this.findTargetId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/targetinformation/v1/findById/${argvs.targetId}`
        };
        return request(options);
    };
    //删除
    this.targetDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/targetinformation/v1/delete/${argvs.id}`
        };
        return request(options);
    };
    //获取总条数
    this.getTargetTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/targetinformation/v1/getTotal'
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
                // token : token
            }
        };
        return request(options);
    };
    // 添加
    this.channelAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketchannel/v1/save?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 编辑
    this.marketEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketchannel/v1/update/${argvs.id}$?userToken=${argvs.userToken}`,
            form:argvs
        };
        return request(options);
    };
    //获取ID
    this.findMarketId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketchannel/v1/findById/${argvs.channelId}`
        };
        return request(options);
    };
    //删除
    this.channelDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketchannel/v1/delete/${argvs.id}?userToken=${argvs.userToken}`
        };
        return request(options);
    };
    //获取总条数
    this.getChannelTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/marketchannel/v1/getTotal'
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
                // token : token
            }
        };
        return request(options);
    };
    // 添加
    this.searchAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketresearch/v1/save?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 编辑
    this.researchEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketresearch/v1/update/${argvs.id}?userToken=${argvs.userToken}`,
            form:argvs
        };
        return request(options);
    };
    //获取ID
    this.findSearchId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketresearch/v1/findById/${argvs.channelId}`
        };
        return request(options);
    };
    //删除
    this.deleteResearch = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketresearch/v1/delete/${argvs.id}?userToken=${argvs.userToken}`
        };
        return request(options);
    };
    //获取总条数
    this.getResearchTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/marketresearch/v1/getTotal'
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
                // token : token
            }
        };
        return request(options);
    };
    // 市场测算添加
    this.measureAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketmeasure/v1/save?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 市场测算编辑
    this.measureEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketmeasure/v1/update/${argvs.id}?userToken=${argvs.userToken}`,
            form:argvs
        };
        return request(options);
    };
    //市场测算获取ID
    this.findMeasureId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketmeasure/v1/findById/${argvs.measuredId}`
        };
        return request(options);
    };
    //市场测算删除
    this.deleteMeasure = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['market']['rurl'] + `/marketmeasure/v1/delete/${argvs.id}?userToken=${argvs.userToken}`
        };
        return request(options);
    };
    //市场测算获取总条数
    this.getMeasureTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['market']['rurl'] + '/marketmeasure/v1/getTotal'
        };
        return request(options);
    };
    return this;
}