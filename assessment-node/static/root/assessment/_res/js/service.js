var app = angular.module('assessment');
app.factory('basicSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/basicInfoManage/sonPermission');
    }
    function setPermission(){
        return $http.get('/basicInfoManage/setButtonPermission');
    }
});