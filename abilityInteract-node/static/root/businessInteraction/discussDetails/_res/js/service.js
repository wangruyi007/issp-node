var app = angular.module('discussServer',[]);
app.factory('discussSer',function ($http) {
    return {
        discussList : discussList,
        addDiscuss:addDiscuss,
        editDiscuss:editDiscuss,
        findDiscussId:findDiscussId,
        countDiscuss:countDiscuss,
        deleteDiscuss:deleteDiscuss
    };
    function discussList(data) {
        return $http.get('/talkdetail/listTalkDetail',{
            params: data
        })
    }

    //添加
    function addDiscuss(data){
        return $http.post('/talkdetail/add',data)
    }

    //编辑
    function editDiscuss(data){
        return $http.post('/talkdetail/edit',data)
    }
    //id查询
    function findDiscussId(data){
        return $http.get('/talkdetail/getOne',{
            params:data
        })
    }
    //分页总条数
    function countDiscuss(){
        return $http.get('/talkdetail/count')
    }
    //删除
    function deleteDiscuss(data){
        return $http.get('/talkdetail/delete',{
            params: data

        })
    }
});
