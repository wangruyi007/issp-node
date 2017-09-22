var app = angular.module('actualServer',[]);
app.factory('actualSer',function ($http) {
    return {
        actualList : actualList,
        menuPermission : menuPermission,
        addActual:addActual,
        editActual:editActual,
        findActualId:findActualId,
        countActual:countActual,
        deleteActual:deleteActual,
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
    function actualList(data) {
        return $http.get('/weightallocation/actual/maps',{
            params: data
        })
    }
    //分页总条数
    function countActual(data){
        return $http.get('/weightallocation/actual/getTotal',{params:data})
    }

    //添加
    function addActual(data){
        return $http.post('/weightallocation/actual/save',data)
    }

    //编辑
    function editActual(data){
        return $http.post('/weightallocation/update',data)
    }
    //id查询
    function findActualId(data){
        return $http.get('/weightallocation/findById',{
            params:data
        })
    }
    //删除
    function deleteActual(data){
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