var app = angular.module('userjopServer',[]);
app.factory('userjopSer',function ($http) {
    return {
        listUserjop : listUserjop,
        countUserjop:countUserjop,
        addUserjop:addUserjop,
        getUserjop:getUserjop,
        editUserjop:editUserjop,
        deleteUserjop:deleteUserjop,
        parentId:parentId,
        getDepartList:getDepartList,
        getArrangement:getArrangement,
        getModule:getModule,
        congealUserjop:congealUserjop,
        thawUserjop:thawUserjop
    };
    function listUserjop(data) {
        return $http.get('/userjop/maps',{params: data})
    }
    function countUserjop() {
        return $http.get('/userjop/getTotal')
    }
    function addUserjop(data) {
        return $http.post('/userjop/add',data)
    }
    function getUserjop(data) {
        return $http.get('/userjop/findById',{params: data})
    }
    function editUserjop(data) {
        return $http.post('/userjop/edit',data)
    }
    function deleteUserjop(data) {
        return $http.get('/userjop/delete',{params: data})
    }
    function parentId() {
        return $http.get('/userjop/parent')
    }
    function getDepartList(data) {
        return $http.get('/userjop/getDepartList',{params: data})
    }
    function getArrangement() {
        return $http.get('/userjop/getArrangement')
    }
    function getModule() {
        return $http.get('/userjop/getModule')
    }
    function congealUserjop(data) {
        return $http.get('/userjop/congeal',{params: data})
    }
    function thawUserjop(data) {
        return $http.get('/userjop/thaw',{params: data})
    }
});