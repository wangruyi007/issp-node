var app = angular.module('targetInfoServer',[]);
app.factory('targetInfoSer',function ($http) {
    return {
        targetInfoList : targetInfoList,
        addTargetInfo:addTargetInfo,
        editTargetInfo:editTargetInfo,
        findTargetInfoId:findTargetInfoId,
        countTarget:countTarget,
        deleteTargetInfo:deleteTargetInfo
    };
    function targetInfoList(data) {
        return $http.get('/market/targetinformation/maps',{
            params: data
        })
    }

    //添加
    function addTargetInfo(data){
        return $http.post('/market/targetinformation/save',data)
    }
    //编辑
    function editTargetInfo(data){
        console.log(data);
        return $http.post('/market/targetinformation/update',data)
    }
    //id查询
    function findTargetInfoId(data){
        return $http.get('/market/targetinformation/findById',{
            params:data
        })
    }
    //分页总条数
    function countTarget(){
        return $http.get('/market/targetinformation/getTotal')
    }
    //删除
    function deleteTargetInfo(data){

        return $http.get('/market/targetinformation/delete',{
            params: data

        })
    }
});
