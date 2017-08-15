var app = angular.module('rollServer',[]);
app.factory('rollSer',function ($http) {
    return {
        rollList : rollList,
        rollAdd:rollAdd,
        rollEdit:rollEdit,
        rollId:rollId,
        rollCount:rollCount,
        rollDelete:rollDelete,
        rollPermission:rollPermission,
        rollAudit:rollAudit
    };
    function rollList(data) {
        return $http.get('/rollList/list',{
            params: data

        })
    }

    //添加
    function rollAdd(data){
        return $http.post('/rollAdd/add',data)
    }
    //编辑
    function rollEdit(data){
        return $http.post('/rollEdit/edit',data)
    }
    //id查询
    function rollId(data){
        return $http.get('/rollId/Id',{
            params:data
        })
    }
    //分页总条数
    function rollCount(){
        return $http.get('/rollCount/count')
    }
    //删除
    function rollDelete(data){

        return $http.get('/rollDelete/delete',{
            params: data

        })
    }
    //----------------------------
    //功能导航权限
    function rollPermission(data){

        return $http.get('/rollPermission/permission/'+data);
    }
    //审核
    function rollAudit(data){

        return $http.get('/rollAudit/audit',{
            params: data

        })
    }
});
