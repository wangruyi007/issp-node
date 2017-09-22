var app = angular.module('timeServer',[]);
app.factory('timeSer',function ($http) {
    return {
        menuPermission : menuPermission,
        timeList : timeList,
        countTime:countTime,
        deleteTime:deleteTime,
        addTime:addTime,
        editTime:editTime,
        findTimeId:findTimeId,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/completiontime/guidePermission/'+data);
    }
    //列表
    function timeList(data) {
        return $http.get('/completiontime/maps',{
            params: data
        })
    }
    //分页总条数
    function countTime(data){
        return $http.get('/completiontime/getTotal',{params:data})
    }
    //删除
    function deleteTime(data){
        return $http.get('/completiontime/delete',{
            params: data
        })
    }
    //添加
    function addTime(data){
        return $http.post('/completiontime/save',data)
    }

    //编辑
    function editTime(data){
        return $http.post('/completiontime/update',data)
    }
    //id查询
    function findTimeId(data){
        return $http.get('/completiontime/findById',{
            params:data
        })
    }
});
