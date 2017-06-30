var app = angular.module('costServer',[]);
app.factory('costSer',function ($http) {
    return {
        listCost:listCost,
        countCost:countCost,
        addCost:addCost,
        editCost:editCost,
        findCostdId:findCostdId,
        deleteCost:deleteCost,
        allCostProjects:allCostProjects,
        menuPermission:menuPermission
    };
    function listCost(data) {
        return $http.get('/listCost/list',{
            params: data
        })
    }
    //分页总条数
    function countCost(){
        return $http.get('/countCost/count')
    }
    //添加
    function addCost(data){
        return $http.post('/addCost/add',data)
    }
    //编辑
    function editCost(data){
        return $http.post('/editCost/edit',data)
    }
    //id查询
    function findCostdId(data){
        return $http.get('/findCostdId/info',{
            params:data
        })
    }
    //删除
    function deleteCost(data){
        return $http.get('/deleteCost/delete',{
            params: data
        })
    }
    //查询所有项目
    function allCostProjects(){
        return $http.get('/allCostProjects/id')
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/cost/menu/'+data);
    }
});
