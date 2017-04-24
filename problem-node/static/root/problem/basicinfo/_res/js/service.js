var app = angular.module('basicinfoServer',[]);
app.factory('basicinfoSer',function ($http) {
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
});
