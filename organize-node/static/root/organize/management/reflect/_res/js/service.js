var app = angular.module('reflectServer',[]);
app.factory('reflectSer',function ($http) {
    return {
        listReflect : listReflect,
        countReflect:countReflect,
        addReflect:addReflect,
        deleteReflect:deleteReflect,
        editReflect:editReflect,
        getReflect:getReflect,
        congealReflect:congealReflect,
        thawReflect:thawReflect,
    };
    function listReflect(data) {
        return $http.get('/listReflect/maps',{params: data})
    }
    function countReflect() {
        return $http.get('/countReflect/getTotal')
    }
    function addReflect(data) {
        return $http.post('/addReflect/save',data)
    }
    function deleteReflect(data) {
        return $http.get('/deleteReflect/delete',{params: data})
    }
    function getReflect(data) {
        return $http.get('/getReflect/findById',{params: data})
    }
    function editReflect(data) {
        return $http.post('/editReflect/edit',data)
    }
    function congealReflect(data) {
        return $http.get('/congealReflect/congeal',{params: data})
    }
    function thawReflect(data) {
        return $http.get('/thawReflect/thaw',{params: data})
    }
});
