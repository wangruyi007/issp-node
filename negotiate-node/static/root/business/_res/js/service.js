var app = angular.module('business');
app.factory('businesSer', function($http){
    return {
        sonPermission : sonPermission,//下拉导航权限
        setPermission : setPermission//模块设置导航权限
    };
    function sonPermission(){
        return $http.get('/sonPermission/son');
    }
    function setPermission(){
        return $http.get('/setPermission/set');
    }
});