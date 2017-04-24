var app = angular.module('marketMiningServer',[]);
app.factory('marketMiningSer',function ($http) {
    return {
        channelList : channelList,
        channelAdd:channelAdd,
        channelEdit:channelEdit,
        findChannelId:findChannelId,
        countChannel:countChannel,
        channelDelete:channelDelete
    };
    function channelList(data) {
        return $http.get('/market/marketchannel/maps',{
            params: data

        })
    }

    //添加
    function channelAdd(data){
        return $http.post('/market/marketchannel/save',data)
    }
    //编辑
    function channelEdit(data){
        return $http.post('/market/marketchannel/update',data)
    }
    //id查询
    function findChannelId(data){
        return $http.get('/market/marketchannel/findById',{
            params:data
        })
    }
    //分页总条数
    function countChannel(){
        return $http.get('/market/marketchannel/getTotal')
    }
    //删除
    function channelDelete(data){

        return $http.get('/market/marketchannel/delete',{
            params: data

        })
    }
});
