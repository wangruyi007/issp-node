var app = angular.module('supplier');
app.factory('supplierSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/supplierinformation/setButtonPermission');
    }
    function setPermission(){
        return $http.get('/supplierinformation/sonPermission');
    }
});