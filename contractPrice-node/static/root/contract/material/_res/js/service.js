var app = angular.module('materialServer',[]);
app.factory('materialSer',function ($http) {
    return {
        listCustomerBaseInfo : listCustomerBaseInfo,
        cusNumber:cusNumber,
        customerLevelName:customerLevelName,
        addCustomerbaseinfo:addCustomerbaseinfo,
        getCustomers:getCustomers,
        editCustomerbaseinfo:editCustomerbaseinfo,
        congealCustomerbaseinfo:congealCustomerbaseinfo,
        thawCustomerbaseinfo:thawCustomerbaseinfo,
        countBaseInfo:countBaseInfo,
        deleteCustomerbaseinfo:deleteCustomerbaseinfo
    };
    function listCustomerBaseInfo(data) {
        return $http.post('/customer/customerbaseinfo/listCustomerBaseInfo',data)
    }
    //获取客户编号
    function cusNumber(){
        return $http.get('/customer/customerbaseinfo/generateNumber')
    }
    function customerLevelName(){
        return $http.get('/customer/customerlevel/listCustomerLevel')
    }
    //添加客户信息
    function addCustomerbaseinfo(data){
        return $http.post('/customer/customerbaseinfo/add',data)
    }
    //获取单个客户信息
    function getCustomers(data){
        return $http.post('/customer/customerbaseinfo/getCustomer',data)
    }
    //编辑客户信息
    function editCustomerbaseinfo(data){
        return $http.post('/customer/customerbaseinfo/edit',data)
    }
    //冻结客户信息
    function congealCustomerbaseinfo(data){
        return $http.post('/customer/customerbaseinfo/congeal',data)
    }
    //解冻
    function thawCustomerbaseinfo(data){
        return $http.post('/customer/customerbaseinfo/thaw',data)
    }
    //分页总条数
    function countBaseInfo(){
        return $http.get('/customerbaseinfo/count')
    }
    //删除
    function deleteCustomerbaseinfo(data){
        return $http.post('/customer/customerbaseinfo/delete',data)
    }
});
