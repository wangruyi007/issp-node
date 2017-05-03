var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    this.WebInfoList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddingwebinfo/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 添加
    this.WebInfoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/biddingwebinfo/v1/add?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 编辑
    this.WebInfoEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/biddingwebinfo/v1/edit?userToken=${argvs.userToken}`,
            form:argvs
        };
        return request(options);
    };

    //删除
    this.WebInfoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/biddingwebinfo/v1/delete/${argvs.id}?userToken=${argvs.userToken}`,
            // headers : {
            //      userToken : argvs.userToken  ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // }
        };
        return request(options);
    };
    //获取总条数
    this.getWebInfoTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/biddingwebinfo/v1/count'
        };
        return request(options);
    };
    //获取ID
    this.findWebInfoId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddingwebinfo/v1/web/${argvs.id}`
        };
        return request(options);
    };
    //招标信息列表
    this.InfoList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 添加
    this.InfoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/add?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 编辑
    this.InfoEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/edit?userToken=${argvs.userToken}`,
            form:argvs
        };
        return request(options);
    };

    //删除
    this.InfoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/delete/${argvs.id}?userToken=${argvs.userToken}`,
            // headers : {
            //      userToken : argvs.userToken  ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // }
        };
        return request(options);
    };
    //获取总条数
    this.getInfoTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/biddinginfo/v1/count'
        };
        return request(options);
    };
    //获取ID
    this.getInfoId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/info/${argvs.id}`
        };
        return request(options);
    };
    //投标答疑问题列表
    this.questionsList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinganswerquestions/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 添加
    this.questionsAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinganswerquestions/v1/add?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 编辑
    this.questionsEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinganswerquestions/v1/edit?userToken=${argvs.userToken}`,
            form:argvs
        };
        return request(options);
    };

    //删除
    this.questionsDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinganswerquestions/v1/delete/${argvs.id}?userToken=${argvs.userToken}`,
            // headers : {
            //      userToken : argvs.userToken  ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // }
        };
        return request(options);
    };
    //获取总条数
    this.getQuestionsTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/biddinganswerquestions/v1/count'
        };
        return request(options);
    };
    //获取ID
    this.getQuestionsId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinganswerquestions/v1/answer/${argvs.id}`
        };
        return request(options);
    };
    //标书资料列表
    this.tenderList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/tenderinfo/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 添加
    this.tenderAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/tenderinfo/v1/add?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 编辑
    this.tenderEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/tenderinfo/v1/edit?userToken=${argvs.userToken}`,
            form:argvs
        };
        return request(options);
    };

    //删除
    this.tenderDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/tenderinfo/v1/delete/${argvs.id}?userToken=${argvs.userToken}`
        };
        return request(options);
    };
    //获取总条数
    this.getTenderTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/tenderinfo/v1/count'
        };
        return request(options);
    };
    //获取ID
    this.getTenderId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/tenderinfo/v1/info/${argvs.id}`
        };
        return request(options);
    };
    //开标信息列表
    this.openingInfoList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/bidopeninginfo/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 添加
    this.openingInfoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/bidopeninginfo/v1/add?userToken=${argvs.userToken}`,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    // 编辑
    this.openingInfoEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/bidopeninginfo/v1/edit?userToken=${argvs.userToken}`,
            form:argvs
        };
        return request(options);
    };

    //删除
    this.openingInfoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/bidopeninginfo/v1/delete/${argvs.id}?userToken=${argvs.userToken}`
        };
        return request(options);
    };
    //获取总条数
    this.getOpeningInfoTotal = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/bidopeninginfo/v1/count'
        };
        return request(options);
    };
    //获取ID
    this.getOpeningInfoId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/bidopeninginfo/v1/info/${argvs.id}`
        };
        return request(options);
    };
    return this;
}