var app = angular.module('targetServer',[]);
app.factory('targetSer',function ($http) {
    return {
        menuPermission : menuPermission,
        targetList : targetList,
        countTarget:countTarget,
        deleteTarget:deleteTarget,
        getWeightAllocation:getWeightAllocation,
        addTarget:addTarget,
        editTarget:editTarget,
        findTargetId:findTargetId,
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
    function targetList(data) {
        return $http.get('/targetauota/target/maps',{
            params: data
        })
    }
    //分页总条数
    function countTarget(data){
        return $http.get('/targetauota/target/getTotal',{params:data})
    }
    //删除
    function deleteTarget(data){
        return $http.get('/targetauota/delete',{
            params: data

        })
    }
    //获取权重分配
    function getWeightAllocation(data){
        return $http.get('/weightallocation/target/find',data)
    }
    //添加
    function addTarget(data){
        return $http.post('/targetauota/target/save',data)
    }

    //编辑
    function editTarget(data){
        return $http.post('/targetauota/update',data)
    }
    //id查询
    function findTargetId(data){
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
