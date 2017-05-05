var app = angular.module('sortServer',[]);
app.factory('sortSer',function ($http) {
    return {
        listSort:listSort,
        countSort:countSort,
        addSort:addSort,
        getSort:getSort,
        editSort:editSort,
        deleteSort:deleteSort,
        congealSort:congealSort,
        thawSort:thawSort
    };
    function listSort(data) {
        return $http.get('/instructionClassify/maps',{params: data})
    }
    function countSort() {
        return $http.get('/instructionClassify/getTotal')
    }
    function addSort(data) {
        return $http.post('/instructionClassify/save',data)
    }
    function getSort(data) {
        return $http.get('/instructionClassify/findById',{params: data})
    }
    function editSort(data) {
        return $http.post('/instructionClassify/update',data)
    }
    function deleteSort(data) {
        return $http.get('/instructionClassify/delete',{params: data})
    }
    function congealSort(data) {
        return $http.get('/instructionClassify/close',{params: data})
    }
    function thawSort(data) {
        return $http.get('/instructionClassify/open',{params: data})
    }

});