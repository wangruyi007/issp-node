var app = angular.module('servereCordSer',[]);
app.factory('servereCordSer',function ($http) {
    return {
        listservereCord:listservereCord,
        countBaseInfo:countBaseInfo,
        addMarketserveapply:addMarketserveapply,
        addCustomerinfo:addCustomerinfo,
        getOneById:getOneById,
        marketserveapplyEdit:marketserveapplyEdit,
        servereCordapplyDel:servereCordapplyDel,
        fundModuleOpinionEidt:fundModuleOpinionEidt,
        executiveOpinionEidt:executiveOpinionEidt
    };
    //列表
    function listservereCord(data) {
        return $http.get('/marketActivity/servereCord/list',{
            params:data
        })
    };
    //分页
    function countBaseInfo(){
        return $http.get('/servereCord/count')
    };
    //添加市场记录
    function addMarketserveapply(data){
        return $http.post('/marketActivity/servereCord/add',data)
    }
    //添加客户信息
    function addCustomerinfo(data){
        return $http.post('/servereCord/customerinfo/add',data)
    }
    // //id编辑
    function getOneById(data) {
        return $http.post('/marketActivity/servereCord/getOneById',data)
    }
    // //编辑
    function marketserveapplyEdit(data){
        return $http.post('/marketActivity/servereCord/edit',data)
    }
    // //删除
    function servereCordapplyDel(data){
        return $http.post('/marketActivity/servereCordApply/delete',data)
    }
    // //编辑 运营商务部资金模块意见
    function fundModuleOpinionEidt(data) {
        return $http.post('/marketActivity/servereCord/OpinionEidt',data)
    }
    // //编辑 决策层审核意见
    function executiveOpinionEidt(data) {
        return $http.post('/marketActivity/servereCord/executiveEidt',data)
    }
});
