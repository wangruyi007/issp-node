var app = angular.module('numberServer',[]);
app.factory('numberSer',function ($http) {
    return {
        listNumber : listNumber,
        countNumber:countNumber,
        addNumber:addNumber,
        getNumber:getNumber,
        editNumber:editNumber,
        deleteNumber:deleteNumber
    };
    function listNumber(data) {
        return $http.get('/designNumberInfo/list',{params: data})
    }
    function countNumber() {
        return $http.get('/designNumberInfo/count')
    }
    function addNumber(data) {
        return $http.post('/designNumberInfo/add',data)
    }
    function getNumber(data) {
        return $http.get('/designNumberInfo/getnumber',{params: data})
    }
    function editNumber(data) {
        return $http.post('/designNumberInfo/edit',data)
    }
    function deleteNumber(data) {
        return $http.get('/designNumberInfo/delete',{params: data})
    }

});
