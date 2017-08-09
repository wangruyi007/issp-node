var app = angular.module('ratioServer',[]);
app.factory('ratioSer',function ($http) {
    return {
        menuPermission : menuPermission,
        ratioList : ratioList,
        countRatio:countRatio,
        deleteRatio:deleteRatio,
        addRatio:addRatio,
        editRatio:editRatio,
        findRatioId:findRatioId,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/ratio/guidePermission/'+data);
    }
    //列表
    function ratioList(data) {
        return $http.get('/ratio/maps',{
            params: data
        })
    }
    //分页总条数
    function countRatio(data){
        return $http.get('/ratio/getTotal',{params:data})
    }
    //删除
    function deleteRatio(data){
        return $http.get('/ratio/delete',{
            params: data
        })
    }
    //添加
    function addRatio(data){
        return $http.post('/ratio/save',data)
    }

    //编辑
    function editRatio(data){
        return $http.post('/ratio/update',data)
    }
    //id查询
    function findRatioId(data){
        return $http.get('/ratio/findById',{
            params:data
        })
    }
});
