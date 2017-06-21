var app = angular.module('basicInfoServer',[]);
app.factory('basicInfoSer',function ($http) {
    return {
        listBasicInfo : listBasicInfo,
        countBasicInfo:countBasicInfo,
        addBasicInfo:addBasicInfo,
        getBasicInfoId:getBasicInfoId,
        BasicInfoEdit:BasicInfoEdit,
        deletedBasicInfo:deletedBasicInfo,
        getAllPost:getAllPost,
        collectBasicInfo:collectBasicInfo
    };
    //列表
    function listBasicInfo(data) {
        return $http.get('/entrybasicinfo/listEntryBasicInfo',{
            params:data
        })
    }
    //分页
    function countBasicInfo(){
        return $http.get('/entrybasicinfo/count')
    }
    //添加
    function addBasicInfo(data){
        return $http.post('/entrybasicinfo/add',data)
    }
    //id编辑
    function getBasicInfoId(data) {
        return $http.get('/entrybasicinfo/getEntryBasicInfo',{params:data})
    }
    //编辑
    function BasicInfoEdit(data){
        console.log(data)
        return $http.post('/entrybasicinfo/edit',data)
    }
    //删除
    function deletedBasicInfo(data){
        return $http.get('/entrybasicinfo/delete',{params:data})
    }
    //获取所有岗位
    function getAllPost(){
        return $http.get('/entrybasicinfo/listPost')
    }
    //入职情况汇总
    function collectBasicInfo(data){
        return $http.post('/entrybasicinfo/collect',data)
    }
});
