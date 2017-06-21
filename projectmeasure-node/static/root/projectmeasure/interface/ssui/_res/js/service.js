var app = angular.module('marketserveSer',[]);
app.factory('ssuiSer',function ($http) {
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
        return $http.get('/projectmeasure/ssui/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/projectmeasure/ssui/count')
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/projectmeasure/ssui/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/projectmeasure/ssui/getOneById',data)
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/projectmeasure/ssui/edit',data)
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/projectmeasure/ssui/delete',data)
    }
});
