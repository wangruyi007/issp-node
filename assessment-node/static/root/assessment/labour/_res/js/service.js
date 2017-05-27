var app = angular.module('labourServer',[]);
app.factory('labourSer',function ($http) {
    return {
        listLabour:listLabour,
        countLabour:countLabour,
        addLabour:addLabour,
        editLabour:editLabour,
        findLabourId:findLabourId,
        deleteLabour:deleteLabour,
        allLabourProjects:allLabourProjects,
    };
    function listLabour(data) {
        return $http.get('/listLabour/list',{
            params: data
        })
    }
    //分页总条数
    function countLabour(){
        return $http.get('/countLabour/count')
    }
    //添加
    function addLabour(data){
        return $http.post('/addLabour/add',data)
    }
    //编辑
    function editLabour(data){
        return $http.post('/editLabour/edit',data)
    }
    //id查询
    function findLabourId(data){
        return $http.get('/findLabourId/info',{
            params:data
        })
    }
    //删除
    function deleteLabour(data){
        return $http.get('/deleteLabour/delete',{
            params: data
        })
    }
    //查询所有项目
    function allLabourProjects(){
        return $http.get('/allLabourProjects/id')
    }
});
