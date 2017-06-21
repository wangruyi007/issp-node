var app = angular.module('infoServer',[]);
app.factory('infoSer',function ($http) {
    return {
        infoList : infoList,
        searchList : searchList,
        addInfo:addInfo,
        editInfo:editInfo,
        findInfoId:findInfoId,
        countInfo:countInfo,
        deleteInfo:deleteInfo,
        summaryInfo:summaryInfo,
        getCity:getCity
    };
    function infoList(data) {
        return $http.get('/biddinginfo/list',{
            params: data

        })
    }
    //搜索
    function searchList(data) {
        return $http.get('/biddinginfo/search',{
            params: data

        })
    }

    //添加
    function addInfo(data){
        return $http.post('/biddinginfo/add',data)
    }
    //编辑
    function editInfo(data){
        return $http.post('/biddinginfo/edit',data)
    }
    //id查询
    function findInfoId(data){
        return $http.get('/biddinginfo/info',{
            params:data
        })
    }
    //分页总条数
    function countInfo(data){
        return $http.get('/biddinginfo/count',{params:data})
    }
    //删除
    function deleteInfo(data){
        return $http.get('/biddinginfo/delete',{
            params: data

        })
    }
    //汇总
    function summaryInfo(data) {
        return $http.get('/biddinginfo/collect?cities='+data.join(','))
    }
    //获取所有地区
    function getCity(){
        return $http.get('/biddinginfo/cities')
    }
});
