var app = angular.module('departServer',[]);
app.factory('departSer',function ($http) {
    return {
        listDepartment : listDepartment,
        countDepartment:countDepartment,
        addDepartment:addDepartment,
        getDepartment:getDepartment,
        editDepartment:editDepartment,
        deleteDepartment:deleteDepartment,
        congealDepartment:congealDepartment,
        thawDepartment:thawDepartment,
        getSystem:getSystem,
        departRange:departRange,
        viewRange:viewRange
    };
    function listDepartment(data) {
        return $http.get('/department/maps',{params: data})
    }
    function countDepartment() {
        return $http.get('/department/getTotal')
    }
    function getSystem() {
        return $http.get('/hierarchy/findStatus')
    }
    function addDepartment(data) {
        return $http.post('/department/save',data)
    }
    function getDepartment(data) {
        return $http.get('/department/findById',{params: data})
    }
    function editDepartment(data) {
        return $http.post('/department/edit',data)
    }
    function deleteDepartment(data) {
        return $http.get('/department/delete',{params: data})
    }
    function congealDepartment(data) {
        return $http.get('/department/congeal',{params: data})
    }
    function thawDepartment(data) {
        return $http.get('/department/thaw',{params: data})
    }
    function departRange(data) {
        return $http.get('/department/departRange',{params: data})
    }
    function viewRange(data) {
        return $http.get('/department/viewRange',{params: data})
    }

});
