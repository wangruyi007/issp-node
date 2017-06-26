var app = angular.module('app', ['ngVerify','ipCookie',
    'indexSerModule'
]);
app.controller('rootCtrl', function ($scope,$rootScope,$state,ipCookie,$location) {
    if ($state.current.url == '/root') {//默认加载列表
        $state.go('root.developProgress');
    }
    $scope.username = ipCookie('username');
    if($scope.username==undefined){
        $scope.username="登录用户"
    }else {
        $scope.logined=true;
    }
    $scope.login = function(){
        var absurl = $location.absUrl();
        window.location.href='http://localhost/login?url='+absurl
    };
    $scope.logout = function(){
        var abs = window.location.host;
        var hashs = $location.url().split('?')[0];
        location.href="http://localhost/user/logout?absurl="+abs+"&hash="+hashs;
    };
});
app.directive('resize', function ($window) {
    return function (scope, element) {

        var w = angular.element($window);
        scope.getWindowDimensions = function () {
            return { 'h': w.height() };
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.style = function () {
                return {
                    'height': (newValue.h - 240) + 'px',
                };
            };

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
});