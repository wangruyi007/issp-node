var app = angular.module('jopdetailServer',[]);
app.factory('jopdetailSer',function ($http) {
    return {
        listJopDetail : listJopDetail,
        countJopDetail:countJopDetail,
        getPosiInst:getPosiInst,
        addJopDetail:addJopDetail,
        getJopdetail:getJopdetail,
        editJopdetail:editJopdetail,
        deleteJopdetail:deleteJopdetail

    };
    function listJopDetail(data) {
        return $http.get('/listJopDetail/maps',{params: data})
    }
    function countJopDetail() {
        return $http.get('/countJopDetail/getTotal')
    }
    function getPosiInst() {
        return $http.get('/jopdetail/getPosiInst')
    }

    function addJopDetail(data) {
        return $http.post('/jopdetail/add',data)
    }
    function getJopdetail(data) {
        return $http.get('/jopdetail/findById',{params: data})
    }
    function editJopdetail(data) {
        return $http.post('/jopdetail/edit',data)
    }
    function deleteJopdetail(data) {
        return $http.get('/jopdetail/delete',{params: data})
    }


});
