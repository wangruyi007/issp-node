var app = angular.module('rootModule', []);
app.factory('rootSer', function($http){
    return {
        login : login,
        register : register,
        existUsername : existUsername
    };

    function login(data){
        return $http.post('/user/login', data);
    }

    function register(data){
        return $http.post('/user/register', data);
    }

    function existUsername(data){
        return $http.post('/user/existUsername', data);
    }
})