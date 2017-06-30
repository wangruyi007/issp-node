var app = angular.module('growServer',[]);
app.factory('growSer',function ($http) {
    return {
        listGrow:listGrow,
        countGrow:countGrow,
        addGrow:addGrow,
        editGrow:editGrow,
        findGrowId:findGrowId,
        deleteGrowInfo:deleteGrowInfo,
        allGrowProjects:allGrowProjects,
        menuPermission:menuPermission,
    };
    function listGrow(data) {
        return $http.get('/listGrow/list',{
            params: data
        })
    }
    //分页总条数
    function countGrow(){
        return $http.get('/countGrow/count')
    }
    //添加
    function addGrow(data){
        return $http.post('/addGrow/add',data)
    }
    //编辑
    function editGrow(data){
        return $http.post('/editGrow/edit',data)
    }
    //id查询
    function findGrowId(data){
        return $http.get('/findGrowId/info',{
            params:data
        })
    }
    //删除
    function deleteGrowInfo(data){
        return $http.get('/deleteGrowInfo/delete',{
            params: data
        })
    }
    //查询所有项目
    function allGrowProjects(){
        return $http.get('/allGrowProjects/id')
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/grow/menu/'+data);
    }
});
