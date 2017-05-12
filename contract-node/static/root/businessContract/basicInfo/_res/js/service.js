var app = angular.module('basicServer',[]);
app.factory('basicSer',function ($http) {
    return {
        basicInfoList : basicInfoList,
        addBasicInfo:addBasicInfo,
        editBasicInfo:editBasicInfo,
        findBasicInfoId:findBasicInfoId,
        countBasicInfo:countBasicInfo,
        deleteBasicInfo:deleteBasicInfo
    };
    function basicInfoList(data) {
        return $http.get('/baseinfomanage/list',{
            params: data

        })
    }

    //添加
    function addBasicInfo(data){
        return $http.post('/baseinfomanage/add',data)
    }

    //编辑
    function editBasicInfo(data){
        return $http.post('/baseinfomanage/edit',data)
    }
    //id查询
    function findBasicInfoId(data){
        return $http.get('/baseinfomanage/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countBasicInfo(){
        return $http.get('/baseinfomanage/count')
    }
    //删除
    function deleteBasicInfo(data){
        return $http.get('/baseinfomanage/delete',{
            params: data

        })
    }
});
