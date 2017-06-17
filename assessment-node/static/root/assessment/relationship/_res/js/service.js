var app = angular.module('relationshipServer',[]);
app.factory('relationshipSer',function ($http) {
    return {
        listRelationship:listRelationship,
        countRelationship:countRelationship,
        menuPermission:menuPermission
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
    //菜单权限
    function menuPermission(data) {
        return $http.get('/relationship/menu/'+data);
    }
});
