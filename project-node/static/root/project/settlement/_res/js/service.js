var app = angular.module('settlementServer',[]);
app.factory('settlementSer',function ($http) {
    return {
        listSettlement : listSettlement,
        countSettlement:countSettlement,
        addSettlement:addSettlement,
        deleteSettlement:deleteSettlement,
        editSettlement:editSettlement,
        getSettlementById:getSettlementById,
        summarySettlement:summarySettlement
    };
    //列表
    function listSettlement(data) {
        return $http.get('/project/listSettlement/list',{
            params:data
        })
    }
    //分页
    function countSettlement(){
        return $http.get('/countSettlement/count')
    }
    //添加
    function addSettlement(data){
        return $http.post('/project/addSettlement/add',data)
    }
    //删除
    function deleteSettlement(data) {
        return $http.get('/project/deleteSettlement/delete',{
            params:data
        })
    }
    //编辑
    function editSettlement(data){
        return $http.post('/project/editSettlement/edit',data)
    }
    //id编辑
    function getSettlementById(data) {
        return $http.get('/project/getSettlementById',{
            params:data
        })
    }
    //汇总
    function summarySettlement(){
        return $http.get('/summarySettlement/summary')
    }
});
