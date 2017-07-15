var app = angular.module('file');
app.factory('basicSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/file/sonPermission');
    }
    function setPermission(){
        return $http.get('/file/setButtonPermission');
    }
});