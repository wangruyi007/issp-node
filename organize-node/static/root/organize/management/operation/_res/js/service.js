var app = angular.module('operationServer',[]);
app.factory('operationSer',function ($http) {
    return {
        listOperation : listOperation,
        countOperation:countOperation,
        addOperation:addOperation,
        getOperation:getOperation,
        editOperation:editOperation,
        deleteOperation:deleteOperation,
        congealOperation:congealOperation,
        thawOperation:thawOperation
    };
    function listOperation(data) {
        return $http.get('/operate/maps',{params: data})
    }
    function countOperation() {
        return $http.get('/operate/getTotal')
    }
    function addOperation(data) {
        return $http.post('/operate/save',data)
    }
    function getOperation(data) {
        return $http.get('/operate/findById',{params: data})
    }
    function editOperation(data) {
        return $http.post('/operate/update',data)
    }
    function deleteOperation(data) {
        return $http.get('/operate/delete',{params: data})
    }
    function congealOperation(data) {
        return $http.get('/operate/close',{params: data})
    }
    function thawOperation(data) {
        return $http.get('/operate/open',{params: data})
    }

});