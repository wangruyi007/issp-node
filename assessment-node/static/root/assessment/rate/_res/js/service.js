var app = angular.module('rateServer',[]);
app.factory('rateSer',function ($http) {
    return {
        listRate:listRate,
    };
    function listRate(){
        return $http.get('/listRate/list')
    }
});
