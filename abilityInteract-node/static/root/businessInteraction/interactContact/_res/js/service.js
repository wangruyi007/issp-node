var app = angular.module('contactServer',[]);
app.factory('contactSer',function ($http) {
    return {
        interactList : interactList,
        addInteract:addInteract,
        editInteract:editInteract,
        findInteractId:findInteractId,
        countInteract:countInteract,
        deleteInteract:deleteInteract,
        MessageList:MessageList,
        addMessage:addMessage,
        countMessage:countMessage
    };
    function interactList(data) {
        return $http.get('/interactionrelation/listInteractionRelation',{
            params: data

        })
    }

    //添加
    function addInteract(data){
        return $http.post('/interactionrelation/add',data)
    }

    //编辑
    function editInteract(data){
        return $http.post('/interactionrelation/edit',data)
    }
    //id查询
    function findInteractId(data){
        return $http.get('/interactionrelation/getOne',{
            params:data
        })
    }
    //分页总条数
    function countInteract(){
        return $http.get('/interactionrelation/count')
    }
    //删除
    function deleteInteract(data){

        return $http.get('/interactionrelation/delete',{
            params: data

        })
    }
    //留言列表
    function MessageList(data){
        return $http.get('/leavingmessage/listMessage',{
            params: data
        })
    }
    //添加留言
    function addMessage(data){
        return $http.post('/leavingmessage/add',data)
    }
    //留言列表总条数
    function countMessage(){
        return $http.get('/leavingmessage/count')
    }
});
