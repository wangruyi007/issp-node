var app = angular.module('openingServer',[]);
app.factory('openingSer',function ($http) {
    return {
        bidOpeningList : bidOpeningList,
        addBidOpening:addBidOpening,
        editBidOpening:editBidOpening,
        findBidOpeningId:findBidOpeningId,
        countBidOpening:countBidOpening,
        deleteBidOpening:deleteBidOpening
    };
    function bidOpeningList(data) {
        return $http.get('/bidopeninginfo/list',{
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
    function countBidOpening(){
        return $http.get('/bidopeninginfo/count')
    }
    //删除
    function deleteBidOpening(data){
        return $http.get('/bidopeninginfo/delete',{
            params: data
        })
    }
});
