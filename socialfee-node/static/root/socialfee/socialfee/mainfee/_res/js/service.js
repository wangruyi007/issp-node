var app = angular.module('mainfeeServe',[]);
app.factory('mainfeeSer',function ($http) {
    return {
        allList:allList,
        allCount:allCount,
        addData:addData,
        getOneById1:getOneById,
        editData:editData,
        marketserveapplyDel1:marketserveapplyDel,
        collectList:collectList,
        aPayfeer:aPayfeer,
        allname:allname,
        mainfeeGenerate:mainfeeGenerate,
        mainfeeVoucher:mainfeeVoucher
    };
    //列表
    function allList(data) {
        return $http.get('/socialfee/mainfee/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/socialfee/mainfee/count')
    }
    //添加
    function addData(data){
        return $http.post('/socialfee/mainfee/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/socialfee/mainfee/getOneById',data)
    }
    //编辑
    function editData(data){
        return $http.post('/socialfee/mainfee/editData',data)
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/socialfee/mainfee/delete',data)
    }
    //汇总
    function collectList(data){
        return $http.get('/socialfee/mainfee/companyList',{
            params:data
        })
    }
    //所有名称
    function aPayfeer() {
        return $http.get('/socialfee/mainfee/allPayfeer')
    }
     //所有姓名
    function allname() {
        return $http.get('/socialfee/mainfee/allname')
    }
    //生成记账凭证
    function mainfeeGenerate(data) {
        return $http.get('/socialfee/mainfee/generate',{
            params:data
        })
    }
    //提交记账凭证
     function mainfeeVoucher(data){
        return $http.post('/socialfee/mainfee/voucher',data)
    }
});
