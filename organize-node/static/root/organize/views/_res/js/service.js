var app = angular.module('viewsServer',[]);
app.factory('viewsSer',function ($http) {
    return {
        listCustomerBaseInfo : listCustomerBaseInfo,

    };
    function listCustomerBaseInfo(data) {
        return $http.post('/customer/customerbaseinfo/listCustomerBaseInfo',data)
    }

});
