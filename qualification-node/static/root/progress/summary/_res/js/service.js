var app = angular.module('summaryServer',[]);
app.factory('summarySer',function ($http) {
    return {
        listProgress : listProgress,
        countProgress : countProgress,
        listArea:listArea,
        areaAna:areaAna,
        listProject:listProject,
        proAnalysis:proAnalysis,
        listDriver:listDriver,
        driAnalysis:driAnalysis
    };
    function listProgress(data) {
        return $http.get('/listProgress',{params:data})
    }
    function countProgress() {
        return $http.get('/countProgress')
    }
    function listArea(data) {
        return $http.get('/listArea',{params:data})
    }
    function areaAna(data) {
        return $http.get('/areaAna',{params:data})
    }
    function listProject(data) {
        return $http.get('/listProject',{params:data})
    }
    function proAnalysis(data) {
        return $http.get('/proAnalysis',{params:data})
    }
    function listDriver(data) {
        return $http.get('/listDriver',{params:data})
    }
    function driAnalysis(data) {
        return $http.get('/driAnalysis',{params:data})
    }
});
