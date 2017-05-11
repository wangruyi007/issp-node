var app = angular.module('app', ['ngVerify','ipCookie',
    'indexSerModule'
]);
app.controller('rootCtrl', function ($scope,$rootScope,$state,ipCookie) {
    if ($state.current.url == '/root') {//默认加载列表
        $state.go('root.organize');
    }
    $scope.username = ipCookie('userName');
});
app.directive('resize', function ($window) {
    return function (scope, element) {

        var w = angular.element($window);
        scope.getWindowDimensions = function () {
            return { 'h': w.height() };
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            console.info(scope.windowHeight);
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
})