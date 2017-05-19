var app = angular.module('voucherServer',[]);
app.factory('voucherSer',function ($http) {
    return {
        VoucherList : VoucherList,
        LevelOne : LevelOne,
        LevelTwo : LevelTwo,
        LevelThree : LevelThree,
        addVoucher:addVoucher,
        editGeneration:editGeneration,
        findVoucherId:findVoucherId,
        countVoucher:countVoucher,
        deleteVoucher:deleteVoucher

    };
    function VoucherList(data) {
        return $http.get('/vouchergenerate/list',{
            params: data
        })
    }
    //获取所有一级科目
    function LevelOne(){
        return $http.get('/vouchergenerate/listFirstSubject')
    }
    //获取所有二级科目
    function LevelTwo(data){
        return $http.get('/vouchergenerate/listSubByFirst',{params:data})
    }
    //获取所有三级科目
    function LevelThree(data){
        return $http.get('/vouchergenerate/listTubByFirst',{params:data})
    }
    //添加
    function addVoucher(data){
        return $http.post('/vouchergenerate/add',data)
    }

    //编辑
    function editGeneration(data){
        return $http.post('/vouchergenerate/edit',data)
    }
    //id查询
    function findVoucherId(data){
        return $http.get('/vouchergenerate/getOne',{
            params:data
        })
    }
    //分页总条数
    function countVoucher(){
        return $http.get('/vouchergenerate/count')
    }
    //删除
    function deleteVoucher(data){
        return $http.get('/vouchergenerate/delete',{
            params: data
        })
    }

});
