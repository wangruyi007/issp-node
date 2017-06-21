var app = angular.module('profitServer',[]);
app.factory('profitSer',function ($http) {
    return {
        listProfit:listProfit,
        menuPermission:menuPermission
    };
    function listProfit(){
        return $http.get('/listProfit/list')
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/profit/menu/'+data);
    }
});
