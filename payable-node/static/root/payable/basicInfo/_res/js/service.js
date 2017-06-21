var app = angular.module('basicInfoServer',[]);
app.factory('basicInfoSer',function ($http) {
    return {
        listBasicInfo:listBasicInfo,
        countInfo:countInfo,
        addBasicInfo:addBasicInfo,
        editBasicInfo:editBasicInfo,
        findInfoId:findInfoId,
        deleteBasicInfo:deleteBasicInfo,
        editShareBasicInfo:editShareBasicInfo,
        summaryCompany:summaryCompany,
        listResultCompany:listResultCompany,
        summaryTax:summaryTax,
        listResultTax:listResultTax,
        addTax:addTax,
    };
    function listBasicInfo(data) {
        return $http.get('/listBasicInfo/list',{
            params: data
        })
    }
    //分页总条数
    function countInfo(){
        return $http.get('/countInfo/count')
    }
    //添加
    function addBasicInfo(data){
        return $http.post('/addBasicInfo/add',data)
    }
    //编辑
    function editBasicInfo(data){
        return $http.post('/editBasicInfo/edit',data)
    }
    //id查询
    function findInfoId(data){
        return $http.get('/findInfoId/info',{
            params:data
        })
    }
    //删除
    function deleteBasicInfo(data){
        return $http.get('/deleteBasicInfo/delete',{
            params: data
        })
    }
    //分摊
    function editShareBasicInfo(data){
        return $http.post('/editShareBasicInfo/share',data)
    }
    //汇总
    function summaryCompany(data) {
        return $http.post('/summaryCompany/summary',data)
    }
    //获取所有公司名
    function  listResultCompany(data) {
        return $http.get('/listResultCompany/id',{
            params:data
        })
    }
    //税种汇总
    function summaryTax(data) {
        return $http.post('/summaryTax/summary',data)
    }
    //所有税种
    function  listResultTax(data) {
        return $http.get('/listResultTax/id',{
            params:data
        })
    }
    //添加
    function addTax(data){
        return $http.post('/addTax/add',data)
    }

});
