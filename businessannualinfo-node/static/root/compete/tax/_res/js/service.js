var app = angular.module('taxServer',[]);
app.factory('taxSer',function ($http) {
    return {
        changeList : changeList,
        counttax:counttax,
        changeOne:changeOne,
        changeAll:changeAll,
        changeDelete:changeDelete,
        changeAdd:changeAdd,
        changeUpload:changeUpload,
        changeEdit:changeEdit,
        changeDowanload:changeDowanload,
    };
    //列表
    function  changeList(data) {
        return $http.get('/changeList',{
            params:data
        })
    }
    //分页
    function counttax(){
        return $http.get('/counttax')
    };
    //一个
    function changeOne(data){
        return $http.get('/changeOne',{params:data})
    }
    //一共
    function changeAll(data){
        return $http.post('/changeAll')
    }
    //删除
    function changeDelete(data){
        return $http.get('/changeDelete/delete',{
            params:data
        })
    }
    //添加能力
    function changeAdd(data){
        return $http.post('/changeAdd',data)
    }
    //上传
    function changeUpload(data) {
        return $http.get('/changeUpload',{params:data})
    }
    //编辑
    function changeEdit(data){
        return $http.post('/changeEdit',data)
    }
    //下载
    function changeDowanload(data) {
        return $http.post('/changeDowanload',data)
    }
});
