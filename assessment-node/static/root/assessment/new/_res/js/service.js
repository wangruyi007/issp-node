var app = angular.module('newServer',[]);
app.factory('newSer',function ($http) {
    return {
        listNew:listNew,
        countNew:countNew,
        menuPermission:menuPermission
    };
    function listNew(data) {
        return $http.get('/listNew/list',{
            params: data
        })
    }
    //分页总条数
    function countNew(){
        return $http.get('/countNew/count')
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/new/menu/'+data);
    }
});
