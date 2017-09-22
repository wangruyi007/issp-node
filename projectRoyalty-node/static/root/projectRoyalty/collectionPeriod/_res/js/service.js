var app = angular.module('periodServer',[]);
app.factory('periodSer',function ($http) {
    return {
        menuPermission : menuPermission,
        periodList : periodList,
        countPeriod:countPeriod,
        deletePeriod:deletePeriod,
        addPeriod:addPeriod,
        editPeriod:editPeriod,
        findPeriodId:findPeriodId,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/collectionperiod/guidePermission/'+data);
    }
    //列表
    function periodList(data) {
        return $http.get('/collectionperiod/maps',{
            params: data
        })
    }
    //分页总条数
    function countPeriod(data){
        return $http.get('/collectionperiod/getTotal',{params:data})
    }
    //删除
    function deletePeriod(data){
        return $http.get('/collectionperiod/delete',{
            params: data

        })
    }
    //添加
    function addPeriod(data){
        return $http.post('/collectionperiod/save',data)
    }

    //编辑
    function editPeriod(data){
        return $http.post('/collectionperiod/update',data)
    }
    //id查询
    function findPeriodId(data){
        return $http.get('/collectionperiod/findById',{
            params:data
        })
    }
});
