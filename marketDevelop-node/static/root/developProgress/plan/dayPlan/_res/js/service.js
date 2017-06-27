var app = angular.module('dayPlanServer',[]);
app.factory('dayPlanSer',function ($http) {
    return {
        menuPermission : menuPermission,
        dayPlanList : dayPlanList,
        addDayPlan:addDayPlan,
        editDayPlan:editDayPlan,
        daySearch:daySearch,
        countDay:countDay,
        deleteDayPlan:deleteDayPlan,
        getType:getType,
      getCourse:getCourse,
        viewFiles:viewFiles
    };
    //菜单功能权限
    function menuPermission(data) {
        return $http.get('/dayplan/guidePermission/'+data);
    }
    //列表
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
    //获取业务类型
    function getType(){
        return $http.get('/businesstype/findThaw')
    }
    //获取业务方向科目数据
    function getCourse(){
        return $http.get('/businesscourse/findThaw')
    }
    //附件列表
    function viewFiles(data){
        return $http.get('/dayplan/listFile',{params:data})
    }
});
