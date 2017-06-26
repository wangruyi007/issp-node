var app = angular.module('developModule');
app.factory('developSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/yearplan/sonPermission');
    }
    function setPermission(){
        return $http.get('/yearplan/setButtonPermission');
    }
});