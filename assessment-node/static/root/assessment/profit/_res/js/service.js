var app = angular.module('profitServer',[]);
app.factory('profitSer',function ($http) {
    return {
        listProfit:listProfit,
    };
    function listProfit(){
        return $http.get('/listProfit/list')
    }
});
