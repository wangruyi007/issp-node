var app = angular.module('affilServer',[]);
app.factory('affilSer',function ($http) {
    return {
        affilList : affilList,
        affilAdd:affilAdd,
        affilEdit:affilEdit,
        affilId:affilId,
        affilCount:affilCount,
        affilDelete:affilDelete,
        affilPermission:affilPermission,
        //-----------------
        affilPass:affilPass,
        affilNotPass:affilNotPass,
        affilComplete:affilComplete
    };
    function affilList(data) {
        return $http.get('/affilList/list',{
            params: data

        })
    }

    //添加
    function affilAdd(data){
        return $http.post('/affilAdd/add',data)
    }
    //编辑
    function affilEdit(data){
        return $http.post('/affilEdit/edit',data)
    }
    //id查询
    function affilId(data){
        return $http.get('/affilId/Id',{
            params:data
        })
    }
    //分页总条数
    function affilCount(){
        return $http.get('/affilCount/count')
    }
    //删除
    function affilDelete(data){

        return $http.get('/affilDelete/delete',{
            params: data

        })
    }
    //功能导航权限
    function affilPermission(data){

        return $http.get('/affilPermission/permission/'+data);
    }
     //----------------------------
     //审核通过
    function affilPass(data){

        return $http.get('/affilPass/pass',{
            params: data

        })
    }
    //审核不通过
    function affilNotPass(data){

        return $http.get('/affilNotPass/notpass',{
            params: data

        })
    }
    //补全
    function affilComplete(data){
        return $http.post('/affilComplete/complete',data)
    }
});
