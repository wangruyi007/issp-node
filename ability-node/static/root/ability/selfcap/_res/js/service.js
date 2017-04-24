var app = angular.module('selfcapServer',[]);
app.factory('selfcapSer',function ($http) {
    return {
        listAbilitySelfCap : listAbilitySelfCap,
        countSelfCap:countSelfCap,
        deleteAbilitySelf:deleteAbilitySelf,
        addSelfCapAbility:addSelfCapAbility,
        editSelfCapAbility:editSelfCapAbility,
        editEditSocial:editEditSocial,
        getTwoById:getTwoById,
        searchCompanyAbility:searchCompanyAbility,
    };
    //列表
    function listAbilitySelfCap(data) {
        return $http.get('/ability/abilitySelfCap/listAbilitySelfCap',{
            params:data
        })
    }
    //分页
    function countSelfCap(){
        return $http.get('/abilitySelfCap/count')
    }
    //删除
    function deleteAbilitySelf(data){
        return $http.post('/ability/deleteAbilitySelf/delete',data)
    }
    //添加能力
    function addSelfCapAbility(data){
        return $http.post('/ability/addSelfCapAbility/add',data)
    }
    //编辑
    function editSelfCapAbility(data){
        return $http.post('/ability/editSelfCapAbility/edit',data)
    }
    function editEditSocial(data){
        return $http.post('/ability/editEditSocial/editsocial',data)
    }
    //id编辑
    function getTwoById(data) {
        return $http.post('/ability/getTwoById',data)
    }
    //搜索
    function searchCompanyAbility(data) {
        return $http.post('/ability/searchCompanyAbility',data)
    }
});
