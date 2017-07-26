var app = angular.module('purchaseServer',[]);
app.factory('purchaseSer',function ($http) {
    return {
        menuPermission : menuPermission,
        purchaseList : purchaseList,
        countMaterial : countMaterial,
        addPurchase : addPurchase,
        findPurchaseId : findPurchaseId,
        editPurchaseW : editPurchaseW,
        getAllArea : getAllArea,

        // auditDemand : auditDemand,
        // deletePurchaseWorkers : deletePurchaseWorkers,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/materialbuy/guidePermission/'+data);
    }
    //物资购买列表
    function purchaseList(data) {
        return $http.get('/materialbuy/list',{
            params: data
        })
    }
    //分页总条数
    function countMaterial(data){
        return $http.get('/materialbuy/count',{params:data})
    }

    //添加
    function addPurchase(data){
        return $http.post('/materialbuy/add',data)
    }
    //id查询
    function findPurchaseId(data){
        return $http.get('/materialbuy/findbyid',{
            params:data
        })
    }
    //编辑
    function editPurchaseW(data){
        return $http.post('/materialbuy/edit',data)
    }
    //获取所有地区
    function getAllArea(data){
        return $http.get('/materialbuy/findArea',data)
    }

    // //审核
    // function auditDemand(data){
    //     return $http.post('/tempmatterdemand/audit',data)
    // }
    //
    // //删除
    // function deleteDemandWorkers(data){
    //     return $http.get('/tempmatterdemand/delete',{
    //         params: data
    //     })
    // }


});
