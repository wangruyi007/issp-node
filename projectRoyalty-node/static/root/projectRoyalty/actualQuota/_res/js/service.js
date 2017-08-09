var app = angular.module('quotaServer',[]);
app.factory('quotaSer',function ($http) {
    return {
        menuPermission : menuPermission,
        quotaList : quotaList,
        countQuota:countQuota,
        deleteQuota:deleteQuota,
        getQuotaWeightAllocation:getQuotaWeightAllocation,
        addQuota:addQuota,
        editQuota:editQuota,
        findQuotaId:findQuotaId,
        getAllArea:getAllArea,
        getMakespan:getMakespan,
        getMoney:getMoney,
        getCycle:getCycle,
        getEasy:getEasy,
        getProfit:getProfit,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/targetauota/guidePermission/'+data);
    }
    //列表
    function quotaList(data) {
        return $http.get('/targetauota/actual/maps',{
            params: data
        })
    }
    //分页总条数
    function countQuota(data){
        return $http.get('/targetauota/actual/getTotal',{params:data})
    }
    //删除
    function deleteQuota(data){
        return $http.get('/targetauota/delete',{
            params: data

        })
    }
    //获取实际权重分配
    function getQuotaWeightAllocation(data){
        return $http.get('/weightallocation/actual/find',data)
    }
    //添加
    function addQuota(data){
        return $http.post('/targetauota/actual/save',data)
    }

    //编辑
    function editQuota(data){
        return $http.post('/targetauota/update',data)
    }
    //id查询
    function findQuotaId(data){
        return $http.get('/targetauota/findById',{
            params:data
        })
    }

    //获取所有地区
    function getAllArea(data){
        return $http.get('/weightallocation/area/list',data)
    }
    //获取完工时间
    function getMakespan(){
        return $http.get('/completiontime/findOpinion')
    }
    //获取合同金额
    function getMoney(){
        return $http.get('/contractamount/findOpinion')
    }
    //获取汇款周期
    function getCycle(){
        return $http.get('/collectionperiod/findOpinion')
    }
    //获取难易度
    function getEasy(){
        return $http.get('/facility/findOpinion')
    }
    //获取毛利率
    function getProfit(){
        return $http.get('/ratio/findOpinion')
    }

});
