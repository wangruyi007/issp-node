var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
    //列表 项目费用
   this.coststatusList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projectcoststatus/v1/list?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 项目费用
    this.coststatusCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projectcoststatus/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 项目费用
    this.coststatusAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/projectcoststatus/v1/add',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 项目费用
     this.coststatusById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projectcoststatus/v1/projectcoststatus/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //编辑 项目费用
    this.coststatusEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/projectcoststatus/v1/edit',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 项目费用
    this.coststatusDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/projectcoststatus/v1/delete/'+argvs.id,
            headers: {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    
    //项目基本信息
    //列表 
   this.basicinfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projectbasicinfo/v1/list?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.basicinfoCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projectbasicinfo/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.basicinfoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/projectbasicinfo/v1/add',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.basicinfoById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projectbasicinfo/v1/projectbasicinfo/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.basicinfoEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/projectbasicinfo/v1/edit',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.basicinfoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/projectbasicinfo/v1/delete/'+argvs.id,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };

                        //多项目单个界面
   //列表 
   this.msuiList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/msui/v1/list?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.msuiCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/msui/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.msuiAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/msui/v1/add',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.msuiById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/msui/v1/msui/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.msuiEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/msui/v1/edit',
            form:argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.msuiDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/msui/v1/delete/'+argvs.id,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };

                        //单个项目单个界面
    //列表 
   this.ssuiList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/ssui/v1/list?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.ssuiCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/ssui/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.ssuiAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/ssui/v1/add',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.ssuiById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/ssui/v1/ssui/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.ssuiEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/ssui/v1/edit',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.ssuiDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/ssui/v1/delete/'+argvs.id,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };

                            //单个项目多个界面
    //列表 
   this.smuiList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/smui/v1/list?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.smuiCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/smui/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.smuiAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/smui/v1/add',
            form:argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.smuiById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/smui/v1/smui/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.smuiEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/smui/v1/edit',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.smuiDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/smui/v1/delete/'+argvs.id,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };

                        //多个项目多个界面
    //列表 
   this.mmuiList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/mmui/v1/list?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.mmuiCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/mmui/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.mmuiAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/mmui/v1/add',
            form:argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.mmuiById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/mmui/v1/mmui/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.mmuiEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/mmui/v1/edit',
            form:argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.mmuiDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/mmui/v1/delete/'+argvs.id,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };

                        //项目人员需求
    //列表 
   this.personDemandList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projectpersonneldemand/v1/list?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.personDemandCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projectpersonneldemand/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.personDemandAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/projectpersonneldemand/v1/add',
            form:argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.personDemandById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projectpersonneldemand/v1/projectpersonneldemand/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.personDemandEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/projectpersonneldemand/v1/edit',
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.personDemandDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/projectpersonneldemand/v1/delete/'+argvs.id,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };

                        //分页查询项目测算邮件发送
    //列表 
   this.measuresummaryList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projectmeasuresummary/v1/list?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取条目 
    this.measuresummaryCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projectmeasuresummary/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 
    this.measuresummaryAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/projectmeasuresummary/v1/add',
            form:argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.measuresummaryById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projectmeasuresummary/v1/projectmeasuresummary/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //编辑 
    this.measuresummaryEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/projectmeasuresummary/v1/edit',
            form:argvs,
            headers : {
               userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.measuresummaryDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/projectmeasuresummary/v1/delete/'+argvs.id,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //冻结
     this.measuresummaryCongeal = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + '/projectmeasuresummary/v1/congeal/'+argvs.id,
            headers:{
                userToken : argvs.userToken
            },
            form:argvs,
        };
        return request(options);
    };
    //解冻
    this.measuresummaryUnfreeze = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + '/projectmeasuresummary/v1/thaw/'+argvs.id,
            form:argvs,
            headers:{
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //用户退出
    this.logout = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['user'] + `/v1/sign-out/${argvs.token}`,
            form:argvs
        };
        return request(options);
    };


    return this;
};