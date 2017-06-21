var app = angular.module('dispatchServer',[]);
app.factory('dispatchSer',function ($http) {
    return {
        dispatchWorkersList : dispatchWorkersList,
        menuPermission : menuPermission,
        addDispatchWorkers:addDispatchWorkers,
        editDispatchWorkers:editDispatchWorkers,
        findDispatchWorkersId:findDispatchWorkersId,
        countDispatchWorkers:countDispatchWorkers,
        deleteDispatchWorkers:deleteDispatchWorkers,
        getInnerNum:getInnerNum,
        getProjectNum:getProjectNum,
        allProject:allProject,
        viewFiles:viewFiles
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/dispatchsheet/guidePermission/'+data);
    }
    //列表
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
    //获取项目合同
    function getProjectNum(data) {
        return $http.get('/dispatchsheet/getProjectNum',{
            params: data
        })
    }
    //获取所有名称
    function allProject(){
        return $http.get('/dispatchsheet/allInnerProjects')
    }
    //附件列表
    function viewFiles(data){
        return $http.get('/dispatchsheet/listFile',{params:data})
    }
});
