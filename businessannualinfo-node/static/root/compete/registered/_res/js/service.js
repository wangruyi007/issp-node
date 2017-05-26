var app = angular.module('registeredServer',[]);
app.factory('registeredSer',function ($http) {
    return {
        loginList : loginList,
        countBaseInfo:countBaseInfo,
        loginadd:loginadd,
        DeleteResgistered:DeleteResgistered,
        loginEdit:loginEdit,
        loginUpload:loginUpload,
        loginDownload:loginDownload,
        loginNews:loginNews,
        loginOne:loginOne
    };
    //列表
    function loginList(data) {
        return $http.get('/loginList',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/competeregistered/count')
    }
    //添加公司
    function loginadd(data){
        return $http.post('/loginadd',data)
    }
    //删除
    function DeleteResgistered(data){
        return $http.get('/businessregister/delete',{
            params:data
        })
    }
    //编辑
    function loginEdit(data){
        return $http.post('/loginEdit',data)
    }
     //上传
    function loginUpload(data){
        return $http.post('/loginUpload',data)
    }
    //下载
    function loginDownload(data){
        return $http.post('/loginDownload',data)
    }
    //总条数
     function loginNews(){
        return $http.get('/loginNews')
    }
    //一个
     function loginOne(data){
        return $http.get('/loginOne',{
            params:data
        })
    }
});
