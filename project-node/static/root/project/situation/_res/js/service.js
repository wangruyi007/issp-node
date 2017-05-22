var app = angular.module('situationServer',[]);
app.factory('situationSer',function ($http) {
    return {
        listProjectSituationCap : listProjectSituationCap,
        countProjectBaseInfo:countProjectBaseInfo,
        deleteProjectSit:deleteProjectSit,
        addProjectSituation:addProjectSituation,
        editProjectSituation:editProjectSituation,
        getOneById:getOneById,
        searchProject:searchProject,
        countProjectBaseInfo2:countProjectBaseInfo2,
    };
    //列表
    function listProjectSituationCap(data) {
        return $http.get('/project/listProjectSituationCap/list',{
            params:data
        })
    }
    //分页
    function countProjectBaseInfo(){
        return $http.get('/countProjectBaseInfo/count')
    }
    //删除
    function deleteProjectSit(data){
        return $http.post('/project/deleteProjectSit/delete',data)
    }
    //添加
    function addProjectSituation(data){
        return $http.post('/project/addProjectSituation/add',data)
    }
    //编辑
    function editProjectSituation(data){
        return $http.post('/project/editProjectSituation/edit',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/project/getOneById',data)
    }
    //搜索
    function searchProject(data) {
        return $http.get('/searchProject',{
            params:data
        })
    }
    //搜索count
    function countProjectBaseInfo2(data){
        return $http.get('/countProjectBaseInfo2/count',{
            params:data
        })
    }
});
