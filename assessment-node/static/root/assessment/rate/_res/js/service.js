var app = angular.module('rateServer',[]);
app.factory('rateSer',function ($http) {
    return {
        listRate:listRate,
        menuPermission:menuPermission
    };
    function listRate(){
        return $http.get('/listRate/list')
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/rate/menu/'+data);
    }
});
