var app = angular.module('reduAgoServer',[]);
app.factory('reduAgoSer',function ($http) {
    return {
        reduAgoList : reduAgoList,
        reduAgoAdd:reduAgoAdd,
        reduAgoEdit:reduAgoEdit,
        reduAgoId:reduAgoId,
        reduAgoCount:reduAgoCount,
        reduAgoDelete:reduAgoDelete,
        reduAgoPermission:reduAgoPermission,
        reduAgoAudit:reduAgoAudit
    };
    function reduAgoList(data) {
        return $http.get('/reduAgoList/list',{
            params: data

        })
    }

    //添加
    function reduAgoAdd(data){
        return $http.post('/reduAgoAdd/add',data)
    }
    //编辑
    function reduAgoEdit(data){
        return $http.post('/reduAgoEdit/edit',data)
    }
    //id查询
    function reduAgoId(data){
        return $http.get('/reduAgoId/Id',{
            params:data
        })
    }
    //分页总条数
    function reduAgoCount(){
        return $http.get('/reduAgoCount/count')
    }
    //删除
    function reduAgoDelete(data){

        return $http.get('/reduAgoDelete/delete',{
            params: data

        })
    }
    //----------------------------
    //功能导航权限
    function reduAgoPermission(data){

        return $http.get('/reduAgoPermission/permission/'+data);
    }
    //审核
    function reduAgoAudit(data){

        return $http.get('/reduAgoAudit/audit',{
            params: data

        })
    }
});
