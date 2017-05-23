var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
    //列表 节假日礼品标准 
   this.giftList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/giftstandard/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.giftCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/giftstandard/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.giftAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/giftstandard/v1/add`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.giftById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/giftstandard/v1/getOneById/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.giftEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/giftstandard/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.giftDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/giftstandard/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };

    //列表 节假日时间安排 
   this.festivaltimeList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/companyfestivaltime/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.festivaltimeCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/companyfestivaltime/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.festivaltimeAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/companyfestivaltime/v1/add`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.festivaltimeById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/companyfestivaltime/v1/getOneById/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.festivaltimeEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/companyfestivaltime/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.festivaltimeDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/companyfestivaltime/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };

    //法定节假日放假方案
    this.projectList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/holidayprogramme/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.projectCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/holidayprogramme/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.projectAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/holidayprogramme/v1/add`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.projectById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/holidayprogramme/v1/getOneById/${argvs.id}`,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.projectEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/holidayprogramme/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.projectDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/holidayprogramme/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有节假日
    this.allFestivalList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/companyfestivaltime/v1/listName',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //查看放假时间安排列表
    this.checkTimeList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/companyfestivaltime/v1/getComDetail?name=${encodeURIComponent(argvs.name)}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
     //获取条目 
    this.checkTimeCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/companyfestivaltime/v1/countByName?name=${encodeURIComponent(argvs.name)}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //查看放假工作安排
    this.checkProList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/holidayworkplan/v1/getHoliDetail?holidayProgrammeId=${argvs.id}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.checkProCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/holidayworkplan/v1/count?holidayProgrammeId=${argvs.id}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //查看人员
     this.checkPeoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/arearelationer/v1/getAreaRelationerDetail?holidayProgrammeId=${argvs.id}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.checkPeoCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/arearelationer/v1/count?holidayProgrammeId=${argvs.id}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //查看礼品
     this.checkGiftList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/welfare/v1/getWelfareDetail?holidayProgrammeId=${argvs.id}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.checkGiftCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/welfare/v1/count?holidayProgrammeId=${argvs.id}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //查看注意事项
     this.checkNoticeList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/noticething/v1/getNotiDetail?holidayProgrammeId=${argvs.id}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.checkNoticeCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/noticething/v1/count?holidayProgrammeId=${argvs.id}`,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    return this;
};