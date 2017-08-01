var app = angular.module('protionServer',[]);
app.factory('protionSer',function ($http) {
    return {
        protionList : protionList,
        protionAdd:protionAdd,
        protionEdit:protionEdit,
        protionId:protionId,
        protionCount:protionCount,
        protionDelete:protionDelete,
        protionPermission:protionPermission
    };
    function protionList(data) {
        return $http.get('/protionList/list',{
            params: data

        })
    }

    //添加
    function protionAdd(data){
        return $http.post('/protionAdd/add',data)
    }
    //编辑
    function protionEdit(data){
        return $http.post('/protionEdit/edit',data)
    }
    //id查询
    function protionId(data){
        return $http.get('/protionId/Id',{
            params:data
        })
    }
    //分页总条数
    function protionCount(){
        return $http.get('/protionCount/count')
    }
    //删除
    function protionDelete(data){

        return $http.get('/protionDelete/delete',{
            params: data

        })
    }
    //----------------------------
    //功能导航权限
    function protionPermission(data){

        return $http.get('/protionPermission/permission/'+data);
    }
});
