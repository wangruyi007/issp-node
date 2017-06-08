var app = angular.module('openingServer',[]);
app.factory('openingSer',function ($http) {
    return {
        bidOpeningList : bidOpeningList,
        searchList : searchList,
        addBidOpening:addBidOpening,
        editBidOpening:editBidOpening,
        findBidOpeningId:findBidOpeningId,
        countBidOpening:countBidOpening,
        deleteBidOpening:deleteBidOpening,
        summaryOpen:summaryOpen,
        getCity:getCity
    };
    function bidOpeningList(data) {
        return $http.get('/bidopeninginfo/list',{
            params: data
        })
    }
    //搜索
    function searchList(data) {
        return $http.get('/bidopeninginfo/search',{
            params: data
        })
    }

    //添加
    function addBidOpening(data){
        return $http.post('/bidopeninginfo/add',data)
    }
    //编辑
    function editBidOpening(data){
        return $http.post('/bidopeninginfo/edit',data)
    }
    //id查询
    function findBidOpeningId(data){
        return $http.get('/bidopeninginfo/info',{
            params:data
        })
    }
    //分页总条数
    function countBidOpening(data){
        return $http.get('/bidopeninginfo/count',{params:data})
    }
    //删除
    function deleteBidOpening(data){
        return $http.get('/bidopeninginfo/delete',{
            params: data
        })
    }
    //汇总
    function summaryOpen(data) {
        return $http.get('/bidopeninginfo/collect?cities='+data)
    }
    //获取所有地区
    function getCity(){
        return $http.get('/bidopeninginfo/cities')
    }
});
