var app = angular.module('projectModule');
app.factory('projectSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/collectionperiod/sonPermission');
    }
    function setPermission(){
        return $http.get('/collectionperiod/setButtonPermission');
    }
});