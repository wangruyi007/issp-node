var app = angular.module('progrowServer',[]);
app.factory('progrowSer',function ($http) {
    return {
        listProGrow:listProGrow,
        menuPermission:menuPermission
    };
    function listProGrow(){
        return $http.get('/listProGrow/list')
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/progrow/menu/'+data);
    }
});
