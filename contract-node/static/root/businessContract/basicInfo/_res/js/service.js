var app = angular.module('basicServer',[]);
app.factory('basicSer',function ($http) {
    return {
        basicInfoList : basicInfoList,
        menuPermission : menuPermission,
        addBasicInfo:addBasicInfo,
        editBasicInfo:editBasicInfo,
        findBasicInfoId:findBasicInfoId,
        countBasicInfo:countBasicInfo,
        deleteBasicInfo:deleteBasicInfo,
        allProject:allProject,
        viewFiles:viewFiles
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/baseinfomanage/guidePermission/'+data);
    }
    //列表
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
    function countBasicInfo(data){
        return $http.get('/baseinfomanage/count',{params:data})
    }
    //删除
    function deleteBasicInfo(data){
        return $http.get('/baseinfomanage/delete',{
            params: data

        })
    }
    //获取所有名称
    function allProject(){
        return $http.get('/baseinfomanage/allInnerProjects')
    }
    //附件列表
    function viewFiles(data){
        return $http.get('/baseinfomanage/listFile',{params:data})
    }
});
