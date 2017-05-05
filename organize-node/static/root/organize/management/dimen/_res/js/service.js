var app = angular.module('dimensionServer',[]);
app.factory('dimensionSer',function ($http) {
    return {
        listDimension:listDimension,
        countDimension:countDimension,
        addDimension:addDimension,
        getDimension:getDimension,
        editDimension:editDimension,
        deleteDimension:deleteDimension,
        congealDimension:congealDimension,
        thawDimension:thawDimension
    };
    function listDimension(data) {
        return $http.get('/dimension/maps',{params: data})
    }
    function countDimension() {
        return $http.get('/dimension/getTotal')
    }
    function addDimension(data) {
        return $http.post('/dimension/save',data)
    }
    function getDimension(data) {
        return $http.get('/dimension/findById',{params: data})
    }
    function editDimension(data) {
        return $http.post('/dimension/update',data)
    }
    function deleteDimension(data) {
        return $http.get('/dimension/delete',{params: data})
    }
    function congealDimension(data) {
        return $http.get('/dimension/close',{params: data})
    }
    function thawDimension(data) {
        return $http.get('/dimension/open',{params: data})
    }

});