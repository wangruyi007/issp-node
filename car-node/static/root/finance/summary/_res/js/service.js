var app = angular.module('summaryServer',[]);
app.factory('summarySer',function ($http) {
    return {
        listWeek : listWeek,
        listMonth : listMonth,

    };
    function listWeek(data) {
        return $http.get('/listWeek',{params:data})
    }
    function listMonth(data) {
        return $http.get('/listMonth',{params:data})
    }


});
