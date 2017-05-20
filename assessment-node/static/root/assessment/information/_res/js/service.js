var app = angular.module('informationServer',[]);
app.factory('informationSer',function ($http) {
    return {
        listInformation:listInformation,
        countInformation:countInformation,
        addInformation:addInformation,
        editInformation:editInformation,
        findInformationId:findInformationId,
        deleteInformation:deleteInformation,
        allInformationProjects:allInformationProjects,
    };
    function listInformation(data) {
        return $http.get('/listInformation/list',{
            params: data
        })
    }
    //分页总条数
    function countInformation(){
        return $http.get('/countInformation/count')
    }
    //添加
    function addInformation(data){
        return $http.post('/addInformation/add',data)
    }
    //编辑
    function editInformation(data){
        return $http.post('/editInformation/edit',data)
    }
    //id查询
    function findInformationId(data){
        return $http.get('/findInformationId/info',{
            params:data
        })
    }
    //删除
    function deleteInformation(data){
        return $http.get('/deleteInformation/delete',{
            params: data
        })
    }
    //查询所有项目
    function allInformationProjects(){
        return $http.get('/allInformationProjects/id')
    }
});
