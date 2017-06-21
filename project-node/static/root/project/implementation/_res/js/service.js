var app = angular.module('implementationServer',[]);
app.factory('implementationSer',function ($http) {
    return {
        listImplementation : listImplementation,
        countImplementation:countImplementation,
        deleteImplementation:deleteImplementation,
        addProjectCarry:addProjectCarry,
        editImplementationProject:editImplementationProject,
        getImplementationOneById:getImplementationOneById,
        allImplementProjects:allImplementProjects,
        searchImplementation:searchImplementation,
        countImplementation2:countImplementation2,
    };
    //列表
    function listImplementation(data) {
        return $http.get('/project/listImplementation/list',{
            params:data
        })
    }
    //分页
    function countImplementation(){
        return $http.get('/countImplementation/count')
    }
//删除
    function deleteImplementation(data){
        return $http.get('/project/deleteImplementation/delete',{
            params:data
        })
    }
    //添加
    function addProjectCarry(data){
        return $http.post('/project/addProjectCarry/add',data)
    }
    //编辑
    function editImplementationProject(data){
        return $http.post('/project/editImplementationProject/edit',data)
    }
    //id编辑
    function getImplementationOneById(data){
        return $http.get('/project/getImplementationOneById',{
            params:data
        })
    }
    function allImplementProjects(){
        return $http.get('/allImplementProjects/id')
    }
    //搜索
    function searchImplementation(data) {
        return $http.get('/searchImplementation',{
            params:data
        })
    }
    //搜索count
    function countImplementation2(data){
        return $http.get('/countImplementation2/count',{
            params:data
        })
    }
});
