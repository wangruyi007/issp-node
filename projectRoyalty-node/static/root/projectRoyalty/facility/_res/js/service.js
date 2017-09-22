var app = angular.module('facilityServer',[]);
app.factory('facilitySer',function ($http) {
    return {
        menuPermission : menuPermission,
        facilityList : facilityList,
        countFacility:countFacility,
        deleteFacility:deleteFacility,
        addFacility:addFacility,
        editFacility:editFacility,
        findFacilityId:findFacilityId,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/facility/guidePermission/'+data);
    }
    //列表
    function facilityList(data) {
        return $http.get('/facility/maps',{
            params: data
        })
    }
    //分页总条数
    function countFacility(data){
        return $http.get('/facility/getTotal',{params:data})
    }
    //删除
    function deleteFacility(data){
        return $http.get('/facility/delete',{
            params: data
        })
    }
    //添加
    function addFacility(data){
        return $http.post('/facility/save',data)
    }

    //编辑
    function editFacility(data){
        return $http.post('/facility/update',data)
    }
    //id查询
    function findFacilityId(data){
        return $http.get('/facility/findById',{
            params:data
        })
    }
});
