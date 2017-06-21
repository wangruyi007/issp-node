var app = angular.module('msuiSer',[]);
app.factory('msuiSer',function ($http) {
    return {
        listMarketserve : listMarketserve,
        countBaseInfo:countBaseInfo,
        addMarketserveapply:addMarketserveapply,
        getOneById:getOneById,
        marketserveapplyEdit:marketserveapplyEdit,
        marketserveapplyDel:marketserveapplyDel
    };
    //列表
    function listMarketserve(data) {
        return $http.get('/projectmeasure/msui/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/projectmeasure/msui/count')
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/projectmeasure/msui/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/projectmeasure/msui/getOneById',data)
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/projectmeasure/msui/edit',data)
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/projectmeasure/msui/delete',data)
    }
});
