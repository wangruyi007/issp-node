var app = angular.module('resultServer',[]);
app.factory('resultSer',function ($http) {
    return {
        listResult : listResult,
        countResult:countResult,
        congealResult:congealResult,
        thawResult:thawResult,
        addResult:addResult,
        listResultProjects:listResultProjects,
        deleteResult:deleteResult,
        editResult:editResult,
        getEditResultById:getEditResultById,
        listResultArea:listResultArea,
        ectSummary:ectSummary,
        menuPermission:menuPermission


    };
    //列表
    function  listResult(data) {
        return $http.get('/listResult/list',{
            params:data
        })
    }
    //分页
    function countResult(){
        return $http.get('/countResult/count')
    }
    //冻结
    function congealResult(data){
        return $http.post('/congealResult/congeal',data)
    }
    //解冻
    function thawResult(data){
        return $http.post('/thawResult/thaw',data)
    }
    function addResult(data){
        return $http.post('/addResult/add',data)
    }
//获取所有项目
    function  listResultProjects(data) {
        return $http.get('/listResultProjects/id',{
            params:data
        })
    }
    //删除
    function deleteResult(data){
        return $http.get('/deleteResult/delete',{
            params:data
        })
    }
    //编辑
    function editResult(data){
        return $http.post('/editResult/edit',data)
    }
    //id编辑
    function getEditResultById(data) {
        return $http.get('/getEditResultById/id',{
            params:data
        })
    }
//查询所有地区
    function  listResultArea(data) {
        return $http.get('/listResultArea/id',{
            params:data
        })
    }
    //汇总
    function ectSummary(data) {
        return $http.post('/ectSummary/summary',data)
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/result/menu/'+data);
    }
});
