var app = angular.module('app', ['ngVerify','ipCookie',
    'indexSerModule'
]);
app.controller('rootCtrl', function ($scope,$rootScope,$state,ipCookie) {
    if ($state.current.url == '/root') {//默认加载列表
        $state.go('root.initialize');
    }
    $scope.username = ipCookie('userName');
})
