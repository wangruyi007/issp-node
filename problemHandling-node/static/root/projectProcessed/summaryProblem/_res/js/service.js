var app = angular.module('summaryServer',[]);
app.factory('summarySer',function ($http) {
    return {
        summaryProblemList : summaryProblemList
    };
    function summaryProblemList(data) {
        return $http.get('/collect/summary',{
            params: data

        })
    }
});
