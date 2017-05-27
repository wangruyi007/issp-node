var app = angular.module('relationshipServer',[]);
app.factory('relationshipSer',function ($http) {
    return {
        listRelationship:listRelationship,
        countRelationship:countRelationship
    };
    function listRelationship(data) {
        return $http.get('/listRelationship/list',{
            params: data
        })
    }
    //分页总条数
    function countRelationship(){
        return $http.get('/countRelationship/count')
    }
});
