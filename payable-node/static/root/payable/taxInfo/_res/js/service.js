var app = angular.module('taxInfoServer',[]);
app.factory('taxInfoSer',function ($http) {
    return {
        listTax:listTax,
        countTaxInfo:countTaxInfo,
        editTaxInfo:editTaxInfo,
        findTaxInfoId:findTaxInfoId,
        deleteTaxInfo:deleteTaxInfo,
        summaryProject:summaryProject,
        listResultProject:listResultProject,
        projectTax:projectTax,
        listResultProjectTax:listResultProjectTax
    };
    function listTax(data) {
        return $http.get('/listTax/list',{
            params: data
        })
    }
    //分页总条数
    function countTaxInfo(){
        return $http.get('/countTaxInfo/count')
    }
     //编辑
    function editTaxInfo(data){
        return $http.post('/editTaxInfo/edit',data)
    }
    //id查询
    function findTaxInfoId(data){
        return $http.get('/findTaxInfoId/info',{
            params:data
        })
    }
    //删除
    function deleteTaxInfo(data){
        return $http.get('/deleteTaxInfo/delete',{
            params: data
        })
    }
    //汇总
    function summaryProject(data) {
        return $http.post('/summaryProject/summary',data)
    }
    //所有项目名称
    function  listResultProject(data) {
        return $http.get('/listResultProject/id',{
            params:data
        })
    }
    //汇总
    function projectTax(data) {
        return $http.post('/projectTax/summary',data)
    }
    function  listResultProjectTax(data) {
        return $http.get('/listResultProjectTax/id',{
            params:data
        })
    }
});
