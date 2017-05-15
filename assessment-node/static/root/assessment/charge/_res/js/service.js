var app = angular.module('chargeServer',[]);
app.factory('chargeSer',function ($http) {
    return {
        listCharge:listCharge,
        countCharge:countCharge,
        addCharge:addCharge,
        editCharge:editCharge,
        findChargeId:findChargeId,
        deleteCharge:deleteCharge,
        allChargeProjects:allChargeProjects,
    };
    function listCharge(data) {
        return $http.get('/listCharge/list',{
            params: data
        })
    }
    //分页总条数
    function countCharge(){
        return $http.get('/countCharge/count')
    }
    //添加
    function addCharge(data){
        return $http.post('/addCharge/add',data)
    }
    //编辑
    function editCharge(data){
        return $http.post('/editCharge/edit',data)
    }
    //id查询
    function findChargeId(data){
        return $http.get('/findChargeId/info',{
            params:data
        })
    }
    //删除
    function deleteCharge(data){
        return $http.get('/deleteCharge/delete',{
            params: data
        })
    }
    //查询所有项目
    function allChargeProjects(){
        return $http.get('/allChargeProjects/id')
    }
});
