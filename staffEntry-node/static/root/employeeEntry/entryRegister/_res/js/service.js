var app = angular.module('registerServer',[]);
app.factory('registerSer',function ($http) {
    return {
        allList:allList,
        allCount:allCount,
        addData:addData,
        getOneById1:getOneById,
        editData:editData,
        deleteData:deleteData
    };
    //列表
    function allList(data) {
        return $http.get('/entry/applylend/list',{
            params:data
        })
    }
    //分页
    function allCount(){
        return $http.get('/entry/applylend/count')
    }
    //添加
    function addData(data){
        return $http.post('/entry/applylend/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.get('/entry/applylend/getOneById',{params:data})
    }
    //编辑
    function editData(data){
        return $http.post('/entry/applylend/editData',data)
    }
    //删除
    function deleteData(data){
        return $http.get('/entry/applylend/delete',{params:data})
    }
});
