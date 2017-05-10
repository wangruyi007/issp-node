var app = angular.module('currencyServe',[]);
app.factory('currencySer',function ($http) {
    return {
        listMarketserve1 : listMarketserve,
        countBaseInfo1:countBaseInfo,
        addMarketserveapply1:addMarketserveapply,
        getOneById1:getOneById,
        marketserveapplyEdit1:marketserveapplyEdit,
        marketserveapplyDel1:marketserveapplyDel
    };
    //列表
    function listMarketserve(data) {
        return $http.get('/setting/currency/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/setting/currency/count')
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/setting/currency/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/setting/currency/getOneById',data)
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/setting/currency/edit',data)
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/setting/currency/delete',data)
    }
});
