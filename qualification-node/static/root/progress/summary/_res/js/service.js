var app = angular.module('summaryServer',[]);
app.factory('summarySer',function ($http) {
    return {
        listProgress : listProgress,
        countProgress : countProgress,
        addProgress:addProgress,
        getProgress:getProgress,
        editProgress:editProgress,
        deleteProgress:deleteProgress
    };
    function listProgress(data) {
        return $http.get('/listProgress',{params:data})
    }
    function countProgress() {
        return $http.get('/countProgress')
    }
    function addProgress(data) {
        return $http.post('/addProgress',data)
    }
    function getProgress(data) {
        return $http.get('/getProgress',{params:data})
    }
    function editProgress(data) {
        return $http.post('/editProgress',data)
    }
    function deleteProgress(data) {
        return $http.get('/deleteProgress',{params:data})
    }
});
