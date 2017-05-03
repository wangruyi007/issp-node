var app = angular.module('infoServer',[]);
app.factory('infoSer',function ($http) {
    return {
        infoList : infoList,
        addInfo:addInfo,
        editInfo:editInfo,
        findInfoId:findInfoId,
        countInfo:countInfo,
        deleteInfo:deleteInfo
    };
    function infoList(data) {
        return $http.get('/biddinginfo/list',{
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
    function countInfo(){
        return $http.get('/biddinginfo/count')
    }
    //删除
    function deleteInfo(data){
        return $http.get('/biddinginfo/delete',{
            params: data

        })
    }
});
