var app = angular.module('newServer',[]);
app.factory('newSer',function ($http) {
    return {
        listNew:listNew,
        countNew:countNew,
    };
    function listNew(data) {
        return $http.get('/listNew/list',{
            params: data
        })
    }
    //分页总条数
    function countNew(){
        return $http.get('/countNew/count')
    }
});
