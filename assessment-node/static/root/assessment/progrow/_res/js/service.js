var app = angular.module('progrowServer',[]);
app.factory('progrowSer',function ($http) {
    return {
        listProGrow:listProGrow,
    };
    function listProGrow(){
        return $http.get('/listProGrow/list')
    }
});
