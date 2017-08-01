var app = angular.module('dispatcherServer',[]);
app.factory('dispatcherSer',function ($http) {
    return {
        menuPermission : menuPermission,
        dispatcherList : dispatcherList,
        countDispatcher : countDispatcher,
        addDispatcher : addDispatcher,
        findDispatcherId : findDispatcherId,
        editGetDispatch : editGetDispatch,
        deleteDispatcher : deleteDispatcher,
        getAllTeam : getAllTeam,
        getAllName : getAllName,
        getAllArea : getAllArea,
        getAllCompany : getAllCompany,
        getAllTel : getAllTel,
        getDayCount : getDayCount,
        getWeekCount : getWeekCount,
        getMonthCount : getMonthCount,
        getYearCount : getYearCount,
        getNowWeek : getNowWeek,
        getAllMonth : getAllMonth,
        getAllY : getAllY,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/courier/guidePermission/'+data);
    }
    //分页查询列表
    function dispatcherList(data) {
        return $http.get('/courier/list',{
            params: data
        })
    }
  //获取总记录数
    function countDispatcher(){
        return $http.get('/courier/count')
    }

    //添加
    function addDispatcher(data){
        return $http.post('/courier/save',data)
    }
    //id查询
    function findDispatcherId(data){
        return $http.get('/courier/courier',{
            params:data
        })
    }
    //编辑
    function editGetDispatch(data){
        return $http.post('/courier/edit',data)
    }
    //删除
    function deleteDispatcher(data){
        return $http.get('/courier/delete',{
            params: data
        })
    }
    //获取所有部门
    function getAllTeam(data){
        return $http.get('/courier/findDepartments',data)
    }
    //获取所有人
    function getAllName(data){
        return $http.get('/courier/findAllNames',data)
    }
    //获取所有寄件地和收件地
    function getAllArea(data){
        return $http.get('/courier/findAllAreas',data)
    }
    //获取所有快递公司
    function getAllCompany(data){
        return $http.get('/courier/allCompany',data)
    }
    //获取日汇总
    function getDayCount(data){
        return $http.get('/courier/dayCount',{
            params: data
        })
    }
    //获取现在这周的周数
    function getNowWeek(data){
        return $http.get('/courier/findWeek',{
            params: data
        })
    }
    //获取周汇总
    function getWeekCount(data){
        return $http.get('/courier/weekCount',{
            params: data
        })
    }
    //获取所有月份
    function getAllMonth(data){
        return $http.get('/courier/allMonth',{
            params: data
        })
    }
    //月汇总
    function getMonthCount(data){
        return $http.get('/courier/monthCount',{
            params: data
        })
    }
    //获取所有月份
    function getAllY(data){
        return $http.get('/courier/allYear',{
            params: data
        })
    }
    //获取年汇总
    function getYearCount(data){
        return $http.get('/courier/yearCount',{
            params: data
        })
    }
    //获取寄/收件人的联系方式
    function getAllTel(data){
        return $http.get('/courier/findContact',{
            params:data
        })
    }
});
