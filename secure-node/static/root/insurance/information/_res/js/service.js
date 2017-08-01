var app = angular.module('inforServer',[]);
app.factory('inforSer',function ($http) {
    return {
        inforList : inforList,
        inforAdd:inforAdd,
        inforEdit:inforEdit,
        inforId:inforId,
        inforCount:inforCount,
        inforDelete:inforDelete,
        inforPermission:inforPermission,
        inforUrl:inforUrl
    };
    function inforList(data) {
        return $http.get('/inforList/list',{
            params: data

        })
    }

    //添加
    function inforAdd(data){
        return $http.post('/inforAdd/add',data)
    }
    //编辑
    function inforEdit(data){
        return $http.post('/inforEdit/edit',data)
    }
    //id查询
    function inforId(data){
        return $http.get('/inforId/Id',{
            params:data
        })
    }
    //分页总条数
    function inforCount(){
        return $http.get('/inforCount/count')
    }
    //删除
    function inforDelete(data){

        return $http.get('/inforDelete/delete',{
            params: data

        })
    }
    //----------------------------
    //功能导航权限
    function inforPermission(data){

        return $http.get('/inforPermission/permission/'+data);
    }
    //获取网址
    function inforUrl(data){

        return $http.get('/inforUrl/url',{
            params: data

        })
    }

});
