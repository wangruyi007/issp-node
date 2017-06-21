var app = angular.module('demandServer',[]);
app.factory('demandSer',function ($http) {
    return {
        listDemand:listDemand,
        countDemand:countDemand,
        addDemand:addDemand,
        editDemand:editDemand,
        findDemandId:findDemandId,
        deleteDemand:deleteDemand,
        allProjects:allProjects,
        menuPermission:menuPermission
    };
    function listDemand(data) {
        return $http.get('/listDemand/list',{
            params: data
        })
    }
    //分页总条数
    function countDemand(){
        return $http.get('/countDemand/count')
    }
    //添加
    function addDemand(data){
        return $http.post('/addDemand/add',data)
    }
    //编辑
    function editDemand(data){
        return $http.post('/editDemand/edit',data)
    }
    //id查询
    function findDemandId(data){
        return $http.get('/findDemandId/info',{
            params:data
        })
    }
    //删除
    function deleteDemand(data){
        return $http.get('/deleteDemand/delete',{
            params: data
        })
    }
    //查询所有项目
    function allProjects(){
        return $http.get('/allProjects/demand')
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/demand/menu/'+data);
    }
});
