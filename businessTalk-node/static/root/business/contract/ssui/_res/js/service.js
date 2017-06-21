var app = angular.module('ssuiSer',[]);
app.factory('ssuiSer',function ($http) {
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
        return $http.post('/business/contract/list',data)
    }
    //分页
    function countBaseInfo(data){
        return $http.get('/business/contract/count',{
            params:data
        })
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/business/ssui/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/business/ssui/getOneById',data)
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/business/ssui/edit',data)
    }
    //删除 
    function marketserveapplyDel(data){
        return $http.post('/business/ssui/delete',data)
    } 
     //列表
    function ssuiCollect(data) {
        return $http.post('/business/contract/collect',data)
    }
});
