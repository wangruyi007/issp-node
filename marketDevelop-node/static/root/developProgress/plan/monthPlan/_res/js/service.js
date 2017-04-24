var app = angular.module('monthPlanServer',[]);
app.factory('monthPlanSer',function ($http) {
    return {
        monthPlanList : monthPlanList,
        addMonthPlan:addMonthPlan,
        monthPlanEdit:monthPlanEdit,
        getMonth:getMonth,
        getChoice:getChoice,
        monthSearch:monthSearch,
        countMonth:countMonth,
        deleteMonthplan:deleteMonthplan


    };
    function monthPlanList(data) {
        return $http.get('/plan/monthplan/maps',{
            params: data

        })
    }

    //添加
    function addMonthPlan(data){
        return $http.post('/plan/monthplan/save',data)
    }
    //编辑
    function monthPlanEdit(data){
        return $http.post('/plan/monthplan/update',data)
    }
    //id获取月计划
    function getMonth(data){
        return $http.get('/plan/monthplan/findById',{
            params:data
        })
    }
    function getChoice(){
        return $http.get('/plan/yearplan/getChoice')
    }
    //获取年计划ID查询月计划
    function monthSearch(data){
        return $http.post('/plan/monthplan/findByYearId',data)
    }
    // 分页总条数
    function countMonth(){
        return $http.get('/plan/monthplan/getTotal')
    }
    //删除
    function deleteMonthplan(data){
        return $http.get('/plan/monthplan/delete',{
            params:data
        })
    }
});
