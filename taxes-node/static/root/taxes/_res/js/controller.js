var app = angular.module('taxes1', []);
app.controller('taxes1Ctrl', function ($scope,$state) {
    if ($state.current.url == '/taxes') {//默认加载列表
         $state.go('root.taxes.taxes');
    }
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='taxesmanage';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'taxesmanage';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
});
