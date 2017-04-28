var app = angular.module('projectacceptanceServer',[]);
app.factory('projectacceptanceSer',function ($http) {
    return {
        listProjectAcceptance : listProjectAcceptance,
        countProjectAcceptance:countProjectAcceptance,
        addProjectAcceptance:addProjectAcceptance,
        deleteProjectAcceptance:deleteProjectAcceptance,
        editProjectAcceptance:editProjectAcceptance,
        getAcceptanceById:getAcceptanceById,
    };
    //列表
    function listProjectAcceptance(data) {
        return $http.get('/project/listProjectAcceptance/list',{
            params:data
        })
    }
    //分页
    function countProjectAcceptance(){
        return $http.get('/countProjectAcceptance/count')
    }
    //添加
    function addProjectAcceptance(data){
        return $http.post('/project/addProjectAcceptance/add',data)
    }
    //删除
    function deleteProjectAcceptance(data){
        return $http.post('/project/deleteProjectAcceptance/delete',data)
    }
    //编辑
    function editProjectAcceptance(data){
        return $http.post('/project/editProjectAcceptance/edit',data)
    }
    //id编辑
    function getAcceptanceById(data) {
        return $http.get('/project/getAcceptanceById',{
            params:data
        })
    }
});
