var app = angular.module('detailServer',[]);
app.factory('detailSer',function ($http) {
    return {
        listDetail:listDetail,
        countDetail:countDetail,
        addDetail:addDetail,
        editDetail:editDetail,
        findDetailId:findDetailId,
        deleteDetail:deleteDetail,
        idByDetail:idByDetail,
        summaryDetail:summaryDetail,
        listSummaryArea:listSummaryArea,
        summaryDetails:summaryDetails,
        listDetails:listDetails,
        summaryProDetail:summaryProDetail,
        listSummaryPro:listSummaryPro,
        summaryProDetails:summaryProDetails,
        listSummaryGeneral:listSummaryGeneral,
        summaryGeneralDetails:summaryGeneralDetails,
        summaryGeneralDetail:summaryGeneralDetail
    };
    function listDetail(data) {
        return $http.get('/listDetail/list',{
            params: data
        })
    }
    //分页总条数
    function countDetail(){
        return $http.get('/countDetail/count')
    }
    //添加
    function addDetail(data){
        return $http.post('/addDetail/add',data)
    }
    //获取id
    function idByDetail(){
        return $http.get('/idByDetail/id')
    }
    //编辑
    function editDetail(data){
        return $http.post('/editDetail/edit',data)
    }
    //id查询
    function findDetailId(data){
        return $http.get('/findDetailId/info',{
            params:data
        })
    }
    //删除
    function deleteDetail(data){
        return $http.get('/deleteDetail/delete',{
            params: data
        })
    }
    //汇总
    function summaryDetail(data){
        return $http.get('/summaryDetail/summary?areas='+data.join(','))
    }
    //查询所有地区
    function  listSummaryArea() {
        return $http.get('/listSummaryArea/id')
    }
    //详情
    function summaryDetails(data){
        return $http.get('/summaryDetails/summary?areas='+data.join(','))
    }
    function listDetails(data) {
        return $http.get('/listDetails/list',{
            params:data
        })
    }
    //项目汇总
    function summaryProDetail(data){
        return $http.get('/summaryProDetail/summary?innerNames='+data.join(','))
    }
    //项目
    function  listSummaryPro() {
        return $http.get('/listSummaryPro/id')
    }
    function summaryProDetails(data){
        return $http.get('/summaryProDetails/summary?innerNames='+data.join(','))
    }
    //总包商
    function summaryGeneralDetail(data){
        return $http.get('/summaryGeneralDetail/summary?contractors='+data.join(','))
    }
    function  listSummaryGeneral() {
        return $http.get('/listSummaryGeneral/id')
    }
    function summaryGeneralDetails(data){
        return $http.get('/summaryGeneralDetails/summary?contractors='+data.join(','))
    }
});
