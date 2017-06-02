var app = angular.module('signingServer',[]);
app.factory('signingSer',function ($http) {
    return {
        signingList : signingList,
        addSigning:addSigning,
        editSigning:editSigning,
        findSigningId:findSigningId,
        countSigning:countSigning,
        deleteSigning:deleteSigning,
        reviewSigning:reviewSigning
    };
    function signingList(data) {
        return $http.get('/siginmanage/list',{
            params: data

        })
    }

    //添加
    function addSigning(data){
        return $http.post('/siginmanage/add',data)
    }

    //编辑
    function editSigning(data){
        return $http.post('/siginmanage/edit',data)
    }
    //id查询
    function findSigningId(data){
        return $http.get('/siginmanage/getOneById',{
            params:data
        })
    }
    //分页总条数
    function countSigning(){
        return $http.get('/siginmanage/count')
    }
    //删除
    function deleteSigning(data){
        return $http.get('/siginmanage/delete',{
            params: data

        })
    }
    //审核
    function reviewSigning(data){
        return $http.post('/siginmanage/audit',data)
    }
});
