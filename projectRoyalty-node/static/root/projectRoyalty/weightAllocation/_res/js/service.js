var app = angular.module('weightServer',[]);
app.factory('weightSer',function ($http) {
    return {
        weightList : weightList,
        menuPermission : menuPermission,
        addWeight:addWeight,
        editWeigh:editWeigh,
        findWeightId:findWeightId,
        countWeight:countWeight,
        deleteWeight:deleteWeight,
        getAllArea:getAllArea,
        getMakespan:getMakespan,
        getMoney:getMoney,
        getCycle:getCycle,
        getEasy:getEasy,
        getProfit:getProfit,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/weightallocation/guidePermission/'+data);
    }
    //列表
    function weightList(data) {
        return $http.get('/weightallocation/target/maps',{
            params: data
        })
    }
    //分页总条数
    function countWeight(data){
        return $http.get('/weightallocation/target/getTotal',{params:data})
    }

    //添加
    function addWeight(data){
        return $http.post('/weightallocation/target/save',data)
    }

    //编辑
    function editWeigh(data){
        return $http.post('/weightallocation/update',data)
    }
    //id查询
    function findWeightId(data){
        return $http.get('/weightallocation/findById',{
            params:data
        })
    }
    //删除
    function deleteWeight(data){
        return $http.get('/weightallocation/delete',{
            params: data

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
