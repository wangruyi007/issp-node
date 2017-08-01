var app = angular.module('expireServer',[]);
app.factory('expireSer',function ($http) {
    return {
        expireList : expireList,
        expireAdd:expireAdd,
        expireEdit:expireEdit,
        expireId:expireId,
        expireCount:expireCount,
        expireDelete:expireDelete,
        expirePermission:expirePermission
    };
    function expireList(data) {
        return $http.get('/expireList/list',{
            params: data

        })
    }

    //添加
    function expireAdd(data){
        return $http.post('/expireAdd/add',data)
    }
    //编辑
    function expireEdit(data){
        return $http.post('/expireEdit/edit',data)
    }
    //id查询
    function expireId(data){
        return $http.get('/expireId/Id',{
            params:data
        })
    }
    //分页总条数
    function expireCount(){
        return $http.get('/expireCount/count')
    }
    //删除
    function expireDelete(data){

        return $http.get('/expireDelete/delete',{
            params: data

        })
    }
    //----------------------------
    //功能导航权限
    function expirePermission(data){

        return $http.get('/expirePermission/permission/'+data);
    }
    //获取网址
    function expireUrl(data){

        return $http.get('/expireUrl/url',{
            params: data

        })
    }
});
