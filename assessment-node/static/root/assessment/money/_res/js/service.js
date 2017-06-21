var app = angular.module('moneyServer',[]);
app.factory('moneySer',function ($http) {
    return {
        listMoney:listMoney,
        countMoney:countMoney,
        addMoney:addMoney,
        editMoney:editMoney,
        findMoneyId:findMoneyId,
        deleteMoney:deleteMoney,
        allMoneyProjects:allMoneyProjects,
        listMoneyById:listMoneyById,
        menuPermission:menuPermission
    };
    function listMoney(data) {
        return $http.get('/listMoney/list',{
            params: data
        })
    }
    //分页总条数
    function countMoney(){
        return $http.get('/countMoney/count')
    }
    //添加
    function addMoney(data){
        return $http.post('/addMoney/add',data)
    }
    //编辑
    function editMoney(data){
        return $http.post('/editMoney/edit',data)
    }
    //id查询
    function findMoneyId(data){
        return $http.get('/findMoneyId/info',{
            params:data
        })
    }
    //删除
    function deleteMoney(data){
        return $http.get('/deleteMoney/delete',{
            params: data
        })
    }
    //所有项目
    function allMoneyProjects(){
        return $http.get('/allMoneyProjects/id')
    }
    //金额信息
    function listMoneyById(data) {
        return $http.get('/listMoneyById/id',{params:data})
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/money/menu/'+data);
    }
});
