var app = angular.module('increServer',[]);
app.factory('increSer',function ($http) {
    return {
        increList : increList,
        increAdd:increAdd,
        increEdit:increEdit,
        increId:increId,
        increCount:increCount,
        increDelete:increDelete,
        increPermission:increPermission,

        //----------------------------------------------
        increHead:increHead,
        increManager:increManager,
        increBusiness:increBusiness
    };
    function increList(data) {
        return $http.get('/increList/list',{
            params: data

        })
    }

    //添加
    function increAdd(data){
        return $http.post('/increAdd/add',data)
    }
    //编辑
    function increEdit(data){
        return $http.post('/increEdit/edit',data)
    }
    //id查询
    function increId(data){
        return $http.get('/increId/Id',{
            params:data
        })
    }
    //分页总条数
    function increCount(){
        return $http.get('/increCount/count')
    }
    //删除
    function increDelete(data){

        return $http.get('/increDelete/delete',{
            params: data

        })
    }
    
    //功能导航权限
    function increPermission(data){

        return $http.get('/increPermission/permission/'+data);
    }

    //----------------------------
    //社保管理负责人审核
    function increHead(data){

        return $http.get('/increHead/head',{
            params: data

        })
    }
    //总经办审核
    function increManager(data){

        return $http.get('/increManager/manager',{
            params: data

        })
    }
    //运营商务部预算审核
    function increBusiness(data){
        return $http.post('/increBusiness/business',data)
    }
});
