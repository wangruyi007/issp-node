var app = angular.module('subpackageSer',[]);
app.factory('subpackageSer',function ($http) {
    return {
        listMarketserve : listMarketserve,
        countBaseInfo:countBaseInfo,
        addMarketserveapply:addMarketserveapply,
        getOneById:getOneById,
        marketserveapplyEdit:marketserveapplyEdit,
        marketserveapplyDel:marketserveapplyDel,
        ssuiCollect:ssuiCollect,
        searchCount:searchCount,
        searchList:searchList
    };
    //列表
    function listMarketserve(data) {
        return $http.post('/business/outsource/list',data)
    }
    //分页
    function countBaseInfo(){
        return $http.get('/business/outsource/count')
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/business/outsource/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/business/outsource/getOneById',data)
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/business/outsource/edit',data)
    }
    //删除 
    function marketserveapplyDel(data){
        return $http.post('/business/outsource/delete',data)
    } 
     //列表
    function ssuiCollect(data) {
        return $http.post('/business/outsource/collect',data)
    }
    //搜索
    function searchCount(data) {
        return $http.post('/business/contract/searchCount',{
            params:data
        })
    }
    //
    function searchList(data) {
        return $http.post('/business/contract/searchList',{
            params:data
        })
    }
});
