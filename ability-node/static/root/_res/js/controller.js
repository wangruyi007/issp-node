var app = angular.module('app', ['ngVerify','ipCookie',
    'indexSerModule'
]);
app.controller('rootCtrl', function ($scope,$rootScope,$state,ipCookie,toastr) {
    if ($state.current.url == '/root') {//默认加载列表
        $state.go('root.ability');
    }
    $scope.username = ipCookie('userName');
    ipCookie("name", "Allen", { expires: 21 });
})
