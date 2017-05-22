var app = angular.module('auditServer',[]);
app.factory('auditSer',function ($http) {
    return {
        listAudit: listAudit,
        countAudit:countAudit,
        addAudit:addAudit,
        deleteAudit:deleteAudit,
        editAudit:editAudit,
        getAuditById:getAuditById,
        searchAudit:searchAudit,
        countAudit2:countAudit2,
    };
    //列表
    function listAudit(data) {
        return $http.get('/project/listAudit/list',{
            params:data
        })
    }
    //分页
    function countAudit(){
        return $http.get('/countAudit/count')
    }
    //添加
    function addAudit(data){
        return $http.post('/project/addAudit/add',data)
    }
    //删除
    function deleteAudit(data) {
        return $http.get('/project/deleteAudit/delete',{
            params:data
        })
    }
    //编辑
    function editAudit(data){
        return $http.post('/project/editAudit/edit',data)
    }
    //id编辑
    function getAuditById(data) {
        return $http.get('/project/getAuditById',{
            params:data
        })
    }
    function searchAudit(data) {
        return $http.get('/searchAudit',{
            params:data
        })
    }
    //搜索count
    function countAudit2(data){
        return $http.get('/countAudit2/count',{
            params:data
        })
    }
});
