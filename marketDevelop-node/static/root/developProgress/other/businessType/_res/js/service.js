var app = angular.module('businessTypeServer',[]);
app.factory('businessTypeSer',function ($http) {
    return {
        businessTypeList : businessTypeList,
        businessTypeAdd:businessTypeAdd,
        businessTypeEdit:businessTypeEdit,
        findTypeId:findTypeId,
        countBusinessType:countBusinessType,
        deleteBusinessType:deleteBusinessType,
        congealType:congealType,
        thawType:thawType
    };
    function businessTypeList(data) {
        return $http.get('/market/businesstype/maps',{
            params: data

        })
    }

    //添加
    function businessTypeAdd(data){
        return $http.post('/market/businesstype/save',data)
    }
    //编辑
    function businessTypeEdit(data){
        return $http.post('/market/businesstype/update',data)
    }
    //id查询
    function findTypeId(data){
        return $http.get('/market/businesstype/findById',{
            params:data
        })
    }
    //分页总条数
    function countBusinessType(){
        return $http.get('/market/businesstype/getTotal')
    }
    //删除
    function deleteBusinessType(data){
        return $http.get('/market/businesstype/delete',{
            params: data
        })
    }
    //冻结
    function congealType(data){
        return $http.get('/market/businesstype/congeal',{
            params: data
        })
    }
    //解冻
    function thawType(data){
        return $http.get('/market/businesstype/thaw',{
            params: data
        })
    }
});
