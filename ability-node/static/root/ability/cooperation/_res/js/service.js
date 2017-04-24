var app = angular.module('cooperationServer',[]);
app.factory('cooperationSer',function ($http) {
    return {
        listAbilityCooperation : listAbilityCooperation,
        countCooperation:countCooperation,
       // searchCooperationAbility:searchCooperationAbility,
        deleteCooperationSelf:deleteCooperationSelf,
        addCooperationAbility:addCooperationAbility,
        editCooperationAbility:editCooperationAbility,
        editRelation:editRelation,
        getThreeById:getThreeById,

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
    //搜索
/*    function searchCooperationAbility(data) {
        return $http.post('/ability/searchCooperationAbility',data)
    }*/
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
});
