var app = angular.module('projectServer',[]);
app.factory('projectSer',function ($http) {
    return {
        listProject:listProject,
        countProject:countProject,
        addProject:addProject,
        editProject:editProject,
        findProjectId:findProjectId,
        deleteProject:deleteProject,
        allProjectPros:allProjectPros,
    };
    function listProject(data) {
        return $http.get('/listProject/list',{
            params: data
        })
    }
    //分页总条数
    function countProject(){
        return $http.get('/countProject/count')
    }
    //添加
    function addProject(data){
        return $http.post('/addProject/add',data)
    }
    //编辑
    function editProject(data){
        return $http.post('/editProject/edit',data)
    }
    //id查询
    function findProjectId(data){
        return $http.get('/findProjectId/info',{
            params:data
        })
    }
    //删除
    function deleteProject(data){
        return $http.get('/deleteProject/delete',{
            params: data
        })
    }
    //查询所有项目
    function allProjectPros(){
        return $http.get('/allProjectPros/id')
    }
});
