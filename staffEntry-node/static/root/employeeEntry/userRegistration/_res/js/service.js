var app = angular.module('userRegistrationServer',[]);
app.factory('userRegistrationSer',function ($http) {
    return {
        listRegister : listRegister,
        countRegister:countRegister,
        getUserNumber:getUserNumber,
        addRegister:addRegister,
        getRegisterId:getRegisterId,
        registerEdit:registerEdit,
        deletedRegister:deletedRegister
    };
    //列表
    function listRegister(data) {
        return $http.get('/staffentryregister/list',{
            params:data
        })
    }
    //分页
    function countRegister(){
        return $http.get('/staffentryregister/count')
    }
    //获取注册的员工编号
    function getUserNumber(){
        return $http.get('/staffentryregister/maxEmpNumber')
    }
    //添加
    function addRegister(data){
        return $http.post('/staffentryregister/add',data)
    }
    //id编辑
    function getRegisterId(data) {
        return $http.get('/staffentryregister/getOne',{params:data})
    }
    //编辑
    function registerEdit(data){

        return $http.post('/staffentryregister/edit',data)
    }
    //删除
    function deletedRegister(data){
        return $http.get('/staffentryregister/delete',{params:data})
    }
});
