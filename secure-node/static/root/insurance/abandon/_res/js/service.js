var app = angular.module('abandServer',[]);
app.factory('abandSer',function ($http) {
    return {
        abandList : abandList,
        abandAdd:abandAdd,
        abandEdit:abandEdit,
        abandId:abandId,
        abandCount:abandCount,
        abandDelete:abandDelete,
        abandPermission:abandPermission
    };
    function abandList(data) {
        return $http.get('/abandList/list',{
            params: data

        })
    }

    //添加
    function abandAdd(data){
        return $http.post('/abandAdd/add',data)
    }
    //编辑
    function abandEdit(data){
        return $http.post('/abandEdit/edit',data)
    }
    //id查询
    function abandId(data){
        return $http.get('/abandId/Id',{
            params:data
        })
    }
    //分页总条数
    function abandCount(){
        return $http.get('/abandCount/count')
    }
    //删除
    function abandDelete(data){

        return $http.get('/abandDelete/delete',{
            params: data

        })
    }
    //----------------------------
    //功能导航权限
    function abandPermission(data){

        return $http.get('/abandPermission/permission/'+data);
    }
});
