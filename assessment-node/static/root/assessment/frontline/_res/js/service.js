var app = angular.module('frontlineServer',[]);
app.factory('frontlineSer',function ($http) {
    return {
        listFrontLine:listFrontLine,
        countFrontLine:countFrontLine,
        addFrontLine:addFrontLine,
        editFrontLine:editFrontLine,
        findFrontLineId:findFrontLineId,
        deleteFrontLine:deleteFrontLine,
        allFrontLineProjects:allFrontLineProjects,
    };
    function listFrontLine(data) {
        return $http.get('/listFrontLine/list',{
            params: data
        })
    }
    //分页总条数
    function countFrontLine(){
        return $http.get('/countFrontLine/count')
    }
    //添加
    function addFrontLine(data){
        return $http.post('/addFrontLine/add',data)
    }
    //编辑
    function editFrontLine(data){
        return $http.post('/editFrontLine/edit',data)
    }
    //id查询
    function findFrontLineId(data){
        return $http.get('/findFrontLineId/info',{
            params:data
        })
    }
    //删除
    function deleteFrontLine(data){
        return $http.get('/deleteFrontLine/delete',{
            params: data
        })
    }
    //查询所有项目
    function allFrontLineProjects(){
        return $http.get('/allFrontLineProjects/id')
    }
});
