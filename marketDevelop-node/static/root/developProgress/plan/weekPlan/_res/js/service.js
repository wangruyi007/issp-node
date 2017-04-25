var app = angular.module('weekPlanServer',[]);
app.factory('weekPlanSer',function ($http) {
    return {
        weekPlanList : weekPlanList,
        addWeekPlan:addWeekPlan,
        editWeekPlan:editWeekPlan,
        weekSearch:weekSearch,
        weekByMonth:weekByMonth,
        countWeek:countWeek,
        getWeekChoice:getWeekChoice,
        deleteWeekplan:deleteWeekplan

    };
    function weekPlanList(data) {
        return $http.get('/plan/weekplan/maps',{
            params: data

        })
    }
    //添加
    function addWeekPlan(data){
        return $http.post('/plan/weekplan/save',data)
    }
    //编辑
    function editWeekPlan(data){
        return $http.post('/plan/weekplan/update',data)
    }
    //id查询
    function weekSearch(data){
        return $http.get('/plan/weekplan/findById',{
            params:data
        })
    }
    //根据月计划ID查询周计划
    function weekByMonth(data){
        return $http.get('/plan/weekplan/findByMonth',{
            params:data
        })
    }
    //分页总条数
    function countWeek(){
        return $http.get('/plan/weekplan/getTotal')
    }
    //获取月计划选择对象
    function getWeekChoice(){
        return $http.get('/plan/monthplan/getChoice')
    }
    //删除
    function deleteWeekplan(data){
        return $http.get('/plan/weekplan/delete',{
            params:data
        })
    }
});
