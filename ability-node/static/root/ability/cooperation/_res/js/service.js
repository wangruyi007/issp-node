var app = angular.module('cooperationServer',[]);
app.factory('cooperationSer',function ($http) {
    return {
        listAbilityCooperation : listAbilityCooperation,
        countCooperation:countCooperation,
        deleteCooperationSelf:deleteCooperationSelf,
        addCooperationAbility:addCooperationAbility,
        editCooperationAbility:editCooperationAbility,
        editRelation:editRelation,
        getThreeById:getThreeById,
        searchCooperationAbility:searchCooperationAbility,
        countCooperation2:countCooperation2,
        menuPermission:menuPermission
    };
    //列表
    function  listAbilityCooperation(data) {
        return $http.get('/ability/listAbilityCooperation/listCoop',{
            params:data
        })
    }
    //分页
    function countCooperation(){
        return $http.get('/countCooperation/count')
    }
    //删除
    function deleteCooperationSelf(data){
        return $http.post('/ability/deleteCooperationSelf/delete',data)
    }
    //添加能力
    function addCooperationAbility(data){
        return $http.post('/ability/addCooperationAbility/add',data)
    }
    //编辑
    function editCooperationAbility(data){
        return $http.post('/ability/editCooperationAbility/edit',data)
    }
    function editRelation(data){
        return $http.post('/ability/editRelation/editRel',data)
    }
    //id编辑
    function getThreeById(data) {
        return $http.post('/ability/getThreeById',data)
    }
    //搜索
    function searchCooperationAbility(data) {
        return $http.get('/ability/searchCooperationAbility',{
            params:data
        })
    }
    function countCooperation2(data){
        return $http.get('/countCooperation2/count',{
            params:data
        })
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/cooperation/guidePermission/'+data);
    }
});
