var app = angular.module('companycapServer',[]);
app.factory('companycapSer',function ($http) {
    return {
        listAbilityCompanyCap : listAbilityCompanyCap,
        countBaseInfo:countBaseInfo,
        addCompanyAbility:addCompanyAbility,
        deleteCompanyAbility:deleteCompanyAbility,
        editCompanyAbility:editCompanyAbility,
        getOneById:getOneById,
        searchCompanyAbility:searchCompanyAbility,
    };
    //列表
    function listAbilityCompanyCap(data) {
        return $http.get('/ability/abilitycompanycap/listAbilityCompanyCap',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/abilitycompanycap/count')
    }
    //添加公司能力
    function addCompanyAbility(data){
        return $http.post('/ability/addCompanyAbility/add',data)
    }
    //删除
    function deleteCompanyAbility(data){
        return $http.post('/ability/deleteCompanyAbility/delete',data)
    }
    //编辑
    function editCompanyAbility(data){
        return $http.post('/ability/editCompanyAbility/edit',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/ability/getOneById',data)
    }
    //搜索
    function searchCompanyAbility(data) {
        return $http.post('/ability/searchCompanyAbility',data)
    }
});
