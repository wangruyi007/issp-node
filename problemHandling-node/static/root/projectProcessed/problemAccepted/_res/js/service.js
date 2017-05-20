var app = angular.module('problemServer',[]);
app.factory('problemSer',function ($http) {
    return {
        ProblemList : ProblemList,
        addProblem:addProblem,
        editProblem:editProblem,
        findProblemId:findProblemId,
        countProblem:countProblem,
        deleteProblem:deleteProblem
    };
    function ProblemList(data) {
        return $http.get('/problemaccept/listProblemAccept',{
            params: data

        })
    }

    //添加
    function addProblem(data){
        return $http.post('/problemaccept/add',data)
    }
    //编辑
    function editProblem(data){
        return $http.post('/problemaccept/edit',data)
    }
    //id查询
    function findProblemId(data){
        return $http.get('/problemaccept/problem',{
            params:data
        })
    }
    //分页总条数
    function countProblem(){
        return $http.get('/problemaccept/count')
    }
    //删除
    function deleteProblem(data){

        return $http.get('/problemaccept/delete',{
            params: data

        })
    }
});
