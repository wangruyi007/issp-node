var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
    this.warningList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/warn/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.warningCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/warn/v1/countNum',
        };
        return request(options);
    };
    this.warningAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/warn/v1/save',
            form:argvs
        };
        return request(options);
    };
    this.warningGetById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/warn/v1/moneyready/${argvs.id}`,
        };
        return request(options);
    };
    this.warningEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/warn/v1/edit',
            form:argvs
        };
        return request(options);
    };
    this.warningDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/warn/v1/delete/${argvs.id}`,
        };
        return request(options);
    };
/*等级设计*/
    this.gradeList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/grade/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.gradeCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/grade/v1/countNum',
        };
        return request(options);
    };
    this.gradeAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/grade/v1/save',
            form:argvs
        };
        return request(options);
    };
    this.gradeGetById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/grade/v1/moneyready/${argvs.id}`,
        };
        return request(options);
    };
    this.gradeEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/grade/v1/edit',
            form:argvs
        };
        return request(options);
    };
    this.gradeDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/grade/v1/delete/${argvs.id}`,
        };
        return request(options);
    };
    //费用分析
    this.costList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/costanalysis/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.costCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/costanalysis/v1/countNum',
        };
        return request(options);
    };
    this.costAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/costanalysis/v1/save',
            form:argvs
        };
        return request(options);
    };
    this.costGetById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/costanalysis/v1/costanalysis/${argvs.id}`,
        };
        return request(options);
    };
    this.costEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/costanalysis/v1/edit',
            form:argvs
        };
        return request(options);
    };
    this.costDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/costanalysis/v1/delete/${argvs.id}`,
        };
        return request(options);
    };
    //查询所有等级
    this.projectsAllGradeById = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/grade/v1/list?_includes=grade,id',
        };
        return request(options);
    };
    //地区汇总
    this.areaCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/costanalysis/v1/arrivalCount/${argvs.year}/${argvs.month}`
        };
        return request(options);
    };
    //查询所有年月
    this.costAllGradeById = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/costanalysis/v1/allYears',
        };
        return request(options);
    };
    this.costAllGradeById2 = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/costanalysis/v1/allMonths',
        };
        return request(options);
    };
    //项目名称汇总
    this.nameCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/costanalysis/v1/projectNameCount/${argvs.year}/${argvs.month}`
        };
        return request(options);
    };
    //项目组
    this.proCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/costanalysis/v1/projectGroupCount/${argvs.year}/${argvs.month}`
        };
        return request(options);
    };
    //地区汇总详情
    this.areaDetailsById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/costanalysis/v1/findDetail/${argvs.id}`,
        };
        return request(options);
    };
    //项目前期的市场的活动费用
    this.activityList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectmarketfee/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.activityCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projectmarketfee/v1/countNum',
        };
        return request(options);
    };
    //一级科目汇总
    this.firstCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectmarketfee/v1/firstSubjectCount/${argvs.startTime}/${argvs.endTime}`
        };
        return request(options);
    };
    //查询所有日期
    this.firstAllGradeById = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/projectmarketfee/v1/list?_includes=voucherDate',
        };
        return request(options);
    };
    this.firstDetailsById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectmarketfee/v1/findDetail/${argvs.id}`,
        };
        return request(options);
    };
    //二级科目汇总
    this.secondCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectmarketfee/v1/secondSubjectCount/${argvs.startTime}/${argvs.endTime}`
        };
        return request(options);
    };
    //三级科目汇总
    this.thirdCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectmarketfee/v1/thirdSubjectCount/${argvs.startTime}/${argvs.endTime}`
        };
        return request(options);
    };
    //地区汇总
    this.areaByOrderCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectmarketfee/v1/areaCount/${argvs.startTime}/${argvs.endTime}`
        };
        return request(options);
    };
    //项目组汇总
    this.projectByOrderCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectmarketfee/v1/projectGroupCount/${argvs.startTime}/${argvs.endTime}`
        };
        return request(options);
    };
    //项目名称汇总
    this.projectNameByOrderCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectmarketfee/v1/projectNameCount/${argvs.startTime}/${argvs.endTime}`
        };
        return request(options);
    };
      return this;
};