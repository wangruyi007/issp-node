var app = angular.module('amountServer',[]);
app.factory('amountSer',function ($http) {
    return {
        menuPermission : menuPermission,
        amountList : amountList,
        countAmount:countAmount,
        deleteAmount:deleteAmount,
        addAmount:addAmount,
        editAmount:editAmount,
        findAmountId:findAmountId,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/contractamount/guidePermission/'+data);
    }
    //列表
    function amountList(data) {
        return $http.get('/contractamount/maps',{
            params: data
        })
    }
    //分页总条数
    function countAmount(data){
        return $http.get('/contractamount/getTotal',{params:data})
    }
    //删除
    function deleteAmount(data){
        return $http.get('/contractamount/delete',{
            params: data
        })
    }
    //添加
    function addAmount(data){
        return $http.post('/contractamount/save',data)
    }

    //编辑
    function editAmount(data){
        return $http.post('/contractamount/update',data)
    }
    //id查询
    function findAmountId(data){
        return $http.get('/contractamount/findById',{
            params:data
        })
    }


});
