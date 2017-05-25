var app = angular.module('recordServer',[]);
app.factory('recordSer',function ($http) {
    return {
        moneyList : moneyList,
        countRecord:countRecord,
        moneyDelete:moneyDelete,
        moneyAdd:moneyAdd,
        moneyEdit:moneyEdit,
        moneyMonthAll:moneyMonthAll,
        moneyConditionsAll:moneyConditionsAll,
        moneyAll:moneyAll,
        moneyId:moneyId,
        //moneyAnalyze:moneyAnalyze,
        moneyArea:moneyArea,
        moneyProject:moneyProject,
        moneyGroup:moneyGroup

    };
    //列表
    function  moneyList(data) {
        return $http.get('/moneyList/list',{
            params:data
        })
    }
    //分页
    function countRecord(){
        return $http.get('/countRecord')
    };
    //删除
    function moneyDelete(data){
        return $http.get('/moneyDelete/delete',{
            params:data
        })
    }
    //添加
    function moneyAdd(data){
        return $http.post('/moneyAdd/add',data)
    }
    //编辑
    function moneyEdit(data){
        return $http.post('/moneyEdit/edit',data)
    }
    //月汇总
    function moneyMonthAll(data){
        return $http.post('/moneyMonthAll/month',data)
    }
    //条件汇总
    function moneyConditionsAll(data){
        return $http.post('/moneyConditionsAll/conditions',data)
    }
    //分析
    //function moneyAnalyze(data){
    //    return $http.post('/moneyAnalyze/analyze',data)
    //}
    //地区分析
    function moneyArea(data){
       return $http.post('/moneyArea/Area',data)
    }
    //项目分析
    function moneyProject(data){
       return $http.post('/moneyProject/Project',data)
    }
    //项目组分析
    function moneyGroup(data){
       return $http.post('/moneyGroup/Group',data)
    }
    //查询总记录
    function moneyAll(data){
        return $http.get('/moneyAll/all',{
            params:data
        })
    }
    //根据id查询资金流水
    function moneyId(data){
        return $http.get('/moneyId/id',{
            params:data
        })
    }
});
