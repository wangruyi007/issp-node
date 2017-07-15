var app = angular.module('managementServer',[]);
app.factory('qualifiedSer',function ($http) {
    return {
        listQualified : listQualified,
        countQualified:countQualified,
        deleteQualified:deleteQualified,
        getOneById:getOneById,
        menuPermission:menuPermission,
        addQualified:addQualified,
        editQualified:editQualified
    };
    function listQualified(data) {
        return $http.get('/listQualified/list',{
            params:data
        })
    }
    function countQualified(){
        return $http.get('/countQualified/count')
    }
    function deleteQualified(data){
        return $http.get('/deleteQualified/delete',{params:data})
    }
    function menuPermission(data) {
        return $http.get('/qualified/guidePermission/'+data);
    }
    function addQualified(data){
        return $http.post('/addQualified/add',data)
    }
    function getOneById(data) {
        return $http.get('/qualified/getOneById',{params:data})
    }
    function editQualified(data){
        return $http.post('/editQualified/edit',data)
    }
});
