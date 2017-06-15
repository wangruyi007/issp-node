var app = angular.module('waterServer',[]);
app.factory('waterSer',function ($http) {
    return {
        waterEdit:waterEdit,
        waterName:waterName,
        waterAdd:waterAdd,
        waterId:waterId,
        waterCount:waterCount,
        waterSummary:waterSummary,
        waterList : waterList,
        waterDelete:waterDelete,
        moneyProject:moneyProject,
        moneyGroup:moneyGroup,
        rentArea:rentArea
    };
    //编辑员工住宿水电费
    function waterEdit(data){
        return $http.post('/waterEdit/edit',data)
    }
    //获取名字
    function  waterName(data) {
        return $http.get('/waterName/name',{
            params:data
        })
    }
    //添加员工住宿水电费
    function waterAdd(data){
        return $http.post('/waterAdd/add',data)
    }
    //一个员工水电费
    function  waterId(data) {
        return $http.get('/waterId/id',{
            params:data
        })
    }
    //水电费总条数
    function  waterCount(data) {
        return $http.get('/waterCount/count',{
            params:data
        })
    }
    //汇总
    function waterSummary(data){
        return $http.get('/waterSummary/summary?names='+data.join(','))
    }
    //获取员工住宿水电费
    function  waterList(data) {
        return $http.get('/waterList/list',{
            params:data
        })
    }
    //删除员工住宿水电费
    function waterDelete(data){
        return $http.get('/waterDelete/delete',{
            params:data
        })
    }
    //项目分析
    function moneyProject(data){
       return $http.post('/moneyProject/Project',data)
    }
    //项目组分析
    function moneyGroup(data){
       return $http.post('/moneyGroup/Group',data)
    }
    //获取地区
    function rentArea(data){
        return $http.get('/rentArea/area',{
            params:data
        })
    }
});
