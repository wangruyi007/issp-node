var app = angular.module('smuiSer',[]);
app.factory('smuiSer',function ($http) {
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
        return $http.get('/projectmeasure/smui/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/projectmeasure/smui/count')
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/projectmeasure/smui/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/projectmeasure/smui/getOneById',data)
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/projectmeasure/smui/edit',data)
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/projectmeasure/smui/delete',data)
    }
});
