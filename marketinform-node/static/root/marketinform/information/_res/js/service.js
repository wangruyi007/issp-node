var app = angular.module('informationServer',[]);
app.factory('informationSer',function ($http) {
    return {
        listInformation : listInformation,
        countInformation:countInformation,
        addInformation:addInformation,
        deleteInformation:deleteInformation,
        editInformation:editInformation,
        getInformationById:getInformationById,
        summaryInformation:summaryInformation,
        listSummaryArea:listSummaryArea
    };
    //列表
    function listInformation(data) {
        return $http.get('/marketinform/listInformation/list',{
            params:data
        })
    }
    //分页
    function countInformation(){
        return $http.get('/countInformation/count')
    }
    //添加
    function addInformation(data){
        return $http.post('/marketinform/addInformation/add',data)
    }
    //删除
    function deleteInformation(data) {
        return $http.get('/marketinform/deleteInformation/delete',{
            params:data
        })
    }

    //编辑
    function editInformation(data){
        return $http.post('/marketinform/editInformation/edit',data)
    }
    //id编辑
    function getInformationById(data) {
        return $http.get('/marketinform/getInformationById',{
            params:data
        })
    }
    //汇总
    function summaryInformation(data){
        return $http.get('/summaryInformation/summary?areas='+data.join(','))
    }
    //查询所有地区
    function  listSummaryArea() {
        return $http.get('/listSummaryArea/id')
    }
});
