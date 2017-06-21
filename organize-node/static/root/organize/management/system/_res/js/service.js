var app = angular.module('systemServer',[]);
app.factory('systemSer',function ($http) {
    return {
        listSystem : listSystem,
        countSystem:countSystem,
        addSystem:addSystem,
        getSystem:getSystem,
        editSystem:editSystem,
        deleteSystem:deleteSystem,
        congealSystem:congealSystem,
        thawSystem:thawSystem
    };
    function listSystem(data) {
        return $http.get('/hierarchy/maps',{params: data})
    }
    function countSystem() {
        return $http.get('/hierarchy/getTotal')
    }
    function addSystem(data) {
        return $http.post('/hierarchy/save',data)
    }
    function getSystem(data) {
        return $http.get('/hierarchy/findById',{params: data})
    }
    function editSystem(data) {
        return $http.post('/hierarchy/edit',data)
    }
    function deleteSystem(data) {
        return $http.get('/hierarchy/delete',{params: data})
    }
    function congealSystem(data) {
        return $http.get('/hierarchy/congeal',{params: data})
    }
    function thawSystem(data) {
        return $http.get('/hierarchy/thaw',{params: data})
    }

});
