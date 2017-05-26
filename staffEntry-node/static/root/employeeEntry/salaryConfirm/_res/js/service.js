var app = angular.module('salaryConfirmServer',[]);
app.factory('salaryConfirmSer',function ($http) {
    return {
        listConfirm : listConfirm,
        countConfirm:countConfirm,
        addConfirm:addConfirm,
        getConfirmId:getConfirmId,
        confirmEdit:confirmEdit,
        deletedConfirm:deletedConfirm
    };
    //列表
    function listConfirm(data) {
        return $http.get('/salaryconfirmrecord/list',{
            params:data
        })
    }
    //分页
    function countConfirm(){
        return $http.get('/salaryconfirmrecord/count')
    }
    //添加
    function addConfirm(data){
        return $http.post('/salaryconfirmrecord/add',data)
    }
    //id编辑
    function getConfirmId(data) {
        return $http.get('/salaryconfirmrecord/getOne',{params:data})
    }
    //编辑
    function confirmEdit(data){

        return $http.post('/salaryconfirmrecord/edit',data)
    }
    //删除
    function deletedConfirm(data){
        return $http.get('/salaryconfirmrecord/delete',{params:data})
    }
});
