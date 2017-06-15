var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
module.exports = function(){
    //获取所有一级科目
    this.subjectsOne= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/listFirstSubject',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //删除科目汇总表
    this.subjectsDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/subjectcollect/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };

        return request(options);
    };
    //编辑科目汇总表
    this.subjectsEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/edit',
            form : argvs,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //记账凭证记录项目名称汇总
    this.subjectsAuditName= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/ctRePname'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //一个科目汇总表
    this.subjectsId= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/subjectcollect/v1/subject/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //科目汇总表列表
    this.subjectsList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/subjectcollect/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    }; 
    //汇总对比
    this.subjectsContrast= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/collectCompare?'+'months='+argvs.a+'&months='+ argvs.b,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //获取所有项目名称
    this.subjectsName= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/listProject',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //记账凭证记录项目组汇总
    this.subjectsAuditAll= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/ctReGroup'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //添加科目汇总表
    this.subjectsAudit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/add',
            form : argvs,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //获取所有三级科目
    this.subjectsThree= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/listTubByFirst'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //获取所有二级科目
    this.subjectsTwo= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/listSubByFirst'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //科目汇总表列表总条数
    this.subjectsListAll= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/count',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //导出
    this.subjectsExport= function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/exportExcel',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //获取所有项目组
    this.subjectsAll= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/listGroup',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //记账凭证记录科目汇总
    this.subjectsCheck= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/ctReSub'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //记账凭证记录地区汇总
    this.subjectsArea= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/ctReArea'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //获取所有地区
    this.subjectsAreaAll= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/subjectcollect/v1/listArea',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };  




































//查询总记录数 
    // this.moneyAll= function(argvs){
    //     var options = {
    //         method : 'GET',
    //         timeout : 3000,
    //         uri : config()['rurl'] + '/fundrecord/v1/count'
    //     };
    //     return request(options);
    // };
//条件汇总
    // this.moneyConditionsAll= function(argvs){
    //     var options = {
    //         method : 'GET',
    //         timeout : 3000,
    //         uri : config()['rurl'] + '/fundrecord/v1/condition'+urlEncode(argvs,true),
    //     };
    //     return request(options);
    // }; 
//月汇总
    // this.moneyMonthAll = function(argvs){
    //     var options = {
    //         method : 'GET',
    //         timeout : 3000,
    //         uri : config()['rurl'] + '/fundrecord/v1/month'+urlEncode(argvs,true)
            
    //     };
    //     return request(options);
    // };  
//分析
    // this.moneyAnalyze = function(argvs){
    //     var options = {
    //         method : 'GET',
    //         timeout : 3000,
    //         uri : config()['rurl'] + '/fundrecord/v1/analyze'+urlEncode(argvs,true)
    //     };
    //     return request(options);
    // }; 
    return this;
};