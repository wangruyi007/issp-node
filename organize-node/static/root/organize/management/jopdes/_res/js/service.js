var app = angular.module('jopdesServer',[]);
app.factory('jopdesSer',function ($http) {
    return {
        listJopDes : listJopDes,
        countJopDes:countJopDes,
        addJopDes:addJopDes,
        getPositionId:getPositionId,
        getAngle:getAngle,
        getDimension:getDimension,
        getClassify:getClassify,
        getDepartList:getDepartList,
        getJopDesById:getJopDesById,
        getOperate:getOperate,
        getReflect:getReflect,
        deleteJopdes:deleteJopdes,
        getPostsDetail:getPostsDetail
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
    function deleteJopdes(data) {
        return $http.get('/jopDes/delete',{params: data})
    }

    function getPositionId() {
        return $http.get('/getPositionId/id')
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
    function getOperate() {
        return $http.get('/posts/getOperate')
    }
    function getReflect() {
        return $http.get('/posts/getReflect')
    }
    function getPostsDetail(data) {
        return $http.get('/posts/getPostsDetail',{params: data})
    }




});
