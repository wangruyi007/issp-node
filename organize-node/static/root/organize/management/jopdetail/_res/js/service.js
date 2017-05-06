var app = angular.module('jopdetailServer',[]);
app.factory('jopdetailSer',function ($http) {
    return {
        listJopDetail : listJopDetail,
        countJopDetail:countJopDetail,



        addSystem:addSystem,
        getSystem:getSystem,
        editSystem:editSystem,
        deleteSystem:deleteSystem,
        congealSystem:congealSystem,
        thawSystem:thawSystem
    };
    function listJopDetail(data) {
        return $http.get('/listJopDetail/maps',{params: data})
    }
    function countJopDetail() {
        return $http.get('/countJopDetail/getTotal')
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
