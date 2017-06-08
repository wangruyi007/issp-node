var app = angular.module('dispatchServer',[]);
app.factory('dispatchSer',function ($http) {
    return {
        dispatchWorkersList : dispatchWorkersList,
        addDispatchWorkers:addDispatchWorkers,
        editDispatchWorkers:editDispatchWorkers,
        findDispatchWorkersId:findDispatchWorkersId,
        countDispatchWorkers:countDispatchWorkers,
        deleteDispatchWorkers:deleteDispatchWorkers,
        getInnerNum:getInnerNum
    };
    function dispatchWorkersList(data) {
        return $http.get('/dispatchsheet/list',{
            params: data

        })
    }

    //添加
    function addDispatchWorkers(data){
        return $http.post('/dispatchsheet/add',data)
    }

    //编辑
    function editDispatchWorkers(data){
        return $http.post('/dispatchsheet/edit',data)
    }
    //id查询
    function findDispatchWorkersId(data){
        return $http.get('/dispatchsheet/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countDispatchWorkers(data){
        return $http.get('/dispatchsheet/count',{params:data})
    }
    //删除
    function deleteDispatchWorkers(data){
        return $http.get('/dispatchsheet/delete',{
            params: data

        })
    }
    //获取内部项目编号
    function getInnerNum() {
        return $http.get('/baseinfomanage/getInnerNum')
    }
});
