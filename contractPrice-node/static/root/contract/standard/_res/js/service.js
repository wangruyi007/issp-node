var app = angular.module('standardServer',[]);
app.factory('standardSer',function ($http) {
    return {
        listStandard : listStandard,
        countStandard:countStandard,
        addStandard:addStandard,
        getStandard:getStandard,
        editStandard:editStandard,
        deleteStandard:deleteStandard,
        collectStandard:collectStandard
    };
    function listStandard(data) {
        return $http.get('/listStandard',{params:data})
    }
    function countStandard() {
        return $http.get('/countStandard')
    }
    function addStandard(data) {
        return $http.post('/addStandard',data)
    }
    function getStandard(data) {
        return $http.get('/getStandard',{params:data})
    }
    function editStandard(data) {
        return $http.post('/editStandard',data)
    }
    function deleteStandard(data) {
        return $http.get('/deleteStandard',{params:data})
    }

    function collectStandard(data) {
        return $http.post('/collectStandard',data)
    }

});
