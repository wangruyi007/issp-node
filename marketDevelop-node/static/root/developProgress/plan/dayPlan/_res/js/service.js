var app = angular.module('dayPlanServer',[]);
app.factory('dayPlanSer',function ($http) {
    return {
        dayPlanList : dayPlanList,
        addDayPlan:addDayPlan,
        editDayPlan:editDayPlan,
        daySearch:daySearch,
        countDay:countDay,
        deleteDayPlan:deleteDayPlan

    };
    function dayPlanList(data) {

        return $http.get('/plan/dayplan/maps',{
            params: data
        })
    }

    //添加
    function addDayPlan(data){
        return $http.post('/plan/dayplan/save',data)
    }
    //编辑
    function editDayPlan(data){
        return $http.post('/plan/dayplan/update',data)
    }
    //id查询
    function daySearch(data){
        return $http.get('/plan/dayplan/findById',{
            params:data
        })
    }
    //分页总条数
    function countDay(){
        return $http.get('/plan/dayplan/getTotal')
    }
    //删除
    function deleteDayPlan(data){
        return $http.get('/plan/dayplan/delete',{
            params: data
        })
    }
});
