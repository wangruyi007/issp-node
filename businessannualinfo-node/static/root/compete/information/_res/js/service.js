var app = angular.module('informationServer',[]);
app.factory('informationSer',function ($http) {
    return {
        listCompeteregistered : listCompeteregistered,
        countinformation:countinformation,
        annualDelete:annualDelete,
        annualAdd:annualAdd,
        annualAll:annualAll,
        annualEdit:annualEdit,
        annualOne:annualOne,
        annualUpload:annualUpload,
        annualDowanload:annualDowanload
    };
    //列表
    function  listCompeteregistered(data) {
        return $http.get('/listCompeteregistered/list',{
            params:data
        })
    }
    //分页
    function countinformation(){
        return $http.get('/countinformation')
    };
    //删除
    function annualDelete(data){
        return $http.get('/annualDelete',{
            params:data
        })
    }
    //添加能力
    function annualAdd(data){
        return $http.post('/annualAdd',data)
    }
    //一共
    function annualAll(data) {
        return $http.get('/annualAll',{params:data})
    }
    //编辑
    function annualEdit(data){
        return $http.post('/annualEdit',data)
    }
    //一个
    function annualOne(data) {
        return $http.get('/annualOne',{
            params:data
        })
    }
    //上传
    function annualUpload(data) {
        return $http.post('/annualUpload',data)
    }
    //下载
    function annualDowanload(data) {
        return $http.post('/annualDowanload',data)
    }
});
