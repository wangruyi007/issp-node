var app = angular.module('typeServer',[]);
app.factory('typeSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listType : listType,
        countType:countType,
        congealType:congealType,
        thawType:thawType,
        deleteType:deleteType,
        addType:addType,
        editType:editType,
        getEditTypeById:getEditTypeById
    };
    //类型管理菜单权限
    function menuPermission(data){
        return $http.get('/suppliertype/guidePermission/'+data);
    }
    //列表
    function  listType(data) {
        return $http.get('/supplier/listType/list',{
            params:data
        })
    }
    //分页
    function countType(){
        return $http.get('/countType/count')
    }
    //冻结
    function congealType(data){
        return $http.post('/supplier/congealType/congeal',data)
    }
    //解冻
    function thawType(data){
        return $http.post('/supplier/thawType/thaw',data)
    }
    //删除
    function deleteType(data){
        return $http.get('/supplier/deleteType/delete',{params:data})
    }
    //添加
    function addType(data){
        return $http.post('/supplier/addType/add',data)
    }
    //编辑
    function editType(data){
        return $http.post('/supplier/editType/edit',data)
    }
    //id编辑
    function getEditTypeById(data) {
        return $http.get('/supplier/getEditTypeById',{params:data})
    }
});
