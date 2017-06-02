var app = angular.module('app', ['ngVerify','ipCookie','toastr',
    'indexSerModule'
]);
app.controller('rootCtrl', function ($scope,$rootScope,$state,ipCookie,rootSer,$location,toastr) {
    if ($state.current.url == '/root') {//默认加载列表
        $state.go('root.customer');
    }
    $scope.username = ipCookie('username');
    if($scope.username==undefined){
        $scope.username="登录用户"
    }else {
        $scope.logined=true;
    }
    $scope.login = function(){
        var absurl = $location.absUrl();
        ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
        location.href="http://localhost/login";//部署到线上时要改为登录域名
    };
    $scope.logout = function(){

        var abs = window.location.host;
        var hashs = $location.url().split('?')[0];
        location.href="http://localhost/user/logout?absurl="+abs+"&hash="+hashs;

    }
});
