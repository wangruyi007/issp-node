var app = angular.module('bankbillServer',[]);
app.factory('bankbillSer',function ($http) {
    return {
        listAccount : listAccount,
        bankSelf:bankSelf,
        // updateCheck:updateCheck
    };
    function listAccount() {
        return $http.get('/listaccount')
    }
    function bankSelf(data) {
        return $http.get('/bankself',{params:data})
    }
    // function updateCheck(data) {
    //     return $http.post('/updateCheck',data)
    // }


});
