var app = angular.module('peopleServer',[]);
app.factory('peopleSer',function ($http) {
    return {
        peopleList : peopleList,
        peopleAdd:peopleAdd,
        peopleEdit:peopleEdit,
        peopleId:peopleId,
        peopleCount:peopleCount,
        peopleDelete:peopleDelete,
        peoplePermission:peoplePermission
    };
    function peopleList(data) {
        return $http.get('/peopleList/list',{
            params: data

        })
    }

    //添加
    function peopleAdd(data){
        return $http.post('/peopleAdd/add',data)
    }
    //编辑
    function peopleEdit(data){
        return $http.post('/peopleEdit/edit',data)
    }
    //id查询
    function peopleId(data){
        return $http.get('/peopleId/Id',{
            params:data
        })
    }
    //分页总条数
    function peopleCount(){
        return $http.get('/peopleCount/count')
    }
    //删除
    function peopleDelete(data){

        return $http.get('/peopleDelete/delete',{
            params: data

        })
    }
    //----------------------------
    //功能导航权限
    function peoplePermission(data){

        return $http.get('/peoplePermission/permission/'+data);
    }
});
