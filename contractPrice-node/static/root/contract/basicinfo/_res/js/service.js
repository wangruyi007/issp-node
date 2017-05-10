var app = angular.module('basicinfoServer',[]);
app.factory('basicinfoSer',function ($http) {
    return {
        listBasicinfo : listBasicinfo,
        countBasicinfo:countBasicinfo,
        addBasicinfo:addBasicinfo,
        getBasicinfo:getBasicinfo,
        editBasicinfo:editBasicinfo
    };
    function listBasicinfo(data) {
        return $http.get('/listBasicinfo',{params:data})
    }
    function countBasicinfo() {
        return $http.get('/countBasicinfo')
    }
    function addBasicinfo(data) {
        return $http.post('/addBasicinfo',data)
    }
    function getBasicinfo(data) {
        return $http.get('/getBasicinfo',{params:data})
    }
    function editBasicinfo(data) {
        return $http.post('/editBasicinfo',data)
    }

});
