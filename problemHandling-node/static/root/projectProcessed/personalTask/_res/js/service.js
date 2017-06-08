var app = angular.module('taskServer',[]);
app.factory('taskSer',function ($http) {
    return {
        assignmentList : assignmentList,
        searchList : searchList,
        addAssignment:addAssignment,
        editAssignment:editAssignment,
        findAssignmentId:findAssignmentId,
        countAssignment:countAssignment,
        deleteAssignment:deleteAssignment
    };
    function assignmentList(data) {
        return $http.get('/involvedprocessingtask/list',{
            params: data

        })
    }
    //搜索
    function searchList(data) {
        return $http.get('/involvedprocessingtask/search',{
            params: data

        })
    }

    //添加
    function addAssignment(data){
        return $http.post('/involvedprocessingtask/add',data)
    }
    //编辑
    function editAssignment(data){
        return $http.post('/involvedprocessingtask/edit',data)
    }
    //id查询
    function findAssignmentId(data){
        return $http.get('/involvedprocessingtask/task',{
            params:data
        })
    }
    //分页总条数
    function countAssignment(data){
        return $http.get('/involvedprocessingtask/count',{params:data})
    }
    //删除
    function deleteAssignment(data){

        return $http.get('/involvedprocessingtask/delete',{
            params: data

        })
    }
});
