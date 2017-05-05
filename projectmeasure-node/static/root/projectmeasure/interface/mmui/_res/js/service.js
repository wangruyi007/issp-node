var app = angular.module('mmuiSer',[]);
app.factory('mmuiSer',function ($http) {
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
        return $http.get('/projectmeasure/mmui/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/projectmeasure/mmui/count')
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/projectmeasure/mmui/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/projectmeasure/mmui/getOneById',data)
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/projectmeasure/mmui/edit',data)
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/projectmeasure/mmui/delete',data)
    }
});
