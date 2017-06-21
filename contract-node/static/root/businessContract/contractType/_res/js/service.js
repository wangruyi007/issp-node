var app = angular.module('contractServer',[]);
app.factory('contractSer',function ($http) {
    return {
        contractList : contractList,
        menuPermission : menuPermission,
        addContract:addContract,
        editContract:editContract,
        findContractId:findContractId,
        countContract:countContract,
        deleteContract:deleteContract,
        viewFiles:viewFiles
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/contractcategory/guidePermission/'+data);
    }
    //列表
    function contractList(data) {
        return $http.get('/contractcategory/list',{
            params: data

        })
    }

    //添加
    function addContract(data){
        return $http.post('/contractcategory/add',data)
    }

    //编辑
    function editContract(data){
        return $http.post('/contractcategory/edit',data)
    }
    //id查询
    function findContractId(data){
        return $http.get('/contractcategory/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countContract(){
        return $http.get('/contractcategory/count')
    }
    //删除
    function deleteContract(data){
        return $http.get('/contractcategory/delete',{
            params: data

        })
    }
    //附件列表
    function viewFiles(data){
        return $http.get('/contractcategory/listFile',{params:data})
    }
});
