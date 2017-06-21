var app = angular.module('subpackageSer',[]);
app.factory('subpackageSer',function ($http) {
    return {
        listMarketserve : listMarketserve,
        countBaseInfo:countBaseInfo,
        addMarketserveapply:addMarketserveapply,
        getOneById:getOneById,
        marketserveapplyEdit:marketserveapplyEdit,
        marketserveapplyDel:marketserveapplyDel,
        ssuiCollect:ssuiCollect
    };
    //列表
    function listMarketserve(data) {
        return $http.post('/business/outsource/list',data)
    }
    //分页
    function countBaseInfo(data){
        return $http.get('/business/outsource/count',{
            params:data
        })
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
});
