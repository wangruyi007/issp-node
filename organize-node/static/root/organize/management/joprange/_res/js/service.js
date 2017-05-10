var app = angular.module('joprangeServer',[]);
app.factory('joprangeSer',function ($http) {
    return {
        listJoprange : listJoprange,
        countJoprange:countJoprange,
        addJoprange:addJoprange,
        getJoprange:getJoprange,
        editJoprange:editJoprange,
        deleteJoprange:deleteJoprange,
        parentId:parentId,
        getDepartList:getDepartList,
        getArrangement:getArrangement,
        getModule:getModule,
        congealJoprange:congealJoprange,
        thawJoprange:thawJoprange,
        getDirection:getDirection,
        getProject:getProject,
        findClassify:findClassify
    };
    function listJoprange(data) {
        return $http.get('/joprange/maps',{params: data})
    }
    function countJoprange() {
        return $http.get('/joprange/getTotal')
    }
    function addJoprange(data) {
        return $http.post('/joprange/add',data)
    }
    function getJoprange(data) {
        return $http.get('/joprange/findById',{params: data})
    }
    function editJoprange(data) {
        return $http.post('/joprange/edit',data)
    }
    function deleteJoprange(data) {
        return $http.get('/joprange/delete',{params: data})
    }
    function parentId() {
        return $http.get('/joprange/parent')
    }
    function getDepartList(data) {
        return $http.get('/joprange/getDepartList',{params: data})
    }
    function getArrangement() {
        return $http.get('/joprange/getArrangement')
    }
    function getModule() {
        return $http.get('/joprange/getModule')
    }
    function congealJoprange(data) {
        return $http.get('/joprange/congeal',{params: data})
    }
    function thawJoprange(data) {
        return $http.get('/joprange/thaw',{params: data})
    }
    function getDirection() {
        return $http.get('/joprange/getDirection')
    }
    function getProject() {
        return $http.get('/joprange/getProject')
    }
    function findClassify() {
        return $http.get('/joprange/findClassify')
    }
});