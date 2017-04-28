var app = angular.module('descriptServer',[]);
app.factory('descriptSer',function ($http) {
    return {
        descriptList : descriptList,
        addDescript:addDescript,
        editDescript:editDescript,
        findDescriptId:findDescriptId,
        countDescript:countDescript,
        deleteDescript:deleteDescript
    };
    function descriptList(data) {
        return $http.get('/demand/listDemand',{
            params: data

        })
    }

    //添加
    function addDescript(data){
        return $http.post('/demand/add',data)
    }

    //编辑
    function editDescript(data){
        return $http.post('/demand/edit',data)
    }
    //id查询
    function findDescriptId(data){
        return $http.get('/demand/getOne',{
            params:data
        })
    }
    //分页总条数
    function countDescript(){
        return $http.get('/demand/count')
    }
    //删除
    function deleteDescript(data){

        return $http.get('/demand/delete',{
            params: data

        })
    }
});
