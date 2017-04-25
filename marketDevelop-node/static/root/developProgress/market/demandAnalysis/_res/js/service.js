var app = angular.module('demandAnalysisServer',[]);
app.factory('demandAnalysisSer',function ($http) {
    return {
        demandList : demandList,
        addDemand:addDemand,
        editDemand:editDemand,
        findDemandId:findDemandId,
        countDemand:countDemand,
        deleteDemand:deleteDemand
    };
    function demandList(data) {
        return $http.get('/market/demandanalysis/maps',{
            params: data

        })
    }

    //添加
    function addDemand(data){
        return $http.post('/market/demandanalysis/save',data)
    }
    //编辑
    function editDemand(data){
        return $http.post('/market/demandanalysis/update',data)
    }
    //id查询
    function findDemandId(data){
        return $http.get('/market/demandanalysis/findById',{
            params:data
        })
    }
    //分页总条数
    function countDemand(){
        return $http.get('/market/demandanalysis/getTotal')
    }
    //删除
    function deleteDemand(data){

        return $http.get('/market/demandanalysis/delete',{
            params: data

        })
    }
});
