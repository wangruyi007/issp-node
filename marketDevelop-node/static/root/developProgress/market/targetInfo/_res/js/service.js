var app = angular.module('targetInfoServer',[]);
app.factory('targetInfoSer',function ($http) {
    return {
        menuPermission : menuPermission,
        targetInfoList : targetInfoList,
        addTargetInfo:addTargetInfo,
        editTargetInfo:editTargetInfo,
        findTargetInfoId:findTargetInfoId,
        countTarget:countTarget,
        deleteTargetInfo:deleteTargetInfo,
        getArea:getArea,
        getType:getType,
        getCourse:getCourse,
        viewFiles:viewFiles
    };
    //菜单功能权限
    function menuPermission(data) {
        return $http.get('/targetinformation/guidePermission/'+data);
    }
    //列表
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
    //获取地区
    function getArea(){
        return $http.get('/targetinformation/findArea')
    }
    //获取业务类型
    function getType(){
        return $http.get('/businesstype/findThaw')
    }
    //获取业务方向科目数据
    function getCourse(){
        return $http.get('/businesscourse/findThaw')
    }
    //附件列表
    function viewFiles(data){
        return $http.get('/targetinformation/listFile',{params:data})
    }
});
