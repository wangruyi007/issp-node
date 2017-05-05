var app = angular.module('motypeServer',[]);
app.factory('motypeSer',function ($http) {
    return {
        listMotype : listMotype,
        countMotype:countMotype,
        addMotype:addMotype,
        getMotype:getMotype,
        editMotype:editMotype,
        deleteMotype:deleteMotype,
        parentId:parentId,
        getDepartList:getDepartList,
        getArrangement:getArrangement,
        getModule:getModule,
        congealMotype:congealMotype,
        thawMotype:thawMotype
    };
    function listMotype(data) {
        return $http.get('/motype/maps',{params: data})
    }
    function countMotype() {
        return $http.get('/motype/getTotal')
    }
    function addMotype(data) {
        return $http.post('/motype/add',data)
    }
    function getMotype(data) {
        return $http.get('/motype/findById',{params: data})
    }
    function editMotype(data) {
        return $http.post('/motype/edit',data)
    }
    function deleteMotype(data) {
        return $http.get('/motype/delete',{params: data})
    }
    function parentId() {
        return $http.get('/motype/parent')
    }
    function getDepartList(data) {
        return $http.get('/motype/getDepartList',{params: data})
    }
    function getArrangement() {
        return $http.get('/motype/getArrangement')
    }
    function getModule() {
        return $http.get('/motype/getModule')
    }
    function congealMotype(data) {
        return $http.get('/motype/congeal',{params: data})
    }
    function thawMotype(data) {
        return $http.get('/motype/thaw',{params: data})
    }
});