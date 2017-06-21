var app = angular.module('MaterialServer',[]);
app.factory('MaterialSer',function ($http) {
    return {
        sourceList : sourceList,
        addSource:addSource,
        editSource:editSource,
        findSourceId:findSourceId,
        countSource:countSource,
        deleteSource:deleteSource
    };
    function sourceList(data) {
        return $http.get('/tenderinfo/list',{
            params: data
        })
    }

    //添加
    function addSource(data){
        return $http.post('/tenderinfo/add',data)
    }
    //编辑
    function editSource(data){
        return $http.post('/tenderinfo/edit',data)
    }
    //id查询
    function findSourceId(data){
        return $http.get('/tenderinfo/info',{
            params:data
        })
    }
    //分页总条数
    function countSource(){
        return $http.get('/tenderinfo/count')
    }
    //删除
    function deleteSource(data){
        return $http.get('/tenderinfo/delete',{
            params: data
        })
    }
});
