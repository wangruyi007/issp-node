var app = angular.module('angleServer',[]);
app.factory('angleSer',function ($http) {
    return {
        listAngle : listAngle,
        countAngle:countAngle,
        addAngle:addAngle,
        getAngle:getAngle,
        editAngle:editAngle,
        deleteAngle:deleteAngle,
        congealAngle:congealAngle,
        thawAngle:thawAngle
    };
    function listAngle(data) {
        return $http.get('/angle/maps',{params: data})
    }
    function countAngle() {
        return $http.get('/angle/getTotal')
    }
    function addAngle(data) {
        return $http.post('/angle/save',data)
    }
    function getAngle(data) {
        return $http.get('/angle/findById',{params: data})
    }
    function editAngle(data) {
        return $http.post('/angle/update',data)
    }
    function deleteAngle(data) {
        return $http.get('/angle/delete',{params: data})
    }
    function congealAngle(data) {
        return $http.get('/angle/close',{params: data})
    }
    function thawAngle(data) {
        return $http.get('/angle/open',{params: data})
    }

});