var app = angular.module('business', []);
app.controller('businessCtrl', function ($scope,$state) {
    if ($state.current.url == '/customer') {//默认加载列表
        $state.go('root.customer.basicinfo');
    }

});

