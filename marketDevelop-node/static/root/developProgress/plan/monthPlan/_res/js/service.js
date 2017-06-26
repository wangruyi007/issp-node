var app = angular.module('monthPlanServer',[]);
app.factory('monthPlanSer',function ($http) {
    return {
        menuPermission : menuPermission,
        monthPlanList : monthPlanList,
        addMonthPlan:addMonthPlan,
        monthPlanEdit:monthPlanEdit,
        getMonth:getMonth,
        getChoice:getChoice,
        monthSearch:monthSearch,
        countMonth:countMonth,
        deleteMonthPlan:deleteMonthPlan,
        getType:getType,
        viewFiles:viewFiles
    };
    //菜单功能权限
    function menuPermission(data) {
        return $http.get('/monthplan/guidePermission/'+data);
    }
    //列表
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
    function deleteMonthPlan(data){
        return $http.get('/plan/monthplan/delete',{
            params:data
        })
    }
    //获取业务类型
    function getType(){
        return $http.get('/businesstype/findThaw')
    }
    //附件列表
    function viewFiles(data){
        return $http.get('/monthplan/listFile',{params:data})
    }
});
