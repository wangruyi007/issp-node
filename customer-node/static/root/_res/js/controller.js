var app = angular.module('app', ['ngVerify','ngDialog','ipCookie',
    'indexSerModule'
]);
app.controller('rootCtrl', function ($scope,$rootScope,$state,ipCookie) {
    if ($state.current.url == '/root') {//默认加载列表
        $state.go('root.customer');
    }
    $scope.username = ipCookie('userName');
})
