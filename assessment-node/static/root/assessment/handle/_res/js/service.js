var app = angular.module('handleServer',[]);
app.factory('handleSer',function ($http) {
    return {
        listHand:listHand,
        countHand:countHand,
        addHand:addHand,
        editHand:editHand,
        findHandId:findHandId,
        deleteHand:deleteHand,
        allHandProjects:allHandProjects,
        editQualitative:editQualitative,
        editRation:editRation,
        menuPermission:menuPermission,
    };
    function listHand(data) {
        return $http.get('/listHand/list',{
            params: data
        })
    }
    //分页总条数
    function countHand(){
        return $http.get('/countHand/count')
    }
    //添加
    function addHand(data){
        return $http.post('/addHand/add',data)
    }
    //编辑
    function editHand(data){
        return $http.post('/editHand/edit',data)
    }
    //id查询
    function findHandId(data){
        return $http.get('/findHandId/info',{
            params:data
        })
    }
    //删除
    function deleteHand(data){
        return $http.get('/deleteHand/delete',{
            params: data
        })
    }
    //查询所有项目
    function allHandProjects(){
        return $http.get('/allHandProjects/id')
    }
    //定性指标
    function editQualitative(data){
        return $http.post('/editQualitative/edit',data)
    }
    //定量指标
    function editRation(data){
        return $http.post('/editRation/edit',data)
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/handle/menu/'+data);
    }
});
