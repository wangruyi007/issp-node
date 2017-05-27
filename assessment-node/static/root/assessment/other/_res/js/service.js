var app = angular.module('otherServer',[]);
app.factory('otherSer',function ($http) {
    return {
        listOther:listOther,
        countOther:countOther,
        addOther:addOther,
        editOther:editOther,
        findOtherId:findOtherId,
        deleteOther:deleteOther,
        allOtherProjects:allOtherProjects,
    };
    function listOther(data) {
        return $http.get('/listOther/list',{
            params: data
        })
    }
    //分页总条数
    function countOther(){
        return $http.get('/countOther/count')
    }
    //添加
    function addOther(data){
        return $http.post('/addOther/add',data)
    }
    //编辑
    function editOther(data){
        return $http.post('/editOther/edit',data)
    }
    //id查询
    function findOtherId(data){
        return $http.get('/findOtherId/info',{
            params:data
        })
    }
    //删除
    function deleteOther(data){
        return $http.get('/deleteOther/delete',{
            params: data
        })
    }
    //查询所有项目
    function allOtherProjects(){
        return $http.get('/allOtherProjects/id')
    }
});
