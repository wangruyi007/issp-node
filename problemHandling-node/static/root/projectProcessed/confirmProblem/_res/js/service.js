var app = angular.module('confirmServer',[]);
app.factory('confirmSer',function ($http) {
    return {
        resultList : resultList,
        addResult:addResult,
        editResult:editResult,
        findResultId:findResultId,
        countResult:countResult,
        deleteResult:deleteResult
    };
    function resultList(data) {
        return $http.get('/problemhandlingresult/list',{
            params: data

        })
    }

    //添加
    function addResult(data){
        return $http.post('/problemhandlingresult/add',data)
    }
    //编辑
    function editResult(data){
        return $http.post('/problemhandlingresult/edit',data)
    }
    //id查询
    function findResultId(data){
        return $http.get('/problemhandlingresult/result',{
            params:data
        })
    }
    //分页总条数
    function countResult(){
        return $http.get('/problemhandlingresult/count')
    }
    //删除
    function deleteResult(data){

        return $http.get('/problemhandlingresult/delete',{
            params: data

        })
    }
});
