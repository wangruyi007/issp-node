var app = angular.module('expressServer',[]);
app.factory('expressSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/courier/sonPermission');
    }
    function setPermission(){
        return $http.get('/courier/setButtonPermission');
    }
});