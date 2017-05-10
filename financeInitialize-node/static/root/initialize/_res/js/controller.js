var app = angular.module('initialize', []);
app.controller('initializeCtrl', function ($scope,$state) {
    if ($state.current.url == '/initialize') {//默认加载列表
         $state.go('root.initialize.setting');
    }
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='currency';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'currency';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
});
