var app = angular.module('detailServer',[]);
app.factory('detailSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listCustomerDetail : listCustomerDetail,
        getCusNum:getCusNum,
        getCustomers:getCustomers,
        addCustomerDetail:addCustomerDetail,
        getInfoByCustomerNum:getInfoByCustomerNum,
        countDetail:countDetail,
        editCustomerDetail:editCustomerDetail,
        deleteDetail:deleteDetail,
        alldetailName:alldetailName,
        alldetailArea:alldetailArea,

    };
    //菜单权限
    function menuPermission(data){
        return $http.get('/customerdetail/guidePermission/'+data);
    }
    //获取客户名
    function alldetailName(){
        return $http.get('/customerbaseinfo/getName')
    }
    //获取地区信息
    function alldetailArea(){
        return $http.get('/customerbaseinfo/getArea')
    }
    function listCustomerDetail(data) {
        return $http.post('/customerdetail/listCustomerDetail',data)
    }
    function getCusNum() {
        return $http.get('/customerbaseinfo/getCusNum')
    }
    //获取单个客户信息
    function getCustomers(data){
        return $http.post('/customer/customerbaseinfo/getCustomer',data)
    }

    //添加客户详情信息
    function addCustomerDetail(data){
        return $http.post('/customerdetail/add',data)
    }
    //获取客户详情信息
    function getInfoByCustomerNum(data){
        return $http.post('/customerdetail/getInfoByCustomerNum',data)
    }
    //编辑客户详情信息
    function editCustomerDetail(data){
        return $http.post('/customerdetail/editDetail',data)
    }
    //获取客户详情信息条数
    function countDetail(){
        return $http.get('/customerdetail/count')
    }
    //删除
    function deleteDetail(data){
        return $http.post('/customerdetail/detail',data)
    }

});
