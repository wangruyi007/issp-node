var app = angular.module('jopdesServer',[]);
app.factory('jopdesSer',function ($http) {
    return {
        listJopDes : listJopDes,
        countJopDes:countJopDes,
        getDepartmentId:getDepartmentId,
        addJopDes:addJopDes,
        getPositionId:getPositionId,
        getArrangementId:getArrangementId,
        getHierarchyId:getHierarchyId,
        getAngle:getAngle,
        getDimension:getDimension,
        getClassify:getClassify,
        getDepartList:getDepartList,
        getJopDesById:getJopDesById,
    };
    function listJopDes(data) {
        return $http.get('/listJopDes/maps',{params: data})
    }
    function countJopDes() {
        return $http.get('/countJopDes/getTotal')
    }
    function addJopDes(data) {
        return $http.post('/addJopDes/save',data)
    }
    function getDepartmentId() {
        return $http.get('/getDepartmentId/id')
    }
    function getPositionId() {
        return $http.get('/getPositionId/id')
    }
    function getArrangementId() {
        return $http.get('/getArrangementId/id')
    }
    function getHierarchyId() {
        return $http.get('/getHierarchyId/id')
    }
    function getAngle() {
        return $http.get('/posts/getAngle')
    }
    function getDimension() {
        return $http.get('/posts/getDimension')
    }
    function getClassify() {
        return $http.get('/posts/getClassify')
    }
    function getDepartList(data) {
        return $http.get('/posts/getDepartList',{params: data})
    }
    function editJopDes(data) {
        return $http.post('/editJopDes/edit',data)
    }
    function getJopDesById(data) {
        return $http.get('/getJopDesById/findById',{params: data})
    }






    function countSystem() {
        return $http.get('/hierarchy/getTotal')
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
